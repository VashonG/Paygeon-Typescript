import React from "react";

import { Img, Text } from "components";

type PaymentCategoriesPaymentitemvProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "userprice"
> &
  Partial<{ username: string; userprice: string }>;

const PaymentCategoriesPaymentitemv: React.FC<
  PaymentCategoriesPaymentitemvProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3.5 items-center justify-start ml-2 md:ml-[0] w-[71%] md:w-full">
          <div className="flex flex-col h-9 items-center justify-start w-9">
            <div className="bg-blue_gray-50_01 flex flex-col h-9 items-center justify-start rounded-[50%] w-9">
              <Img
                className="h-9 md:h-auto rounded-[50%] w-9"
                src="images/img_pic_36x36.png"
                alt="pic"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <Text className="text-black-900 text-sm" size="txtInterBold14">
              {props?.username}
            </Text>
            <Text
              className="mt-1 text-black-900 text-xs"
              size="txtInterMedium12Black900"
            >
              {props?.userprice}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentCategoriesPaymentitemv.defaultProps = {
  username: "Verizon account top up",
  userprice: "-$4.20",
};

export default PaymentCategoriesPaymentitemv;
