import React from "react";

import { Img, Text } from "components";

type InvoicesV1InvoiceswebProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "invoicetext" | "accounttitle" | "invcounter" | "price" | "language" | "tag"
> &
  Partial<{
    invoicetext: string;
    accounttitle: string;
    invcounter: string;
    price: string;
    language: string;
    tag: string;
  }>;

const InvoicesV1Invoicesweb: React.FC<InvoicesV1InvoiceswebProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-5 w-5" src="images/img_icon.svg" alt="icon_Five" />
        <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[34px] w-auto">
          <Text className="text-black-900 text-sm w-auto" size="txtInterBold14">
            {props?.invoicetext}
          </Text>
          <Text
            className="text-gray-600 text-sm w-auto"
            size="txtInterRegular14Gray600"
          >
            {props?.accounttitle}
          </Text>
        </div>
        <Text
          className="md:ml-[0] ml-[164px] text-black-900 text-sm"
          size="txtInterRegular14"
        >
          {props?.invcounter}
        </Text>
        <Text
          className="md:ml-[0] ml-[85px] text-black-900 text-right text-sm"
          size="txtInterBold14"
        >
          {props?.price}
        </Text>
        <Text
          className="md:ml-[0] ml-[68px] text-black-900 text-right text-sm"
          size="txtInterRegular14"
        >
          {props?.language}
        </Text>
        <div className="bg-green-A700 flex flex-col items-center justify-start md:ml-[0] ml-[68px] md:mt-0 my-1.5 p-[9px] rounded-lg">
          <Text
            className="text-center text-green-A700 text-xs"
            size="txtInterBold12GreenA700"
          >
            {props?.tag}
          </Text>
        </div>
        <Img
          className="h-[46px] ml-3.5 md:ml-[0] mr-1 w-[46px]"
          src="images/img_notification.svg"
          alt="notification_Twelve"
        />
      </div>
    </>
  );
};

InvoicesV1Invoicesweb.defaultProps = {
  invoicetext: "Invoice for promo action",
  accounttitle: "Spotify Inc.",
  invcounter: "Inv 006",
  price: "$5.950,00",
  language: "13 Jun  2022",
  tag: "Paid",
};

export default InvoicesV1Invoicesweb;
