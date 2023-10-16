import React from "react";

import { Button, Img, Text } from "components";

type PaymentCategoriesPaymentitemv1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "title" | "contactscounter"
> &
  Partial<{ title: string; contactscounter: string }>;

const PaymentCategoriesPaymentitemv1: React.FC<
  PaymentCategoriesPaymentitemv1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[18px] items-center justify-start w-[98%] md:w-full">
          <Button className="bg-blue_gray-50_99 flex h-[54px] items-center justify-center p-3.5 rounded-[50%] w-[54px]">
            <Img
              className="h-6"
              src="images/img_notification.svg"
              alt="notification_One"
            />
          </Button>
          <div className="flex flex-col gap-[5px] items-start justify-start">
            <Text className="text-base text-black-900" size="txtInterBold16">
              {props?.title}
            </Text>
            <Text className="text-gray-600 text-xs" size="txtInterMedium12">
              {props?.contactscounter}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentCategoriesPaymentitemv1.defaultProps = {
  title: "Transfer to someone",
  contactscounter: "156 contacts",
};

export default PaymentCategoriesPaymentitemv1;
