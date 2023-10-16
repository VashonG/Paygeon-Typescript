import React from "react";

import { Img, Text } from "components";

type InvoicesV2InvoiceswebProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "depositname" | "invcounter" | "price" | "language" | "tag"
> &
  Partial<{
    depositname: string;
    invcounter: string;
    price: string;
    language: string;
    tag: string;
  }>;

const InvoicesV2Invoicesweb: React.FC<InvoicesV2InvoiceswebProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-5 w-5" src="images/img_icon.svg" alt="icon_Four" />
        <Text
          className="md:ml-[0] ml-[34px] text-black-900 text-sm"
          size="txtInterBold14"
        >
          {props?.depositname}
        </Text>
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
        <div className="bg-green-A700 flex flex-col items-center justify-start md:ml-[0] ml-[68px] md:mt-0 my-[5px] p-[9px] rounded-lg">
          <Text
            className="text-center text-green-A700 text-xs"
            size="txtInterBold12GreenA700"
          >
            {props?.tag}
          </Text>
        </div>
        <Img
          className="h-[46px] ml-3.5 md:ml-[0] mr-1.5 w-[46px]"
          src="images/img_notification.svg"
          alt="notification_Eleven"
        />
      </div>
    </>
  );
};

InvoicesV2Invoicesweb.defaultProps = {
  depositname: "Invoice for promo action",
  invcounter: "Inv 006",
  price: "$5.950,00",
  language: "13 Jun  2022",
  tag: "Paid",
};

export default InvoicesV2Invoicesweb;
