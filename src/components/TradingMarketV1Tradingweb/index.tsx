import React from "react";

import { Img, Text } from "components";

type TradingMarketV1TradingwebProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userimageone"
  | "price"
  | "priceOne"
  | "change"
  | "changeone"
  | "arrowdropdown"
> &
  Partial<{
    userimageone: string;
    price: string;
    priceOne: string;
    change: string;
    changeone: string;
    arrowdropdown: string;
  }>;

const TradingMarketV1Tradingweb: React.FC<TradingMarketV1TradingwebProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-6 relative w-[5%] md:w-full">
          <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-6">
            <Img
              className="h-6 md:h-auto rounded-[50%] w-6"
              src="images/img_img_24x24.png"
              alt="img"
            />
          </div>
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6">
            <div className="bg-white-A700 flex flex-col h-6 items-center justify-start w-6">
              {!!props?.userimageone ? (
                <Img
                  className="h-6 md:h-auto rounded-[50%] w-6"
                  alt="img_One"
                  src="props?.userimageone"
                />
              ) : null}
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[18px] text-black-900 text-sm"
          size="txtInterBold14"
        >
          {props?.price}
        </Text>
        <Text
          className="md:ml-[0] ml-[422px] text-black-900 text-right text-sm"
          size="txtInterBold14"
        >
          {props?.priceOne}
        </Text>
        <Text
          className="md:ml-[0] ml-[221px] text-pink-500 text-right text-sm"
          size="txtInterBold14Pink500"
        >
          {props?.change}
        </Text>
        <div className="flex flex-row gap-2.5 items-start justify-between md:ml-[0] ml-[110px] pr-1 w-[7%] md:w-full">
          <Text
            className="mt-0.5 text-pink-500 text-right text-sm"
            size="txtInterBold14Pink500"
          >
            {props?.changeone}
          </Text>
          <Img className="h-5" alt="arrowdropdown" src="props?.arrowdropdown" />
        </div>
      </div>
    </>
  );
};

TradingMarketV1Tradingweb.defaultProps = {
  price: "EUR/USD",
  priceOne: "106.9",
  change: "- 0.23",
  changeone: "- 0.21",
  arrowdropdown: "images/img_arrowdropdown.svg",
};

export default TradingMarketV1Tradingweb;
