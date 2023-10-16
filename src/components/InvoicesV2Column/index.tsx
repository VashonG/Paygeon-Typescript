import React from "react";

import { Img, Text } from "components";

type InvoicesV2ColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "title" | "menu" | "price" | "subtitle" | "increasepercentage"
> &
  Partial<{
    title: string;
    menu: string;
    price: string;
    subtitle: string;
    increasepercentage: string;
  }>;

const InvoicesV2Column: React.FC<InvoicesV2ColumnProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
          <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
            <Text
              className="text-gray-600 text-sm"
              size="txtInterRegular14Gray600"
            >
              {props?.title}
            </Text>
            <Img className="h-4 mt-0.5" alt="menu" src="props?.menu" />
          </div>
          <Text
            className="mt-[15px] text-black-900 text-xl"
            size="txtInterExtraBold20"
          >
            {props?.price}
          </Text>
          <div className="flex flex-row items-center justify-between mt-[3px] w-full">
            <Text
              className="text-black-900 text-xs"
              size="txtInterMedium12Black900"
            >
              {props?.subtitle}
            </Text>
            <Text
              className="text-green-A700 text-right text-xs"
              size="txtInterMedium12GreenA700"
            >
              {props?.increasepercentage}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

InvoicesV2Column.defaultProps = {
  title: "Total Invoices",
  menu: "images/img_menu.svg",
  price: "$95.650,00",
  subtitle: "Send 124 invoices",
  increasepercentage: "+10%",
};

export default InvoicesV2Column;
