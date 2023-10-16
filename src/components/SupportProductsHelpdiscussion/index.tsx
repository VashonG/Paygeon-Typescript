import React from "react";

import { Button, Img, Text } from "components";

type SupportProductsHelpdiscussionProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "waitingperiodtitle" | "waitingperioddate" | "waitingperiodpaymentstext"
> &
  Partial<{
    waitingperiodtitle: string;
    waitingperioddate: string;
    waitingperiodpaymentstext: string;
  }>;

const SupportProductsHelpdiscussion: React.FC<
  SupportProductsHelpdiscussionProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-[93%] md:w-full">
          <Button className="border border-blue_gray-100_b2 border-solid flex h-[46px] items-center justify-center p-3.5 rounded-lg w-[46px]">
            <Img
              className="h-[18px]"
              src="images/img_mail_black_900.svg"
              alt="mail"
            />
          </Button>
          <div className="flex flex-col items-start justify-start md:mt-0 mt-[3px] w-[90%] md:w-full">
            <Text className="text-base text-black-900" size="txtInterBold16">
              {props?.waitingperiodtitle}
            </Text>
            <div className="flex flex-row gap-2 items-center justify-start mt-0.5 w-auto">
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtInterRegular14Gray600"
              >
                {props?.waitingperioddate}
              </Text>
              <Img
                className="h-[3px] w-[3px]"
                src="images/img_path.svg"
                alt="path"
              />
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtInterRegular14Gray600"
              >
                {props?.waitingperiodpaymentstext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SupportProductsHelpdiscussion.defaultProps = {
  waitingperiodtitle:
    "Waiting period for first payout on our fintech platform for marketplaces",
  waitingperioddate: "31 Dec 2021",
  waitingperiodpaymentstext: "Payments",
};

export default SupportProductsHelpdiscussion;
