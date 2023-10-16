import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardV1Elementwidget from "components/DashboardV1Elementwidget";
import Footer from "components/Footer";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Dashboardv3Page: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_notification.svg"
          alt="notification"
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
          alt="icon"
        />
      ),
      label: "Transactions",
      href: "/transactionsempty",
      active: window.location.pathname === "/transactionsempty",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_icon.svg"
          alt="icon_One"
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
  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1020px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]" />
          <div className="flex flex-col gap-[45px] items-center justify-start ml-[undefinedpx] mr-20 my-auto w-[72%] z-[1]">
            <div className="flex flex-col items-center justify-end w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-0.5 w-full">
                <div className="flex sm:flex-1 flex-col items-start justify-start w-1/4 sm:w-full">
                  <Text
                    className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                    size="txtInterExtraBold42"
                  >
                    €114.158,63
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start mt-0.5 w-[96%] md:w-full">
                    <Text
                      className="text-gray-600 text-sm"
                      size="txtInterRegular14Gray600"
                    >
                      Total balance from all accounts
                    </Text>
                    <Text
                      className="text-blue-A700 text-sm"
                      size="txtInterBold14BlueA700"
                    >
                      EUR
                    </Text>
                  </div>
                </div>
                <InvoicesV2Buttonsicon
                  className="flex sm:flex-1 flex-col items-center justify-start p-1 w-[22%] sm:w-full"
                  notificationimage="images/img_plus.svg"
                  notificationtext="Open an account or deposit"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
                <DashboardV1Elementwidget className="border border-blue_gray-100_b2 border-solid flex flex-col items-center justify-start pb-7 rounded-[12px] w-full" />
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                <DashboardV1Elementwidget
                  className="border border-blue_gray-100_b2 border-solid flex flex-col gap-5 items-center justify-start pb-1 rounded-[12px] w-full"
                  title="Latest transactions"
                  notificationOne="images/img_notification.svg"
                />
              </div>
            </div>
          </div>
          <InvoicesV2Navigationweb
            className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-10px] p-5 w-[83%] z-[1]"
            title="Dashboard"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboardv3Page;
