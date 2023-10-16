import React from "react";

import { Button, Img, Text } from "components";

type FormsCheckboxesPaginationRowarrowleftProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "numberone" | "numbertwo" | "numberthree" | "numberfour" | "numberfive"
> &
  Partial<{
    numberone: string;
    numbertwo: string;
    numberthree: string;
    numberfour: string;
    numberfive: string;
  }>;

const FormsCheckboxesPaginationRowarrowleft: React.FC<
  FormsCheckboxesPaginationRowarrowleftProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button className="flex h-10 items-center justify-center outline outline-[0.5px] outline-blue_gray-100_75 p-3 rounded-lg w-10">
          <Img src="images/img_arrowleft.svg" alt="arrowleft" />
        </Button>
        <div className="flex flex-row items-center justify-center">
          <Text
            className="text-black-900 text-center text-xs"
            size="txtInterMedium12Black900"
          >
            {props?.numberone}
          </Text>
          <Button className="bg-blue-A700 cursor-pointer font-bold font-inter h-10 ml-[21px] py-3 rounded-lg text-center text-white-A700 text-xs w-10">
            {props?.numbertwo}
          </Button>
          <Text
            className="ml-[19px] text-black-900 text-center text-xs"
            size="txtInterMedium12Black900"
          >
            {props?.numberthree}
          </Text>
          <Text
            className="ml-[35px] text-black-900 text-center text-xs"
            size="txtInterMedium12Black900"
          >
            {props?.numberfour}
          </Text>
          <Text
            className="ml-[35px] text-black-900 text-center text-xs"
            size="txtInterMedium12Black900"
          >
            {props?.numberfive}
          </Text>
        </div>
        <Button className="flex h-10 items-center justify-center outline outline-[0.5px] outline-blue_gray-100_75 p-3 rounded-lg w-10">
          <Img src="images/img_arrowright.svg" alt="arrowright" />
        </Button>
      </div>
    </>
  );
};

FormsCheckboxesPaginationRowarrowleft.defaultProps = {
  numberone: "1",
  numbertwo: "2",
  numberthree: "3",
  numberfour: "4",
  numberfive: "5",
};

export default FormsCheckboxesPaginationRowarrowleft;
