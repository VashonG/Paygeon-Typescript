import React from "react";

import { Button, Img, Text } from "components";

type AccountsV1AccountwebProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userimage"
  | "accountnumber"
  | "accounttitle"
  | "currency"
  | "currencytitle"
  | "accountbalance"
  | "balancetitle"
  | "blockedamount"
  | "blockedtitle"
  | "active"
> &
  Partial<{
    userimage: string;
    accountnumber: string;
    accounttitle: string;
    currency: string;
    currencytitle: string;
    accountbalance: string;
    balancetitle: string;
    blockedamount: string;
    blockedtitle: string;
    active: string;
  }>;

const AccountsV1Accountweb: React.FC<AccountsV1AccountwebProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col h-6 items-center justify-start md:mt-0 my-3 w-6">
          {!!props?.userimage ? (
            <Img
              className="h-6 md:h-auto rounded-[50%] w-6"
              alt="img"
              src="props?.userimage"
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-[9px] items-start justify-end ml-8 md:ml-[0]">
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
        <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[94px] pt-0.5">
          <Text className="text-black-900 text-sm" size="txtInterBold14">
            {props?.currency}
          </Text>
          <Text
            className="text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            {props?.currencytitle}
          </Text>
        </div>
        <div className="flex flex-col gap-[7px] items-start justify-end md:ml-[0] ml-[88px]">
          <Text className="mt-0.5 text-black-900 text-sm" size="txtInterBold14">
            {props?.accountbalance}
          </Text>
          <Text
            className="text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            {props?.balancetitle}
          </Text>
        </div>
        <div className="flex flex-col gap-[7px] items-start justify-end md:ml-[0] ml-[88px]">
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
          {props?.active}
        </Button>
        <Img
          className="h-[46px] ml-3 md:ml-[0] mr-1 w-[46px]"
          src="images/img_notification.svg"
          alt="notification"
        />
      </div>
    </>
  );
};

AccountsV1Accountweb.defaultProps = {
  accountnumber: "8210 **** **** 4340",
  accounttitle: "Account number",
  currency: "EUR",
  currencytitle: "Currency",
  accountbalance: "€64.120,50",
  balancetitle: "Account balance",
  blockedamount: "€1.960,00",
  blockedtitle: "Blocked amount",
};

export default AccountsV1Accountweb;
