import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import FormsPaddedInputsFormsprimary1 from "components/FormsPaddedInputsFormsprimary1";
import PageWBackIconOnLightNavigationweb from "components/PageWBackIconOnLightNavigationweb";
import Sidebar3 from "components/Sidebar3";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const PaymentServiceFormPage: React.FC = () => {
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
      <div className="bg-white-A700 font-inter h-[968px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="flex flex-col gap-[50px] h-full items-center justify-start ml-auto mr-[342px] my-auto md:px-5 w-[35%]">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <FormsPaddedInputsFormsprimary1
                className="flex flex-col gap-3 items-start justify-start w-full"
                fieldtitle="Pay for"
                price="Telia phone number subscription"
              />
            </div>
            <div className="flex flex-col gap-3 items-start justify-start mt-4 w-full">
              <Text className="text-black-900 text-xs" size="txtInterBold12">
                Your phone number
              </Text>
              <Input
                name="groupFifteen"
                placeholder="Enter your phone number"
                className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-100_b2 border-solid pl-5 pr-3 py-[23px] rounded-lg w-full"
                type="number"
              ></Input>
            </div>
            <div className="flex flex-col items-center justify-start mt-4 w-full">
              <FormsPaddedInputsFormsprimary1
                className="flex flex-col gap-3 items-start justify-start w-full"
                fieldtitle="Select payment account"
              />
            </div>
            <div className="flex flex-col items-center justify-start mt-4 w-full">
              <FormsPaddedInputsFormsprimary1
                className="flex flex-col gap-3 items-start justify-start w-full"
                price="9.99"
                image="images/img_img_20x20.png"
              />
            </div>
            <div className="flex flex-row items-center justify-start md:ml-[0] ml-[21px] mt-[11px] w-[39%] md:w-full">
              <Line className="bg-blue_gray-100_90 h-9 rotate-[2deg] w-0.5" />
              <Img
                className="h-2.5"
                src="images/img_daymark.svg"
                alt="daymark"
              />
              <Text
                className="ml-3.5 text-gray-600 text-xs"
                size="txtInterMedium12"
              >
                Transfer fee
              </Text>
              <Text
                className="ml-7 text-black-900 text-xs"
                size="txtInterBold12"
              >
                0.50 USD
              </Text>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start mt-3 w-full">
              <FormsPaddedInputsFormsprimary1
                className="flex flex-col gap-3.5 items-start justify-start w-full"
                fieldtitle="Total amount"
                price="10.49"
                image="images/img_img_20x20.png"
              />
              <Text
                className="leading-[18.00px] text-gray-600 text-xs w-[90%] sm:w-full"
                size="txtInterMedium12"
              >
                Transfers made on weekends or holidays take longer. All
                transfers are subject to review and could be delayed or stopped
                if we identify an issue.
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[150px] py-[17px] rounded-lg text-blue-A700 text-center text-sm">
              Cancel
            </Button>
            <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[151px] py-[17px] rounded-lg text-center text-sm text-white-A700">
              Pay $10.49
            </Button>
          </div>
        </div>
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar3 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]" />
          <PageWBackIconOnLightNavigationweb
            className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-10px] p-5 w-[83%] z-[1]"
            titletext="Make a Payment"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentServiceFormPage;
