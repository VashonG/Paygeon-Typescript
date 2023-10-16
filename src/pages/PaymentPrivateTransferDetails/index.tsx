import React from "react";

import { Img, Line, Text } from "components";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import PaymentCategoriesSearchElementwidget from "components/PaymentCategoriesSearchElementwidget";

const PaymentPrivateTransferDetailsPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1000px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_paymentprivate.png')" }}
      >
        <div className="bg-black-900_a7 flex flex-col items-center justify-start p-[207px] md:px-10 sm:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start pb-[18px] md:px-5 rounded-[16px] shadow-bs1 w-[49%] md:w-full">
            <div className="flex flex-col gap-[53px] items-center justify-start w-full">
              <div className="flex flex-col relative w-full">
                <div className="bg-blue_gray-50 flex flex-col items-center justify-start mx-auto pb-[138px] rounded-[16px] w-full">
                  <PaymentCategoriesSearchElementwidget
                    className="flex flex-col items-center justify-start pt-[23px] w-full"
                    title="Recipient details"
                    calendar="images/img_close_black_900.svg"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[-44px] mx-auto w-[46%] z-[1]">
                  <div className="flex flex-col h-[74px] items-center justify-start outline outline-[4px] outline-white-A700 rounded-[50%] w-[74px]">
                    <Img
                      className="h-[74px] md:h-auto rounded-[50%] w-[74px]"
                      src="images/img_pic_74x74.png"
                      alt="pic"
                    />
                  </div>
                  <Text
                    className="mt-3.5 text-black-900 text-center text-xl"
                    size="txtInterExtraBold20"
                  >
                    Slavcho Karbashewski
                  </Text>
                  <Text
                    className="mt-[7px] text-gray-600 text-sm"
                    size="txtInterRegular14Gray600"
                  >
                    Added on 29 April, 2022
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[33px] items-center justify-start w-[91%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-row items-start justify-between pt-0.5 w-full">
                    <Text
                      className="mt-0.5 text-gray-600 text-xs"
                      size="txtInterMedium12"
                    >
                      Routing number
                    </Text>
                    <Text
                      className="text-black-900 text-right text-sm"
                      size="txtInterRegular14"
                    >
                      017062169
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="mt-0.5 text-gray-600 text-xs"
                      size="txtInterMedium12"
                    >
                      Account
                    </Text>
                    <Text
                      className="text-black-900 text-right text-sm"
                      size="txtInterRegular14"
                    >
                      **** 4590
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start pt-0.5 w-full">
                    <Text
                      className="sm:mt-0 mt-[3px] text-gray-600 text-xs"
                      size="txtInterMedium12"
                    >
                      Currency
                    </Text>
                    <div className="bg-white-A700 flex flex-col h-4 items-center justify-start mb-[3px] sm:ml-[0] ml-[344px] w-4">
                      <Img
                        className="h-4 md:h-auto rounded-[50%] w-4"
                        src="images/img_img_16x16.png"
                        alt="img"
                      />
                    </div>
                    <Text
                      className="ml-2 sm:ml-[0] text-black-900 text-right text-sm"
                      size="txtInterRegular14"
                    >
                      USD
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between pt-[3px] w-full">
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtInterMedium12"
                    >
                      Account type
                    </Text>
                    <Text
                      className="text-black-900 text-right text-sm"
                      size="txtInterRegular14"
                    >
                      Checking
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <InvoicesV2Buttonsicon
                    className="flex flex-col items-center justify-start w-[31%]"
                    notificationimage="images/img_notification.svg"
                    notificationtext="Make a transfer"
                  />
                  <InvoicesV2Buttonsicon
                    className="flex flex-col items-center justify-start py-[15px] w-[23%]"
                    notificationimage="images/img_edit.svg"
                    notificationtext="Edit details"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPrivateTransferDetailsPage;
