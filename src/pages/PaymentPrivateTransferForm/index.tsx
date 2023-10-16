import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import FormsPaddedInputsFormsprimary1 from "components/FormsPaddedInputsFormsprimary1";
import PageWBackIconOnLightNavigationweb from "components/PageWBackIconOnLightNavigationweb";
import Sidebar4 from "components/Sidebar4";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const rustemTolstobrovOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PaymentPrivateTransferFormPage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_icon.svg"
          alt="icon"
        />
      ),
      label: "Dashboard",
      href: "/dashboardv1",
      active: window.location.pathname === "/dashboardv1",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_inbox.svg"
          alt="inbox"
        />
      ),
      label: "Accounts",
      href: "/accountsempty",
      active: window.location.pathname === "/accountsempty",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_creditcard.svg"
          alt="creditcard"
        />
      ),
      label: "Cards",
      href: "/cardslistv1",
      active: window.location.pathname === "/cardslistv1",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_icon.svg"
          alt="icon_One"
        />
      ),
      label: "Transactions",
      href: "/transactionsempty",
      active: window.location.pathname === "/transactionsempty",
    },
    {
      icon: (
        <Img
          className="h-[21px] w-[22px]"
          src="images/img_notification.svg"
          alt="notification"
        />
      ),
      label: "Payment",
      href: "/paymentcategories",
      active: window.location.pathname === "/paymentcategories",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_icon.svg"
          alt="icon_Two"
        />
      ),
      label: "Invoicing",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_icon.svg"
          alt="icon_Three"
        />
      ),
      label: "Trading",
      href: "/tradingmarketv1",
      active: window.location.pathname === "/tradingmarketv1",
    },
    {
      icon: (
        <Img className="h-[22px]" src="images/img_icon.svg" alt="icon_Four" />
      ),
      label: "Reports",
      href: "/reportsv1",
      active: window.location.pathname === "/reportsv1",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1000px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="flex flex-col md:gap-10 gap-[68px] h-full justify-start ml-auto mr-[342px] my-auto md:px-5 w-[35%]">
          <div className="flex flex-row gap-[23px] items-center justify-start md:ml-[0] ml-[78px] w-[56%] md:w-full">
            <Button className="bg-black-900 cursor-pointer font-bold min-w-[174px] py-2.5 rounded-lg text-center text-white-A700 text-xs">
              International transfer
            </Button>
            <Text
              className="text-black-900 text-center text-xs"
              size="txtInterBold12"
            >
              Local transfer
            </Text>
          </div>
          <div className="flex flex-col gap-[52px] items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Text className="text-black-900 text-xs" size="txtInterBold12">
                  Select recipient
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
                  name="groupThirtyOne"
                  options={rustemTolstobrovOptionsList}
                  isSearchable={false}
                  placeholder="Rustem Tolstobrov"
                />
              </div>
              <div className="flex flex-col items-center justify-start mt-4 w-full">
                <FormsPaddedInputsFormsprimary1
                  className="flex flex-col gap-3 items-start justify-start w-full"
                  fieldtitle="Select payment account"
                />
              </div>
              <div className="flex flex-col items-center justify-start mt-4 w-full">
                <FormsPaddedInputsFormsprimary1
                  className="flex flex-col gap-[15px] items-start justify-start w-full"
                  fieldtitle="You will send"
                  price="1,290.00"
                  image="images/img_img_20x20.png"
                />
              </div>
              <div className="flex flex-col items-center justify-start ml-5 md:ml-[0] mt-3 w-2/5 md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-full">
                  <div className="flex relative w-[15%]">
                    <Line className="bg-blue_gray-100_90 h-[72px] my-auto rotate-[2deg] w-[5px]" />
                    <Img
                      className="h-2.5 ml-[-1.77px] mt-[13px] z-[1]"
                      src="images/img_daymark.svg"
                      alt="daymark"
                    />
                    <Img
                      className="h-2.5 mb-[18px] ml-[-1.77px] mt-auto z-[1]"
                      src="images/img_daymark.svg"
                      alt="daymark_One"
                    />
                  </div>
                  <div className="flex flex-col gap-[15px] items-center justify-start w-[79%]">
                    <div className="flex flex-row gap-[11px] items-center justify-between w-full">
                      <Text
                        className="text-gray-600 text-xs"
                        size="txtInterMedium12"
                      >
                        Conversion fee
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterBold12"
                      >
                        9.50 USD
                      </Text>
                    </div>
                    <div className="flex flex-row gap-7 items-center justify-between w-full">
                      <Text
                        className="text-gray-600 text-xs"
                        size="txtInterMedium12"
                      >
                        Transfer fee
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterBold12"
                      >
                        5.50 USD
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <FormsPaddedInputsFormsprimary1
                className="flex flex-col gap-3 items-start justify-start mt-[11px] w-full"
                fieldtitle="Recipient will get"
              />
              <Text
                className="leading-[18.00px] mt-[18px] text-gray-600 text-xs w-[90%] sm:w-full"
                size="txtInterMedium12"
              >
                Transfers made on weekends or holidays take longer. All
                transfers are subject to review and could be delayed or stopped
                if we identify an issue.
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[150px] py-[17px] rounded-lg text-blue-A700 text-center text-sm">
                Cancel
              </Button>
              <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[151px] py-[17px] rounded-lg text-center text-sm text-white-A700">
                Continue
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar4 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]" />
          <PageWBackIconOnLightNavigationweb
            className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-10px] p-5 w-[83%] z-[1]"
            titletext="Send Money"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentPrivateTransferFormPage;
