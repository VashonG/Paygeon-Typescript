import React from "react";

import { Img, Text } from "components";

type InvoicesV2ButtonsiconProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "notificationimage" | "notificationtext"
> &
  Partial<{ notificationimage: string; notificationtext: string }>;

const InvoicesV2Buttonsicon: React.FC<InvoicesV2ButtonsiconProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-center my-2.5 w-auto">
          {!!props?.notificationimage ? (
            <Img
              className="h-[18px] w-[18px]"
              alt="notification_One"
              src="props?.notificationimage"
            />
          ) : null}
          {!!props?.notificationtext ? (
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              {props?.notificationtext}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

InvoicesV2Buttonsicon.defaultProps = {};

export default InvoicesV2Buttonsicon;
