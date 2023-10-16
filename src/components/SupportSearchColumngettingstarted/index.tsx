import React from "react";

import { Img, Text } from "components";

type SupportSearchColumngettingstartedProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "gettingstarted" | "description" | "seemoredetailstext"
> &
  Partial<{
    gettingstarted: string;
    description: JSX.Element | string;
    seemoredetailstext: string;
  }>;

const SupportSearchColumngettingstarted: React.FC<
  SupportSearchColumngettingstartedProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[15px] items-start justify-start ml-3 md:ml-[0] mt-2.5 w-auto md:w-full">
          <Text
            className="text-black-900 text-lg w-auto"
            size="txtInterExtraBold18Black900"
          >
            {props?.gettingstarted}
          </Text>
          <Text
            className="leading-[21.00px] max-w-[835px] md:max-w-full text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            {props?.description}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start ml-2 md:ml-[0] p-0.5 w-[15%] md:w-full">
          <div className="flex flex-row gap-2 items-center justify-center my-2.5 w-auto">
            <Img
              className="h-[18px] w-[7px]"
              src="images/img_arrowright_black_900.svg"
              alt="arrowright"
            />
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              {props?.seemoredetailstext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

SupportSearchColumngettingstarted.defaultProps = {
  gettingstarted:
    "Access levels when connecting your account to a third-party platform",
  description: (
    <>
      What’s better than an NFT? 2 NFTs! But you don&#39;t always want to mint 2
      NFTs of the same artwork. Unfortunately, it can happen by accident If
      you’re confident you qualify for but didn’t receive any in the weekly drop
    </>
  ),
  seemoredetailstext: "See more details",
};

export default SupportSearchColumngettingstarted;
