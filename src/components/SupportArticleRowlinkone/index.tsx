import React from "react";

import { Img, Text } from "components";

type SupportArticleRowlinkoneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "helpcenterlink" | "accountlink" | "fundsreportslink"
> &
  Partial<{
    helpcenterlink: string;
    accountlink: string;
    fundsreportslink: string;
  }>;

const SupportArticleRowlinkone: React.FC<SupportArticleRowlinkoneProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Text className="text-black-900 text-xs w-auto" size="txtInterBold12">
          {props?.helpcenterlink}
        </Text>
        <Img
          className="h-4 w-[7px]"
          src="images/img_arrowright_gray_600_16x7.svg"
          alt="arrowright"
        />
        <Text className="text-black-900 text-xs w-auto" size="txtInterBold12">
          {props?.accountlink}
        </Text>
        <Img
          className="h-4 w-[7px]"
          src="images/img_arrowright_gray_600_16x7.svg"
          alt="arrowright_One"
        />
        <Text className="text-gray-600 text-xs w-auto" size="txtInterMedium12">
          {props?.fundsreportslink}
        </Text>
      </div>
    </>
  );
};

SupportArticleRowlinkone.defaultProps = {
  helpcenterlink: "Help Center",
  accountlink: "Account",
  fundsreportslink: "Funds reports",
};

export default SupportArticleRowlinkone;
