import React from "react";

import { Button, Img, Line, Text } from "components";

type PaymentCategoriesSearchElementwidgetProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "title" | "days7" | "duration" | "duration1" | "calendar"
> &
  Partial<{
    title: string;
    days7: string;
    duration: string;
    duration1: string;
    calendar: string;
  }>;

const PaymentCategoriesSearchElementwidget: React.FC<
  PaymentCategoriesSearchElementwidgetProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
            <Text className="text-base text-black-900" size="txtInterBold16">
              {props?.title}
            </Text>
            <div className="flex flex-row gap-5 items-center justify-center md:ml-[0] ml-[293px] w-[36%] md:w-full">
              {!!props?.days7 ? (
                <Button className="bg-black-900 cursor-pointer font-bold font-inter min-w-[74px] py-2.5 rounded-lg text-center text-white-A700 text-xs">
                  {props?.days7}
                </Button>
              ) : null}
              <div className="flex flex-col items-center justify-start p-[3px]">
                {!!props?.duration1 ? (
                  <Text
                    className="my-[7px] text-black-900 text-center text-xs"
                    size="txtInterBold12"
                  >
                    {props?.duration1}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-col items-center justify-start p-[3px]">
                {!!props?.duration1 ? (
                  <Text
                    className="my-[7px] text-black-900 text-center text-xs"
                    size="txtInterBold12"
                  >
                    {props?.duration1}
                  </Text>
                ) : null}
              </div>
            </div>
            <Img
              className="h-[18px] md:ml-[0] ml-[21px] w-[18px]"
              alt="calendar"
              src="props?.calendar"
            />
          </div>
          <Line className="bg-blue_gray-100_b2 h-px w-full" />
        </div>
      </div>
    </>
  );
};

PaymentCategoriesSearchElementwidget.defaultProps = {
  title: "Overview",
  calendar: "images/img_calendar.svg",
};

export default PaymentCategoriesSearchElementwidget;
