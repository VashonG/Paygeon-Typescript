import React from "react";

import { Img, Line, Text } from "components";

type AccountsDetailsColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "transactionname" | "transactiondate" | "transactionprice"
> &
  Partial<{
    transactionname: string;
    transactiondate: string;
    transactionprice: string;
  }>;

const AccountsDetailsColumn: React.FC<AccountsDetailsColumnProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[17px] items-center justify-start w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <div className="flex flex-row gap-6 items-center justify-start w-auto">
              <div className="flex flex-col h-8 items-center justify-start w-8">
                <div className="bg-blue_gray-50_01 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                  <Img
                    className="h-8 md:h-auto rounded-[50%] w-8"
                    src="images/img_pic.png"
                    alt="pic"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                <Text
                  className="text-black-900 text-sm w-auto"
                  size="txtInterBold14"
                >
                  {props?.transactionname}
                </Text>
                <Text
                  className="text-gray-600 text-xs w-auto"
                  size="txtInterMedium12"
                >
                  {props?.transactiondate}
                </Text>
              </div>
            </div>
            <Text
              className="mt-[3px] text-black-900 text-right text-sm"
              size="txtInterBold14"
            >
              {props?.transactionprice}
            </Text>
          </div>
          <Line className="bg-blue_gray-100_b2 h-px w-full" />
        </div>
      </div>
    </>
  );
};

AccountsDetailsColumn.defaultProps = {
  transactionname: "Online purchase at Ebay.com",
  transactiondate: "28 Aug, 3:00 PM",
  transactionprice: "- $10.480,00",
};

export default AccountsDetailsColumn;
