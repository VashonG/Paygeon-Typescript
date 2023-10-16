import React from "react";

import { Img, Text } from "components";

type TradingCurrencyIndexColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "title" | "menu" | "number" | "five"
> &
  Partial<{ title: string; menu: string; number: string; five: string }>;

const TradingCurrencyIndexColumn: React.FC<TradingCurrencyIndexColumnProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[13px] items-center justify-start w-[97%] md:w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <Text
              className="text-gray-600 text-sm"
              size="txtInterRegular14Gray600"
            >
              {props?.title}
            </Text>
            <Img className="h-4 w-4" alt="menu" src="props?.menu" />
          </div>
          <div className="flex flex-row items-end justify-between w-full">
            <Text className="text-black-900 text-xl" size="txtInterExtraBold20">
              {props?.number}
            </Text>
            <Text
              className="mb-0.5 mt-[7px] text-black-900 text-right text-xs"
              size="txtInterBold12"
            >
              {props?.five}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TradingCurrencyIndexColumn.defaultProps = {
  title: "52 week range",
  menu: "images/img_menu.svg",
  number: "91.78 - 107.79",
  five: "+10.6%",
};

export default TradingCurrencyIndexColumn;
