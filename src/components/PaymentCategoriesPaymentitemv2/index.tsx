import React from "react";

import { Img, Text } from "components";

type PaymentCategoriesPaymentitemv2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "title" | "category" | "img" | "notificationimage"
> &
  Partial<{
    title: string;
    category: string;
    img: string;
    notificationimage: string;
  }>;

const PaymentCategoriesPaymentitemv2: React.FC<
  PaymentCategoriesPaymentitemv2Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
          <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5">
            <Text className="text-black-900 text-sm" size="txtInterBold14">
              {props?.title}
            </Text>
            <Text className="text-gray-600 text-xs" size="txtInterMedium12">
              {props?.category}
            </Text>
          </div>
          <div className="h-[35px] relative w-[14%]">
            {!!props?.img ? (
              <div className="absolute bg-blue_gray-50_99 h-[35px] inset-[0] justify-center m-auto rounded-[22px] w-full"></div>
            ) : null}
            {!!props?.notificationimage ? (
              <Img
                className="absolute bottom-[9%] h-5 inset-x-[0] mx-auto w-5"
                alt="notification_Two"
                src="props?.notificationimage"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

PaymentCategoriesPaymentitemv2.defaultProps = {
  title: "Government",
  category: "Pay car fines, taxes, and government service",
};

export default PaymentCategoriesPaymentitemv2;
