import React from "react";

import { Img, Text } from "components";

type SupportProductsColumngettingstartedProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "gettingstarted" | "multilinetext" | "multilinetext2" | "lable"
> &
  Partial<{
    gettingstarted: string;
    multilinetext: string;
    multilinetext2: JSX.Element | string;
    lable: string;
  }>;

const SupportProductsColumngettingstarted: React.FC<
  SupportProductsColumngettingstartedProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="ml-1 md:ml-[0] text-blue-A700 text-xs"
          size="txtInterBold12BlueA700"
        >
          {props?.gettingstarted}
        </Text>
        <Text
          className="leading-[24.00px] ml-1 md:ml-[0] mt-[9px] text-base text-black-900 w-[96%] sm:w-full"
          size="txtInterBold16"
        >
          {props?.multilinetext}
        </Text>
        <Text
          className="leading-[21.00px] ml-1 md:ml-[0] mt-3 text-gray-600 text-sm w-[96%] sm:w-full"
          size="txtInterRegular14Gray600"
        >
          {props?.multilinetext2}
        </Text>
        <div className="flex flex-col items-center justify-start mt-[11px] py-3 w-[34%] md:w-full">
          <div className="flex flex-row gap-2 items-center justify-center w-auto">
            <Img
              className="h-[18px] w-[7px]"
              src="images/img_arrowright_black_900.svg"
              alt="arrowright"
            />
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              {props?.lable}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

SupportProductsColumngettingstarted.defaultProps = {
  gettingstarted: "Taxes and Fees",
  multilinetext: "Learn what activity is taxable, your gains or losses",
  multilinetext2: (
    <>
      The reality is that your assets are... your assets. Not ours or anyone
      else&#39;s
    </>
  ),
  lable: "Read more",
};

export default SupportProductsColumngettingstarted;
