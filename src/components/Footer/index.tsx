import React from "react";

import { Button, Img, Line, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[19px] w-full">
          <div className="flex flex-col gap-[19px] items-center justify-center w-full">
            <Line className="bg-blue_gray-100_b2 h-px w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[87%] md:w-full">
              <ul className="flex sm:flex-col flex-row gap-[22px] items-center justify-start w-auto md:w-full common-column-list">
                <li>
                  <Text
                    className="text-black-900 text-xs"
                    size="txtInterBold12"
                  >
                    Privacy Policy
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-black-900 text-xs"
                    size="txtInterBold12"
                  >
                    License
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-black-900 text-xs"
                    size="txtInterBold12"
                  >
                    API
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-black-900 text-xs"
                    size="txtInterBold12"
                  >
                    Help Center
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-600 text-xs"
                    size="txtInterMedium12"
                  >
                    © 2022 All rights reserved
                  </Text>
                </li>
              </ul>
              <div className="flex flex-row gap-4 items-center justify-between w-[14%] md:w-full">
                <div className="flex flex-col items-center justify-start py-3">
                  <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtInterBold14"
                    >
                      English
                    </Text>
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                  </div>
                </div>
                <Button className="border border-blue_gray-100_b2 border-solid flex h-[46px] items-center justify-center p-3.5 rounded-lg w-[46px]">
                  <Img src="images/img_brightness.svg" alt="brightness" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
