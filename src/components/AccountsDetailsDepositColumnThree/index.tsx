import React from "react";

import { Text } from "components";

type AccountsDetailsDepositColumnThreeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "title"
  | "price"
  | "expirationdate"
  | "daysleft"
  | "subtitleleft"
  | "subtitleright"
> &
  Partial<{
    title: string;
    price: string;
    expirationdate: string;
    daysleft: string;
    subtitleleft: string;
    subtitleright: string;
  }>;

const AccountsDetailsDepositColumnThree: React.FC<
  AccountsDetailsDepositColumnThreeProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start mb-0.5 w-[97%] md:w-full">
          <Text
            className="text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            {props?.title}
          </Text>
          <Text
            className="mt-2 text-black-900 text-lg"
            size="txtInterExtraBold18Black900"
          >
            {props?.price}
          </Text>
          <div className="h-1 mt-5 overflow-hidden relative w-full">
            <div className="w-full h-full absolute bg-amber_A400 rounded-[2px]"></div>
            <div
              className="h-full absolute bg-amber_300  rounded-[2px]"
              style={{ width: "50%" }}
            ></div>
          </div>
          <div className="flex flex-row items-center justify-between mt-[22px] w-full">
            <Text className="text-black-900 text-sm" size="txtInterBold14">
              {props?.expirationdate}
            </Text>
            <Text
              className="text-black-900 text-right text-sm"
              size="txtInterBold14"
            >
              {props?.daysleft}
            </Text>
          </div>
          <div className="flex flex-row items-center justify-between mt-[5px] w-full">
            <Text className="text-gray-600 text-xs" size="txtInterMedium12">
              {props?.subtitleleft}
            </Text>
            <Text
              className="text-gray-600 text-right text-xs"
              size="txtInterMedium12"
            >
              {props?.subtitleright}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

AccountsDetailsDepositColumnThree.defaultProps = {
  title: "Accured interest",
  price: "$6,900.00",
  expirationdate: "20.06.2024",
  daysleft: "379",
  subtitleleft: "Expiration date",
  subtitleright: "Days left",
};

export default AccountsDetailsDepositColumnThree;
