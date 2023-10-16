import React from "react";

import { Img, Line, Text } from "components";

type ProfileSettingsAccountColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "cashwithdrawalamount"
  | "amountspentsetuped"
  | "cashwithdrawalprice"
  | "cashwithdrawalpriceone"
  | "cashwithdrawalslider"
  | "line"
> &
  Partial<{
    cashwithdrawalamount: string;
    amountspentsetuped: string;
    cashwithdrawalprice: string;
    cashwithdrawalpriceone: string;
    cashwithdrawalslider: string;
    line: string;
  }>;

const ProfileSettingsAccountColumn: React.FC<
  ProfileSettingsAccountColumnProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <Text className="text-gray-600 text-xs" size="txtInterMedium12">
            {props?.cashwithdrawalamount}
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-2 w-full">
            <Text className="text-black-900 text-sm" size="txtInterBold14">
              {props?.amountspentsetuped}
            </Text>
            {!!props?.cashwithdrawalprice ? (
              <Text
                className="ml-3 sm:ml-[0] text-black-900 text-sm"
                size="txtInterRegular14"
              >
                {props?.cashwithdrawalprice}
              </Text>
            ) : null}
            {!!props?.cashwithdrawalpriceone ? (
              <Text
                className="ml-1 sm:ml-[0] text-blue-A700 text-sm"
                size="txtInterBold14BlueA700"
              >
                {props?.cashwithdrawalpriceone}
              </Text>
            ) : null}
            {!!props?.cashwithdrawalslider ? (
              <Img
                className="h-4 sm:ml-[0] ml-[431px]"
                alt="slider"
                src="props?.cashwithdrawalslider"
              />
            ) : null}
          </div>
          {!!props?.line ? (
            <Line className="bg-blue_gray-100_b2 h-px mt-4 w-full" />
          ) : null}
        </div>
      </div>
    </>
  );
};

ProfileSettingsAccountColumn.defaultProps = {
  cashwithdrawalamount: "Cash withdrawals",
  amountspentsetuped: "Amount spent and setuped",
};

export default ProfileSettingsAccountColumn;
