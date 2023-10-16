import React from "react";

import { Img, Text } from "components";

type PaymentPrivateTransferListTransferswebProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "languageOne" | "price" | "userbank"
> &
  Partial<{ languageOne: string; price: string; userbank: string }>;

const PaymentPrivateTransferListTransfersweb: React.FC<
  PaymentPrivateTransferListTransferswebProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[34px] items-center justify-start w-auto">
          <Img
            className="h-5 w-5"
            src="images/img_creditcard.svg"
            alt="creditcard"
          />
          <Text className="text-black-900 text-sm w-auto" size="txtInterBold14">
            {props?.languageOne}
          </Text>
        </div>
        <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[179px] w-auto">
          <div className="bg-white-A700 flex flex-col h-[18px] items-center justify-start w-[18px]">
            <Img
              className="h-[18px] md:h-auto rounded-[50%] w-[18px]"
              src="images/img_img_10.png"
              alt="img"
            />
          </div>
          <Text className="text-black-900 text-sm w-auto" size="txtInterBold14">
            {props?.price}
          </Text>
        </div>
        <Text
          className="md:ml-[0] ml-[118px] text-black-900 text-sm"
          size="txtInterRegular14"
        >
          {props?.userbank}
        </Text>
        <Img
          className="h-[46px] md:ml-[0] ml-[218px] mr-[11px] w-[46px]"
          src="images/img_notification.svg"
          alt="notification"
        />
      </div>
    </>
  );
};

PaymentPrivateTransferListTransfersweb.defaultProps = {
  languageOne: "Card ending in  **** 7356",
  price: "EUR",
  userbank: "Raiffeisen Bank, RO",
};

export default PaymentPrivateTransferListTransfersweb;
