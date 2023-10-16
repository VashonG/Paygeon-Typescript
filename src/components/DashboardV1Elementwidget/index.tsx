import React from "react";

import { Img, Line, List, Text } from "components";

type DashboardV1ElementwidgetProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "title"
  | "notificationOne"
  | "lineOne"
  | "augustcounter"
  | "pic"
  | "name"
  | "time"
  | "price"
  | "line"
  | "picOne"
  | "nameOne"
  | "timeOne"
  | "priceOne"
  | "lineone1"
  | "picTwo"
  | "nameTwo"
  | "timeTwo"
  | "priceTwo"
  | "lineTwo"
  | "augustcounter1"
  | "pic1"
  | "name1"
  | "time1"
  | "price1"
  | "line1"
  | "picone1"
  | "nameone1"
  | "timeone1"
  | "priceone1"
  | "lineone2"
  | "pictwo1"
  | "language"
  | "timetwo1"
  | "pricetwo1"
  | "linetwo1"
  | "picThree"
  | "nametwo1"
  | "timeThree"
  | "priceThree"
  | "lineThree"
  | "overlay"
> &
  Partial<{
    title: string;
    notificationOne: string;
    lineOne: string;
    augustcounter: string;
    pic: string;
    name: string;
    time: string;
    price: string;
    line: string;
    picOne: string;
    nameOne: string;
    timeOne: string;
    priceOne: string;
    lineone1: string;
    picTwo: string;
    nameTwo: string;
    timeTwo: string;
    priceTwo: string;
    lineTwo: string;
    augustcounter1: string;
    pic1: string;
    name1: string;
    time1: string;
    price1: string;
    line1: string;
    picone1: string;
    nameone1: string;
    timeone1: string;
    priceone1: string;
    lineone2: string;
    pictwo1: string;
    language: string;
    timetwo1: string;
    pricetwo1: string;
    linetwo1: string;
    picThree: string;
    nametwo1: string;
    timeThree: string;
    priceThree: string;
    lineThree: string;
    overlay: string;
  }>;

