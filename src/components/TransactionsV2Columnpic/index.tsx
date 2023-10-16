import React from "react";

import { Img, Text } from "components";

type TransactionsV2ColumnpicProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "transactionamount" | "transactiontype" | "transactiontime"
> &
  Partial<{
    username: string;
    transactionamount: string;
    transactiontype: string;
    transactiontime: string;
  }>;

const TransactionsV2Columnpic: React.FC<TransactionsV2ColumnpicProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[98%] md:w-full">
          <div className="flex flex-col h-8 items-center justify-start w-8">
            <div className="bg-blue_gray-50_01 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
              <Img
                className="h-8 md:h-auto rounded-[50%] w-8"
                src="images/img_pic_6.png"
                alt="pic"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <Text className="text-black-900 text-sm" size="txtInterBold14">
                {props?.username}
              </Text>
              <Text
                className="text-black-900 text-right text-sm"
                size="txtInterBold14"
              >
                {props?.transactionamount}
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-[3px] w-full">
              <Text className="text-gray-600 text-xs" size="txtInterMedium12">
                {props?.transactiontype}
              </Text>
              <Text
                className="text-gray-600 text-right text-xs"
                size="txtInterMedium12"
              >
                {props?.transactiontime}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TransactionsV2Columnpic.defaultProps = {
  username: "Money transfer to John Doe",
  transactionamount: "- €10.480,00",
  transactiontype: "Bank transfer",
  transactiontime: "28 Aug, 3:00 PM",
};

export default TransactionsV2Columnpic;
