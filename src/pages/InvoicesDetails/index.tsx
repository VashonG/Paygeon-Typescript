import React from "react";

import { Button, Img, Line, List, Text } from "components";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import PaymentCategoriesSearchElementwidget from "components/PaymentCategoriesSearchElementwidget";

const InvoicesDetailsPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[960px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_invoicesdetails.png')" }}
      >
        <div className="bg-black-900_a7 flex flex-col items-center justify-start p-[135px] md:px-10 sm:px-5 w-full">
          <div className="bg-white-A700 flex max-w-5xl mb-8 mx-auto md:px-5 relative rounded-[16px] shadow-bs1 w-full">
            <div className="bg-blue_gray-50 flex flex-col items-start justify-end my-auto py-[5px] rounded-bl-[16px] rounded-tl-[16px] w-[32%]">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] mt-[91px] w-[52%] md:w-full">
                <div className="flex flex-col items-start justify-start pt-0.5 w-full">
                  <Text
                    className="text-gray-600 text-sm"
                    size="txtInterRegular14Gray600"
                  >
                    Send to
                  </Text>
                  <Text
                    className="mt-1.5 text-black-900 text-xl"
                    size="txtInterExtraBold20"
                  >
                    Apple Inc.
                  </Text>
                  <Text
                    className="leading-[21.00px] mt-[15px] text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    <>
                      Department 98
                      <br />
                      44-46 Morningside Road
                      <br />
                      Edinburgh
                      <br />
                      Scotland
                      <br />
                      EH10 4BF
                      <br />
                      marketing@apple.com
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start mt-[81px]">
                  <Text
                    className="text-gray-600 text-sm"
                    size="txtInterRegular14Gray600"
                  >
                    Invoice id
                  </Text>
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    Inv 001
                  </Text>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start mt-6">
                  <Text
                    className="text-gray-600 text-sm"
                    size="txtInterRegular14Gray600"
                  >
                    Send to
                  </Text>
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    22 May 2022, 2:15 AM
                  </Text>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start mt-6 pt-0.5">
                  <Text
                    className="text-gray-600 text-sm"
                    size="txtInterRegular14Gray600"
                  >
                    Due to
                  </Text>
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    20 Jul 2022, 1:00 AM
                  </Text>
                </div>
              </div>
              <Line className="bg-blue_gray-100_90 h-px mt-[33px] w-full" />
              <InvoicesV2Buttonsicon
                className="flex flex-col items-center justify-start md:ml-[0] ml-[23px] mt-1.5 py-[15px] w-[19%] md:w-full"
                notificationimage="images/img_notification.svg"
                notificationtext="Print"
              />
            </div>
            <PaymentCategoriesSearchElementwidget
              className="flex flex-col items-center justify-start ml-[-325px] mr-auto pt-[23px] w-full z-[1]"
              title="Invoice for UI design"
              calendar="images/img_close_black_900.svg"
            />
            <div className="flex flex-col items-start justify-start mb-4 ml-[undefinedpx] mr-[26px] mt-auto w-[64%] z-[1]">
              <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                <div className="sm:h-[1302px] h-[244px] relative w-full">
                  <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <List
                        className="sm:flex-1 sm:flex-col flex-row md:gap-10 gap-[151px] grid sm:grid-cols-1 grid-cols-3 w-[78%] sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtInterMedium12"
                          >
                            Description
                          </Text>
                          <Text
                            className="mt-[50px] text-black-900 text-sm"
                            size="txtInterBold14"
                          >
                            Marketing materials
                          </Text>
                          <Text
                            className="mt-[35px] text-black-900 text-sm"
                            size="txtInterBold14"
                          >
                            Website design
                          </Text>
                          <Text
                            className="mt-[37px] text-black-900 text-sm"
                            size="txtInterBold14"
                          >
                            Mobile app
                          </Text>
                          <Text
                            className="mt-[35px] text-black-900 text-sm"
                            size="txtInterBold14"
                          >
                            Printing equipment
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                          <Text
                            className="ml-1.5 md:ml-[0] text-gray-600 text-right text-xs"
                            size="txtInterMedium12"
                          >
                            Rate.
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[9px] mt-[50px] text-black-900 text-right text-sm"
                            size="txtInterRegular14"
                          >
                            $50
                          </Text>
                          <Text
                            className="mt-[34px] text-black-900 text-right text-sm"
                            size="txtInterRegular14"
                          >
                            $350
                          </Text>
                          <Text
                            className="mt-[38px] text-black-900 text-right text-sm"
                            size="txtInterRegular14"
                          >
                            $550
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[3px] mt-[35px] text-black-900 text-right text-sm"
                            size="txtInterRegular14"
                          >
                            $150
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-end sm:ml-[0] w-full">
                          <Text
                            className="text-gray-600 text-right text-xs"
                            size="txtInterMedium12"
                          >
                            Qty.
                          </Text>
                          <Text
                            className="mt-[49px] text-black-900 text-right text-sm"
                            size="txtInterRegular14"
                          >
                            150
                          </Text>
                          <Text
                            className="mt-[35px] text-black-900 text-right text-sm"
                            size="txtInterRegular14"
                          >
                            1
                          </Text>
                          <Text
                            className="mt-[37px] text-black-900 text-right text-sm"
                            size="txtInterRegular14"
                          >
                            2
                          </Text>
                          <Text
                            className="mt-[35px] text-black-900 text-right text-sm"
                            size="txtInterRegular14"
                          >
                            10
                          </Text>
                        </div>
                      </List>
                      <div className="flex sm:flex-1 flex-col gap-[50px] items-end justify-start w-[8%] sm:w-full">
                        <Text
                          className="text-gray-600 text-right text-xs"
                          size="txtInterMedium12"
                        >
                          Total
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-black-900 text-right text-sm"
                            size="txtInterRegular14"
                          >
                            $7.500
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[9px] mt-[34px] text-black-900 text-right text-sm"
                            size="txtInterRegular14"
                          >
                            $350
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[3px] mt-[38px] text-black-900 text-right text-sm"
                            size="txtInterRegular14"
                          >
                            $1.100
                          </Text>
                          <Text
                            className="mt-[35px] text-black-900 text-right text-sm"
                            size="txtInterRegular14"
                          >
                            $1.500
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="absolute bg-blue_gray-100_90 h-px inset-x-[0] mx-auto top-[12%] w-full" />
                  <Line className="absolute bg-white-A700 h-px inset-x-[0] mx-auto outline-[0.5px] outline-blue_gray-100 outline-dashed top-[41%] w-full" />
                  <Line className="absolute bg-white-A700 bottom-[14%] h-px inset-x-[0] mx-auto outline-[0.5px] outline-blue_gray-100 outline-dashed w-full" />
                  <Line className="absolute bg-white-A700 bottom-[36%] h-px inset-x-[0] mx-auto outline-[0.5px] outline-blue_gray-100 outline-dashed w-full" />
                </div>
                <Line className="bg-white-A700 h-px outline-[0.5px] outline-blue_gray-100 outline-dashed w-full" />
              </div>
              <div className="flex flex-col items-center justify-end md:ml-[0] ml-[440px] mt-36 w-[33%] md:w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="mt-0.5 text-gray-600 text-right text-sm"
                      size="txtInterRegular14Gray600"
                    >
                      Subtotal:
                    </Text>
                    <Text
                      className="text-base text-black-900 text-right"
                      size="txtInterRegular16"
                    >
                      $10450
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="mt-[3px] text-gray-600 text-right text-sm"
                      size="txtInterRegular14Gray600"
                    >
                      Tax 10%:
                    </Text>
                    <Text
                      className="text-base text-black-900 text-right"
                      size="txtInterRegular16"
                    >
                      $1045
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[33px] w-full">
                <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                  <Line className="bg-blue_gray-100_90 h-px w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Button className="bg-green-A700 cursor-pointer font-bold min-w-[84px] py-2 rounded-lg text-center text-green-A700 text-xs">
                      Paid
                    </Button>
                    <Text
                      className="sm:ml-[0] ml-[379px] sm:mt-0 mt-2.5 text-gray-600 text-right text-sm"
                      size="txtInterRegular14Gray600"
                    >
                      Total:
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[60px] text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                      size="txtInterExtraBold24Black900"
                    >
                      $11495
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoicesDetailsPage;
