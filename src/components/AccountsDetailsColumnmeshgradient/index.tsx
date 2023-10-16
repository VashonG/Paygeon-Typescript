import React from "react";

import { Img, Text } from "components";

type AccountsDetailsColumnmeshgradientProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "cardnumber" | "expirydate"
> &
  Partial<{ username: string; cardnumber: string; expirydate: string }>;

const AccountsDetailsColumnmeshgradient: React.FC<
  AccountsDetailsColumnmeshgradientProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
          <div className="flex sm:flex-1 flex-col items-center justify-start w-[26%] sm:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-blue_gray-50 flex flex-col items-center justify-start rounded-lg w-full">
                <div className="h-[62px] relative w-full">
                  <Img
                    className="h-[62px] m-auto object-cover rounded-lg w-full"
                    src="images/img_meshgradient_62x92.png"
                    alt="meshgradient"
                  />
                  <div className="absolute h-[62px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[62px] m-auto object-cover rounded-lg w-full"
                      src="images/img_bitmapcopy_62x92.png"
                      alt="bitmapcopy"
                    />
                    <Img
                      className="absolute h-[22px] right-[7%] top-[10%]"
                      src="images/img_visasvgrepocom.svg"
                      alt="visasvgrepocom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col gap-[5px] items-start justify-start w-[70%] sm:w-full">
            <Text
              className="text-black-900 text-lg"
              size="txtInterExtraBold18Black900"
            >
              {props?.username}
            </Text>
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="text-gray-600 text-sm"
                size="txtInterRegular14Gray600"
              >
                {props?.cardnumber}
              </Text>
              <Text
                className="text-gray-600 text-right text-sm"
                size="txtInterRegular14Gray600"
              >
                {props?.expirydate}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AccountsDetailsColumnmeshgradient.defaultProps = {
  username: "Visa Gold Paywave",
  cardnumber: "**** 8790",
  expirydate: "03/22",
};

export default AccountsDetailsColumnmeshgradient;
