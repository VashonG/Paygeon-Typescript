import React from "react";

import { Button, Img, Text } from "components";

type CardsListV1CardswebitemProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userimage"
  | "accountnumber"
  | "accounttitle"
  | "symbol"
  | "currencytitle"
  | "cardbalance"
  | "balancetitle"
  | "blockedamount"
  | "blockedtitle"
  | "activelabel"
  | "notificationimage"
> &
  Partial<{
    userimage: string;
    accountnumber: string;
    accounttitle: string;
    symbol: string;
    currencytitle: string;
    cardbalance: string;
    balancetitle: string;
    blockedamount: string;
    blockedtitle: string;
    activelabel: string;
    notificationimage: string;
  }>;

const CardsListV1Cardswebitem: React.FC<CardsListV1CardswebitemProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-6 w-6" alt="volume" src="props?.userimage" />
        <div className="flex flex-col gap-2 items-start justify-end ml-8 md:ml-[0]">
          <Text className="text-black-900 text-sm" size="txtInterBold14">
            {props?.accountnumber}
          </Text>
          <Text
            className="text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            {props?.accounttitle}
          </Text>
        </div>
        <div className="flex flex-col gap-2 items-start justify-end md:ml-[0] ml-[88px]">
          <Text className="text-black-900 text-sm" size="txtInterBold14">
            {props?.symbol}
          </Text>
          <Text
            className="text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            {props?.currencytitle}
          </Text>
        </div>
        <div className="flex flex-col gap-[7px] items-start justify-end md:ml-[0] ml-[106px]">
          <Text className="mt-0.5 text-black-900 text-sm" size="txtInterBold14">
            {props?.cardbalance}
          </Text>
          <Text
            className="text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            {props?.balancetitle}
          </Text>
        </div>
        <div className="flex flex-col gap-[7px] items-start justify-end md:ml-[0] ml-[111px]">
          <Text className="mt-0.5 text-black-900 text-sm" size="txtInterBold14">
            {props?.blockedamount}
          </Text>
          <Text
            className="text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            {props?.blockedtitle}
          </Text>
        </div>
        <Button className="bg-green-A700 cursor-pointer font-bold font-inter min-w-[104px] md:ml-[0] ml-[70px] md:mt-0 my-1.5 py-2.5 rounded-lg text-center text-green-A700 text-xs">
          {props?.activelabel}
        </Button>
        <Img
          className="h-[46px] ml-3 md:ml-[0] mr-1 w-[46px]"
          alt="notification"
          src="props?.notificationimage"
        />
      </div>
    </>
  );
};

CardsListV1Cardswebitem.defaultProps = {
  accountnumber: "3215 **** **** 4340",
  accounttitle: "Card number",
  symbol: "04/23",
  currencytitle: "Valid",
  cardbalance: "€64.120,50",
  balancetitle: "Card balance",
  blockedamount: "€1.960,00",
  blockedtitle: "Blocked amount",
};

export default CardsListV1Cardswebitem;
