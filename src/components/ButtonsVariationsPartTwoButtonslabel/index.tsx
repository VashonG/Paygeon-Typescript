import React from "react";

import { Img, Text } from "components";

type ButtonsVariationsPartTwoButtonslabelProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "language" | "globeimage"
> &
  Partial<{ language: string; globeimage: string }>;

const ButtonsVariationsPartTwoButtonslabel: React.FC<
  ButtonsVariationsPartTwoButtonslabelProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-1.5 items-center justify-center w-auto md:w-full">
          <Text className="text-black-900 text-sm w-auto" size="txtInterBold14">
            {props?.language}
          </Text>
          <Img
            className="h-[18px] w-[18px]"
            alt="globe"
            src="props?.globeimage"
          />
        </div>
      </div>
    </>
  );
};

ButtonsVariationsPartTwoButtonslabel.defaultProps = {
  language: "English",
  globeimage: "images/img_globe.svg",
};

export default ButtonsVariationsPartTwoButtonslabel;