const DashboardV1Elementwidget: React.FC<DashboardV1ElementwidgetProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start pt-[21px] w-full">
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <div className="flex flex-row items-start justify-between w-[91%] md:w-full">
              {!!props?.title ? (
                <Text
                  className="text-base text-black-900"
                  size="txtInterBold16"
                >
                  {props?.title}
                </Text>
              ) : null}
              {!!props?.notificationOne ? (
                <Img
                  className="h-[18px]"
                  alt="notification_One"
                  src="props?.notificationOne"
                />
              ) : null}
            </div>
            {!!props?.lineOne ? (
              <Line className="bg-blue_gray-100_b2 h-px w-full" />
            ) : null}
          </div>
        </div>
        <div className="md:h-[556px] h-[575px] relative w-[98%] sm:w-full">
          <List
            className="absolute flex flex-col gap-6 inset-[0] items-center justify-center m-auto w-[93%]"
            orientation="vertical"
          >
            <div className="flex flex-col items-start justify-start pt-[3px] w-full">
              {!!props?.augustcounter ? (
                <Text
                  className="text-gray-600 text-sm"
                  size="txtInterRegular14Gray600"
                >
                  {props?.augustcounter}
                </Text>
              ) : null}
              <div className="flex flex-col items-center justify-start mt-3.5 pt-[3px] w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-auto">
                      <div className="flex flex-col h-8 items-center justify-start w-8">
                        <div className="bg-blue_gray-50_01 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                          {!!props?.picThree ? (
                            <Img
                              className="h-8 md:h-auto rounded-[50%] w-8"
                              alt="pic_Three"
                              src="props?.picThree"
                            />
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        {!!props?.nametwo1 ? (
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterBold14"
                          >
                            {props?.nametwo1}
                          </Text>
                        ) : null}
                        {!!props?.timeThree ? (
                          <Text
                            className="text-gray-600 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            {props?.timeThree}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                    {!!props?.priceThree ? (
                      <Text
                        className="mt-0.5 text-black-900 text-right text-sm"
                        size="txtInterBold14"
                      >
                        {props?.priceThree}
                      </Text>
                    ) : null}
                  </div>
                  {!!props?.lineThree ? (
                    <Line className="bg-blue_gray-100_b2 h-px w-full" />
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-1.5 pt-[3px] w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-auto">
                      <div className="flex flex-col h-8 items-center justify-start w-8">
                        <div className="bg-blue_gray-50_01 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                          {!!props?.picThree ? (
                            <Img
                              className="h-8 md:h-auto rounded-[50%] w-8"
                              alt="pic_Three"
                              src="props?.picThree"
                            />
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        {!!props?.nametwo1 ? (
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterBold14"
                          >
                            {props?.nametwo1}
                          </Text>
                        ) : null}
                        {!!props?.timeThree ? (
                          <Text
                            className="text-gray-600 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            {props?.timeThree}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                    {!!props?.priceThree ? (
                      <Text
                        className="mt-0.5 text-black-900 text-right text-sm"
                        size="txtInterBold14"
                      >
                        {props?.priceThree}
                      </Text>
                    ) : null}
                  </div>
                  {!!props?.lineThree ? (
                    <Line className="bg-blue_gray-100_b2 h-px w-full" />
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-1.5 pt-[3px] w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-auto">
                      <div className="flex flex-col h-8 items-center justify-start w-8">
                        <div className="bg-blue_gray-50_01 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                          {!!props?.picThree ? (
                            <Img
                              className="h-8 md:h-auto rounded-[50%] w-8"
                              alt="pic_Three"
                              src="props?.picThree"
                            />
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        {!!props?.nametwo1 ? (
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterBold14"
                          >
                            {props?.nametwo1}
                          </Text>
                        ) : null}
                        {!!props?.timeThree ? (
                          <Text
                            className="text-gray-600 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            {props?.timeThree}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                    {!!props?.priceThree ? (
                      <Text
                        className="mt-0.5 text-black-900 text-right text-sm"
                        size="txtInterBold14"
                      >
                        {props?.priceThree}
                      </Text>
                    ) : null}
                  </div>
                  {!!props?.lineThree ? (
                    <Line className="bg-blue_gray-100_b2 h-px w-full" />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[3px] w-full">
              {!!props?.augustcounter1 ? (
                <Text
                  className="text-gray-600 text-sm"
                  size="txtInterRegular14Gray600"
                >
                  {props?.augustcounter1}
                </Text>
              ) : null}
              <div className="flex flex-col items-center justify-start mt-3.5 pt-[3px] w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-auto">
                      <div className="flex flex-col h-8 items-center justify-start w-8">
                        <div className="bg-blue_gray-50_01 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                          {!!props?.picThree ? (
                            <Img
                              className="h-8 md:h-auto rounded-[50%] w-8"
                              alt="pic_Three"
                              src="props?.picThree"
                            />
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        {!!props?.nametwo1 ? (
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterBold14"
                          >
                            {props?.nametwo1}
                          </Text>
                        ) : null}
                        {!!props?.timeThree ? (
                          <Text
                            className="text-gray-600 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            {props?.timeThree}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                    {!!props?.priceThree ? (
                      <Text
                        className="mt-0.5 text-black-900 text-right text-sm"
                        size="txtInterBold14"
                      >
                        {props?.priceThree}
                      </Text>
                    ) : null}
                  </div>
                  {!!props?.lineThree ? (
                    <Line className="bg-blue_gray-100_b2 h-px w-full" />
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-1.5 pt-[3px] w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-auto">
                      <div className="flex flex-col h-8 items-center justify-start w-8">
                        <div className="bg-blue_gray-50_01 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                          {!!props?.picThree ? (
                            <Img
                              className="h-8 md:h-auto rounded-[50%] w-8"
                              alt="pic_Three"
                              src="props?.picThree"
                            />
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        {!!props?.nametwo1 ? (
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterBold14"
                          >
                            {props?.nametwo1}
                          </Text>
                        ) : null}
                        {!!props?.timeThree ? (
                          <Text
                            className="text-gray-600 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            {props?.timeThree}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                    {!!props?.priceThree ? (
                      <Text
                        className="mt-0.5 text-black-900 text-right text-sm"
                        size="txtInterBold14"
                      >
                        {props?.priceThree}
                      </Text>
                    ) : null}
                  </div>
                  {!!props?.lineThree ? (
                    <Line className="bg-blue_gray-100_b2 h-px w-full" />
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-1.5 pt-[3px] w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-auto">
                      <div className="flex flex-col h-8 items-center justify-start w-8">
                        <div className="bg-blue_gray-50_01 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                          {!!props?.picThree ? (
                            <Img
                              className="h-8 md:h-auto rounded-[50%] w-8"
                              alt="pic_Three"
                              src="props?.picThree"
                            />
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        {!!props?.nametwo1 ? (
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterBold14"
                          >
                            {props?.nametwo1}
                          </Text>
                        ) : null}
                        {!!props?.timeThree ? (
                          <Text
                            className="text-gray-600 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            {props?.timeThree}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                    {!!props?.priceThree ? (
                      <Text
                        className="mt-0.5 text-black-900 text-right text-sm"
                        size="txtInterBold14"
                      >
                        {props?.priceThree}
                      </Text>
                    ) : null}
                  </div>
                  {!!props?.lineThree ? (
                    <Line className="bg-blue_gray-100_b2 h-px w-full" />
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-1.5 pt-[3px] w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-auto">
                      <div className="flex flex-col h-8 items-center justify-start w-8">
                        <div className="bg-blue_gray-50_01 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                          {!!props?.picThree ? (
                            <Img
                              className="h-8 md:h-auto rounded-[50%] w-8"
                              alt="pic_Three"
                              src="props?.picThree"
                            />
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        {!!props?.nametwo1 ? (
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterBold14"
                          >
                            {props?.nametwo1}
                          </Text>
                        ) : null}
                        {!!props?.timeThree ? (
                          <Text
                            className="text-gray-600 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            {props?.timeThree}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                    {!!props?.priceThree ? (
                      <Text
                        className="mt-0.5 text-black-900 text-right text-sm"
                        size="txtInterBold14"
                      >
                        {props?.priceThree}
                      </Text>
                    ) : null}
                  </div>
                  {!!props?.lineThree ? (
                    <Line className="bg-blue_gray-100_b2 h-px w-full" />
                  ) : null}
                </div>
              </div>
            </div>
          </List>
          {!!props?.overlay ? (
            <div className="absolute bg-gradient  bottom-[0] h-[180px] inset-x-[0] mx-auto rounded-[16px] w-full"></div>
          ) : null}
        </div>
      </div>
    </>
  );
};

DashboardV1Elementwidget.defaultProps = {};

export default DashboardV1Elementwidget;
