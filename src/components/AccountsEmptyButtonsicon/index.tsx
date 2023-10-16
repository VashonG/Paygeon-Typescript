import React from "react";

import { Img, Text } from "components";

type AccountsEmptyButtonsiconProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "lable"
> &
  Partial<{ lable: string }>;

const AccountsEmptyButtonsicon: React.FC<AccountsEmptyButtonsiconProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-center my-[5px] w-auto">
          <Img
            className="h-[18px] w-[18px]"
            src="images/img_plus_blue_a700.svg"
            alt="plus"
          />
          <Text
            className="text-blue-A700 text-sm w-auto"
            size="txtInterBold14BlueA700"
          >
            {props?.lable}
          </Text>
        </div>
      </div>
    </>
  );
};

AccountsEmptyButtonsicon.defaultProps = { lable: "Open an account or deposit" };

export default AccountsEmptyButtonsicon;
