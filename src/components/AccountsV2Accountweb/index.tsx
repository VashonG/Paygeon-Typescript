import React from "react";

import { Img, Text } from "components";

type AccountsV2AccountwebProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "price"
  | "accountnumber"
  | "userimage"
  | "priceone"
  | "blockedtitle"
  | "pricetwo"
  | "accountnumberco"
> &
  Partial<{
    price: string;
    accountnumber: string;
    userimage: string;
    priceone: string;
    blockedtitle: string;
    pricetwo: string;
    accountnumberco: string;
  }>;

const AccountsV2Accountweb: React.FC<AccountsV2AccountwebProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start mt-0.5 w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start">
              <Text className="text-black-900 text-sm" size="txtInterBold14">
                {props?.price}
              </Text>
              <Text
                className="text-gray-600 text-sm"
                size="txtInterRegular14Gray600"
              >
                {props?.accountnumber}
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col h-7 items-center justify-start my-1.5 w-7">
              {!!props?.userimage ? (
                <Img
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  alt="img"
                  src="props?.userimage"
                />
              ) : null}
            </div>
          </div>
          <Text
            className="mt-[35px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtInterExtraBold24Black900"
          >
            {props?.priceone}
          </Text>
          <div className="flex flex-row items-start justify-between mt-0.5 w-full">
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Text
                className="text-gray-600 text-xs w-auto"
                size="txtInterMedium12"
              >
                {props?.blockedtitle}
              </Text>
              <Text
                className="text-gray-600 text-xs w-auto"
                size="txtInterBold12Gray600"
              >
                {props?.pricetwo}
              </Text>
            </div>
            <Text
              className="mt-0.5 text-green-A700 text-right text-xs"
              size="txtInterBold12GreenA700"
            >
              {props?.accountnumberco}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

AccountsV2Accountweb.defaultProps = {
  price: "USD",
  accountnumber: "3210 **** **** 7890",
  priceone: "$88.200,00",
  blockedtitle: "Blocked amount",
  pricetwo: "$1,200.00",
  accountnumberco: "Active",
};

export default AccountsV2Accountweb;
