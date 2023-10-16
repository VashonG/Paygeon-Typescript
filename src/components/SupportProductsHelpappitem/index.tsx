import React from "react";

import { Button, Img, Text } from "components";

type SupportProductsHelpappitemProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userwallet" | "userwalletdescription"
> &
  Partial<{ userwallet: string; userwalletdescription: string }>;

const SupportProductsHelpappitem: React.FC<SupportProductsHelpappitemProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[18px] items-center justify-start w-[76%] md:w-full">
          <Button className="border border-blue_gray-100_b2 border-solid flex h-[46px] items-center justify-center p-3 rounded-lg w-[46px]">
            <Img
              className="h-5"
              src="images/img_notification.svg"
              alt="notification"
            />
          </Button>
          <div className="flex flex-col gap-[5px] items-start justify-start">
            <Text className="text-base text-black-900" size="txtInterBold16">
              {props?.userwallet}
            </Text>
            <Text
              className="text-gray-600 text-sm"
              size="txtInterRegular14Gray600"
            >
              {props?.userwalletdescription}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

SupportProductsHelpappitem.defaultProps = {
  userwallet: "Wallet",
  userwalletdescription: "The best self-hosted wallet",
};

export default SupportProductsHelpappitem;
