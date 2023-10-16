import React from "react";

import { Button, Img, Text } from "components";

type AccountsV1Accountweb1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "depositname"
  | "accounttitleTwo"
  | "blocked"
  | "blockedtitleTwo"
  | "priceEight"
  | "balancetitleTwo"
  | "priceNine"
  | "interesttitle"
  | "p20dectwentytwo"
> &
  Partial<{
    depositname: string;
    accounttitleTwo: string;
    blocked: string;
    blockedtitleTwo: string;
    priceEight: string;
    balancetitleTwo: string;
    priceNine: string;
    interesttitle: string;
    p20dectwentytwo: string;
  }>;

const AccountsV1Accountweb1: React.FC<AccountsV1Accountweb1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-5 w-5" src="images/img_icon.svg" alt="icon" />
        <div className="flex flex-col gap-[9px] items-start justify-end md:ml-[0] ml-[34px]">
          <Text className="text-black-900 text-sm" size="txtInterBold14">
            {props?.depositname}
          </Text>
          <Text
            className="text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            {props?.accounttitleTwo}
          </Text>
        </div>
        <div className="flex flex-col gap-[9px] items-start justify-end md:ml-[0] ml-[103px]">
          <Text className="text-black-900 text-sm" size="txtInterBold14">
            {props?.blocked}
          </Text>
          <Text
            className="text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            {props?.blockedtitleTwo}
          </Text>
        </div>
        <div className="flex flex-col gap-2 items-start justify-end md:ml-[0] ml-[107px]">
          <Text className="text-black-900 text-sm" size="txtInterBold14">
            {props?.priceEight}
          </Text>
          <Text
            className="text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            {props?.balancetitleTwo}
          </Text>
        </div>
        <div className="flex flex-col gap-2 items-start justify-end md:ml-[0] ml-[88px]">
          <Text className="text-black-900 text-sm" size="txtInterBold14">
            {props?.priceNine}
          </Text>
          <Text
            className="text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            {props?.interesttitle}
          </Text>
        </div>
        <Button className="bg-blue_gray-50_99 cursor-pointer font-bold font-inter min-w-[104px] md:ml-[0] ml-[67px] md:mt-0 my-1.5 py-2.5 rounded-lg text-center text-gray-600 text-xs">
          {props?.p20dectwentytwo}
        </Button>
        <Img
          className="h-[46px] ml-3 md:ml-[0] mr-1 w-[46px]"
          src="images/img_notification.svg"
          alt="notification_Two"
        />
      </div>
    </>
  );
};

AccountsV1Accountweb1.defaultProps = {
  depositname: "Consumer loan",
  accounttitleTwo: "Name",
  blocked: "18%",
  blockedtitleTwo: "Rate",
  priceEight: "$6.140,00",
  balancetitleTwo: "Credit amount",
  priceNine: "$5.640,00",
  interesttitle: "Paid amount",
};

export default AccountsV1Accountweb1;
