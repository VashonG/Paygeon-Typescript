import React from "react";

import { Img, Text } from "components";

type FormsPaddedInputsFormsprimary1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "fieldtitle" | "price" | "currency" | "image"
> &
  Partial<{
    fieldtitle: string;
    price: string;
    currency: string;
    image: string;
  }>;

const FormsPaddedInputsFormsprimary1: React.FC<
  FormsPaddedInputsFormsprimary1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text className="text-black-900 text-xs" size="txtInterBold12">
          {props?.fieldtitle}
        </Text>
        <div className="border border-blue_gray-100_b2 border-solid flex flex-row items-center justify-between p-5 rounded-lg w-full">
          {!!props?.price ? (
            <Text className="text-black-900 text-sm" size="txtInterRegular14">
              {props?.price}
            </Text>
          ) : null}
          <div className="flex flex-row gap-2 items-start justify-center">
            {!!props?.currency ? (
              <Text
                className="text-black-900 text-right text-sm"
                size="txtInterRegular14"
              >
                {props?.currency}
              </Text>
            ) : null}
            <div className="bg-white-A700 flex flex-col h-5 items-center justify-start w-5">
              {!!props?.image ? (
                <Img
                  className="h-5 md:h-auto rounded-[50%] w-5"
                  alt="img"
                  src="props?.image"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FormsPaddedInputsFormsprimary1.defaultProps = { fieldtitle: "You will pay" };

export default FormsPaddedInputsFormsprimary1;
