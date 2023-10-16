import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardV1Elementwidget from "components/DashboardV1Elementwidget";
import Footer from "components/Footer";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import Sidebar6 from "components/Sidebar6";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Reportsv2Page: React.FC = () => {
  const [searchvalue, setSearchvalue] = React.useState<string>("");
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
          className="h-[22px] w-[22px]"
          src="images/img_icon.svg"
          alt="icon_Two"
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
          alt="icon_Three"
        />
      ),
      label: "Invoicing",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_icon.svg"
          alt="icon_Four"
        />
      ),
      label: "Trading",
      href: "/tradingmarketv1",
      active: window.location.pathname === "/tradingmarketv1",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[17px]"
          src="images/img_notification.svg"
          alt="notification_One"
        />
      ),
      label: "Reports",
      href: "/reportsv1",
      active: window.location.pathname === "/reportsv1",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex font-inter h-[1020px] justify-end mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="flex md:flex-col flex-row gap-6 h-full items-center justify-center mb-[118px] ml-auto mr-20 mt-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
            <DashboardV1Elementwidget className="border border-blue_gray-100_b2 border-solid flex flex-col items-center justify-start pb-6 rounded-[12px] w-full" />
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
            <DashboardV1Elementwidget className="border border-blue_gray-100_b2 border-solid flex flex-col gap-[25px] items-center justify-start pb-[25px] rounded-[12px] w-full" />
          </div>
        </div>
        <div className="absolute h-[1020px] inset-[0] justify-center m-auto md:px-5 w-full">
          <InvoicesV2Navigationweb
            className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-5 right-[0] top-[0] w-[83%]"
            title="Reports"
          />
          <div className="absolute flex flex-col gap-[41px] items-start justify-start right-[6%] top-[10%] w-[72%]">
            <div className="flex flex-col items-center justify-end w-[27%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                  size="txtInterExtraBold42"
                >
                  $120,420.50
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start mt-1 w-[90%] md:w-full">
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
                    USD
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <DashboardV1Elementwidget className="border border-blue_gray-100_b2 border-solid h-[218px] md:h-[353px] sm:h-[497px] relative rounded-[12px] w-full" />
            </div>
          </div>
          <Sidebar6 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]" />
        </div>
      </div>
    </>
  );
};

export default Reportsv2Page;
