import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  PagerIndicator,
  SelectBox,
  Text,
} from "components";

const unitedStatesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const RegistrationSignUpPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[149px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1291px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-[34%] md:w-full">
            <div className="flex flex-row gap-3 items-center justify-start sm:pr-5 pr-[37px] w-[36%] md:w-full">
              <Img
                className="h-11 w-11"
                src="images/img_google_blue_a700.svg"
                alt="google"
              />
              <Text
                className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900 tracking-[0.25px]"
                size="txtInterBlack21"
              >
                Paysa
              </Text>
            </div>
            <Text
              className="mt-[65px] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
              size="txtInterExtraBold42"
            >
              Sign up
            </Text>
            <Text
              className="mt-1 text-gray-600 text-sm"
              size="txtInterRegular14Gray600"
            >
              Before we start, please enter your current location
            </Text>
            <div className="flex flex-col items-start justify-start mt-[47px] w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Text className="text-black-900 text-xs" size="txtInterBold12">
                  Country/Area of Residence
                </Text>
                <SelectBox
                  className="border border-blue_gray-100_b2 border-solid px-5 py-[22px] rounded-lg text-black-900 text-left text-sm w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-[18px] mr-[0] w-[11px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group152"
                  options={unitedStatesOptionsList}
                  isSearchable={false}
                  placeholder="United States"
                />
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-[18px] w-full">
                <Text className="text-black-900 text-xs" size="txtInterBold12">
                  Country/Area of Residence
                </Text>
                <Input
                  name="group153"
                  placeholder="catherine.shaw|"
                  className="p-0 placeholder:text-black-900 text-black-900 text-left text-sm w-full"
                  wrapClassName="flex outline outline-[0.5px] outline-blue-A700 px-[19px] py-[23px] rounded-lg w-full"
                  suffix={
                    <div className="h-[18px] ml-[35px] w-[18px] bg-black-900">
                      <Img
                        className="h-[18px] my-auto"
                        src="images/img_mail.svg"
                        alt="mail"
                      />
                    </div>
                  }
                ></Input>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start mt-[17px] w-full">
                <Text className="text-black-900 text-xs" size="txtInterBold12">
                  Password
                </Text>
                <Input
                  name="group154"
                  placeholder="Enter your password"
                  className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm w-full"
                  wrapClassName="flex outline outline-[0.5px] outline-blue_gray-100_75 px-[19px] py-[22px] rounded-lg w-full"
                  type="password"
                  suffix={
                    <div className="h-[18px] mb-px ml-3 w-[18px] bg-gray-600">
                      <Img
                        className="h-[18px] my-auto"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                    </div>
                  }
                ></Input>
              </div>
              <CheckBox
                className="font-bold mt-7 sm:pr-5 text-black-900 text-left text-xs"
                inputClassName="bg-blue-A700 h-5 mr-[5px] rounded w-5"
                name="title"
                id="title"
                label="I agree to receive email updates"
              ></CheckBox>
              <div className="flex flex-row gap-2.5 items-start justify-start mt-3.5 sm:pr-5 pr-[37px] w-[71%] md:w-full">
                <div className="bg-blue_gray-50 h-5 rounded w-5"></div>
                <Text
                  className="mt-[3px] text-gray-600 text-xs"
                  size="txtInterBold12Gray600"
                >
                  I have read and agree to Terms of Service
                </Text>
              </div>
              <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[437px] sm:min-w-full mt-7 py-[17px] rounded-lg text-center text-sm text-white-A700">
                Create account
              </Button>
            </div>
            <div className="flex flex-row gap-[7px] items-start justify-start mt-[87px] pt-[3px] w-[42%] md:w-full">
              <Text className="text-black-900 text-sm" size="txtInterRegular14">
                Already registered?
              </Text>
              <a href="javascript:" className="text-blue-A700 text-sm">
                <Text size="txtInterBold14BlueA700">Sign in</Text>
              </a>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[55%] md:w-full">
            <div className="bg-blue_gray-50 flex flex-col items-center justify-start w-full">
              <div className="h-[900px] relative w-full">
                <div className="h-[900px] m-auto w-full">
                  <div className="h-[900px] m-auto w-full">
                    <Img
                      className="h-[900px] m-auto object-cover w-full"
                      src="images/img_meshgradient.png"
                      alt="meshgradient"
                    />
                    <Img
                      className="absolute h-[543px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                      src="images/img_bitmapcopy.png"
                      alt="bitmapcopy"
                    />
                  </div>
                  <div className="absolute bottom-[0] h-[356px] inset-x-[0] mx-auto w-full">
                    <Img
                      className="h-[356px] m-auto object-cover w-full"
                      src="images/img_bitmapcopy2.png"
                      alt="bitmapcopyTwo"
                    />
                    <div className="absolute bottom-[13%] flex flex-col inset-x-[0] items-center justify-end mx-auto w-[64%]">
                      <Text
                        className="mt-[5px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-full"
                        size="txtInterExtraBold24"
                      >
                        Fintech is the technology and innovation that aims to
                        compete with traditional financial methods.
                      </Text>
                      <PagerIndicator
                        className="flex h-1.5 justify-center mt-11 w-[42px]"
                        count={3}
                        activeCss="inline-block cursor-pointer h-1.5 bg-white-A700 w-[18px] rounded-[3px]"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-1.5 bg-white-A700 w-1.5"
                        selectedWrapperCss="inline-block md:ml-[0] mx-[3.00px] sm:ml-[0]"
                        unselectedWrapperCss="inline-block md:ml-[0] mx-[3.00px] sm:ml-[0]"
                      />
                      <Text
                        className="mt-[43px] text-center text-lg text-white-A700"
                        size="txtInterExtraBold18"
                      >
                        Waiapi Karaka
                      </Text>
                      <Text
                        className="mt-0.5 text-center text-sm text-white-A700_7f"
                        size="txtInterRegular14WhiteA7007f"
                      >
                        Financial Officer
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[407px] right-[12%] top-[16%] w-[72%] sm:w-full">
                  <Img
                    className="absolute h-[407px] inset-y-[0] left-[12%] my-auto object-cover w-[71%]"
                    src="images/img_rectangle.png"
                    alt="rectangle"
                  />
                  <div className="absolute bg-white-A700 flex flex-row gap-[45px] items-center justify-center p-[7px] right-[9%] rounded-[12px] shadow-bs top-[16%] w-[41%]">
                    <Img
                      className="h-[46px] md:h-auto object-cover rounded-[12px] w-[44%]"
                      src="images/img_analyticscounters.png"
                      alt="analyticscounte"
                    />
                    <Img
                      className="h-[52px] md:h-auto mb-[3px] mr-[7px] object-cover rounded-[12px] w-[29%]"
                      src="images/img_analyticscounters_52x54.png"
                      alt="analyticscounte_One"
                    />
                  </div>
                  <div className="absolute bg-white-A700 bottom-[7%] flex flex-col items-center justify-start right-[0] rounded-[12px] shadow-bs w-[48%]">
                    <Img
                      className="h-20 md:h-auto object-cover rounded-[12px] w-full"
                      src="images/img_paymentitemv1.png"
                      alt="paymentitemvOne"
                    />
                  </div>
                  <div className="absolute bg-white-A700 bottom-[33%] flex flex-col items-center justify-start left-[0] rounded-[12px] shadow-bs w-[44%]">
                    <Img
                      className="h-[71px] md:h-auto object-cover rounded-[12px] w-full"
                      src="images/img_linkedcard.png"
                      alt="linkedcard"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationSignUpPage;
