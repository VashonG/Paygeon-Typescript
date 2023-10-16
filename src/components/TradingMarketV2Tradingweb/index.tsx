import React from "react";

import { Img, Text } from "components";

type TradingMarketV2TradingwebProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userimage"
  | "currencytype"
  | "currencyvalue"
  | "sentimenttype"
  | "sentimentdropdown"
  | "changevalue"
  | "changevalue1"
  | "changedropdown"
> &
  Partial<{
    userimage: string;
    currencytype: string;
    currencyvalue: string;
    sentimenttype: string;
    sentimentdropdown: string;
    changevalue: string;
    changevalue1: string;
    changedropdown: string;
  }>;

const TradingMarketV2Tradingweb: React.FC<TradingMarketV2TradingwebProps> = (
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
              alt="img_Twelve"
            />
          </div>
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6">
            <div className="bg-white-A700 flex flex-col h-6 items-center justify-start w-6">
              {!!props?.userimage ? (
                <Img
                  className="h-6 md:h-auto rounded-[50%] w-6"
                  alt="img_Thirteen"
                  src="props?.userimage"
                />
              ) : null}
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[18px] text-black-900 text-sm"
          size="txtInterBold14"
        >
          {props?.currencytype}
        </Text>
        <Text
          className="md:ml-[0] ml-[141px] text-black-900 text-right text-sm"
          size="txtInterBold14"
        >
          {props?.currencyvalue}
        </Text>
        <Img
          className="h-[39px] ml-20 md:ml-[0]"
          src="images/img_car.svg"
          alt="car_Six"
        />
        <div className="flex flex-row gap-[9px] items-center justify-center ml-20 md:ml-[0] pr-1 w-[8%] md:w-full">
          <Text className="text-black-900 text-sm" size="txtInterRegular14">
            {props?.sentimenttype}
          </Text>
          <Img
            className="h-5"
            alt="arrowdropdown_Five"
            src="props?.sentimentdropdown"
          />
        </div>
        <Text
          className="md:ml-[0] ml-[104px] text-pink-500 text-right text-sm"
          size="txtInterBold14Pink500"
        >
          {props?.changevalue}
        </Text>
        <div className="flex flex-row gap-2.5 items-start justify-center md:ml-[0] ml-[84px] pr-1 w-[7%] md:w-full">
          <Text
            className="mt-0.5 text-pink-500 text-right text-sm"
            size="txtInterBold14Pink500"
          >
            {props?.changevalue1}
          </Text>
          <Img
            className="h-5"
            alt="arrowdropdown_Six"
            src="props?.changedropdown"
          />
        </div>
        <Img
          className="h-[52px] md:ml-[0] ml-[37px] w-[52px]"
          src="images/img_notification.svg"
          alt="notification_Eleven"
        />
      </div>
    </>
  );
};

TradingMarketV2Tradingweb.defaultProps = {
  currencytype: "RUPEE/USD",
  currencyvalue: "4.508",
  sentimenttype: "Bearish",
  sentimentdropdown: "images/img_arrowdropdown.svg",
  changevalue: "-0.011",
  changevalue1: "-0.103",
  changedropdown: "images/img_arrowdropdown.svg",
};

export default TradingMarketV2Tradingweb;
