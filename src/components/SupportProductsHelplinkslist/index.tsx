import React from "react";

import { Button, Img, Text } from "components";

type SupportProductsHelplinkslistProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "usertitle" | "userlinkone" | "userlinktwo" | "userlinkthree" | "userlabel"
> &
  Partial<{
    usertitle: string;
    userlinkone: string;
    userlinktwo: string;
    userlinkthree: string;
    userlabel: string;
  }>;

const SupportProductsHelplinkslist: React.FC<
  SupportProductsHelplinkslistProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button className="border border-blue_gray-100_b2 border-solid flex h-[46px] items-center justify-center md:ml-[0] ml-[5px] p-3.5 rounded-lg w-[46px]">
          <Img
            className="h-[18px]"
            src="images/img_notification.svg"
            alt="notification"
          />
        </Button>
        <Text
          className="md:ml-[0] ml-[7px] mt-[21px] text-base text-black-900"
          size="txtInterBold16"
        >
          {props?.usertitle}
        </Text>
        <Text
          className="md:ml-[0] ml-[7px] mt-[23px] text-blue-A700 text-sm"
          size="txtInterBold14BlueA700"
        >
          {props?.userlinkone}
        </Text>
        <Text
          className="md:ml-[0] ml-[7px] mt-[21px] text-blue-A700 text-sm"
          size="txtInterBold14BlueA700"
        >
          {props?.userlinktwo}
        </Text>
        <Text
          className="md:ml-[0] ml-[7px] mt-5 text-blue-A700 text-sm"
          size="txtInterBold14BlueA700"
        >
          {props?.userlinkthree}
        </Text>
        <div className="flex flex-col items-center justify-end mt-[11px] py-2.5 w-[45%] md:w-full">
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
              {props?.userlabel}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

SupportProductsHelplinkslist.defaultProps = {
  usertitle: "Getting started with platform",
  userlinkone: "Create an account",
  userlinktwo: "Verify my account",
  userlinkthree: "Add a payment method",
  userlabel: "See more articles",
};

export default SupportProductsHelplinkslist;
