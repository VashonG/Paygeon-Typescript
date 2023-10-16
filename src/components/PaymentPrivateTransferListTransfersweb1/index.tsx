import React from "react";

import { Img, Text } from "components";

type PaymentPrivateTransferListTransfersweb1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "buttonslogo" | "currency" | "accountnumberco" | "accountnumber"
> &
  Partial<{
    username: string;
    buttonslogo: string;
    currency: string;
    accountnumberco: string;
    accountnumber: string;
  }>;

const PaymentPrivateTransferListTransfersweb1: React.FC<
  PaymentPrivateTransferListTransfersweb1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-8 items-center justify-start w-auto">
          <Img
            className="h-6 md:h-auto rounded-[50%] w-6"
            src="images/img_img_11.png"
            alt="img_One"
          />
          <Text className="text-black-900 text-sm w-auto" size="txtInterBold14">
            {props?.username}
          </Text>
        </div>
        <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[226px] w-auto">
          <div className="bg-white-A700 flex flex-col h-[18px] items-center justify-start w-[18px]">
            {!!props?.buttonslogo ? (
              <Img
                className="h-[18px] md:h-auto rounded-[50%] w-[18px]"
                alt="img_Two"
                src="props?.buttonslogo"
              />
            ) : null}
          </div>
          <Text className="text-black-900 text-sm w-auto" size="txtInterBold14">
            {props?.currency}
          </Text>
        </div>
        <div className="flex flex-row gap-1.5 items-center justify-start md:ml-[0] ml-[119px] w-auto">
          <Text
            className="text-black-900 text-sm w-auto"
            size="txtInterRegular14"
          >
            {props?.accountnumberco}
          </Text>
          <Text className="text-black-900 text-sm w-auto" size="txtInterBold14">
            {props?.accountnumber}
          </Text>
        </div>
        <Img
          className="h-[46px] md:ml-[0] ml-[149px] mr-[11px] w-[46px]"
          src="images/img_notification.svg"
          alt="notification_One"
        />
      </div>
    </>
  );
};

PaymentPrivateTransferListTransfersweb1.defaultProps = {
  username: "Rustem Tolstobrov",
  currency: "GBP",
  accountnumberco: "Account ending in",
  accountnumber: "**** 3240",
};

export default PaymentPrivateTransferListTransfersweb1;
