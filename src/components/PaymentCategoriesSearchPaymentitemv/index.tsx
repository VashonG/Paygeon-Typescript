import React from "react";

import { Button, Img, Text } from "components";

type PaymentCategoriesSearchPaymentitemvProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "price"
> &
  Partial<{ username: string; price: string }>;

const PaymentCategoriesSearchPaymentitemv: React.FC<
  PaymentCategoriesSearchPaymentitemvProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-9 items-center justify-start w-9">
          <div className="bg-blue_gray-50_01 flex flex-col h-9 items-center justify-start rounded-[50%] w-9">
            <Img
              className="h-9 md:h-auto rounded-[50%] w-9"
              src="images/img_pic_18.png"
              alt="pic"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-2/5 md:w-full">
          <Text
            className="ml-1 md:ml-[0] text-black-900 text-center text-sm"
            size="txtInterBold14"
          >
            {props?.username}
          </Text>
          {!!props?.price ? (
            <Button className="bg-blue_gray-50_99 cursor-pointer font-bold font-inter min-w-[64px] py-1.5 rounded-lg text-center text-gray-600 text-xs">
              {props?.price}
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};

PaymentCategoriesSearchPaymentitemv.defaultProps = { username: "Dropbox" };

export default PaymentCategoriesSearchPaymentitemv;
