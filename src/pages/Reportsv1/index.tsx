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

const Reportsv1Page: React.FC = () => {
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
          alt="notification"
        />
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
        <div className="flex flex-col gap-[41px] h-full items-start justify-start ml-auto mr-20 my-auto md:px-5 w-[72%]">
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
          <div className="h-[676px] md:h-[927px] sm:h-[Infinitypx] relative w-full">
            <DashboardV1Elementwidget
              className="absolute border border-blue_gray-100_b2 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[23px] rounded-[12px] w-full"
              title="Accounts Overview"
            />
            <div className="absolute bottom-[10%] md:h-96 h-[394px] inset-x-[0] mx-auto w-full">
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[342px] inset-x-[0] items-center justify-end mx-auto w-[98%]"
                style={{ backgroundImage: "url('images/img_group219.svg')" }}
              >
                <Img
                  className="h-[226px] mt-[114px]"
                  src="images/img_chart_blue_a700.svg"
                  alt="chart"
                />
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto p-1 w-full"
                style={{ backgroundImage: "url('images/img_group218.svg')" }}
              >
                <div className="flex flex-col gap-[33px] items-start justify-start md:ml-[0] ml-[21px] mt-[25px]">
                  <Text
                    className="text-gray-600 text-right text-xs"
                    size="txtInterMedium12"
                  >
                    7k
                  </Text>
                  <Text
                    className="h-[15px] text-gray-600 text-right text-xs"
                    size="txtInterMedium12"
                  >
                    6k
                  </Text>
                  <Text
                    className="text-gray-600 text-right text-xs"
                    size="txtInterMedium12"
                  >
                    5k
                  </Text>
                  <Text
                    className="h-[15px] text-gray-600 text-right text-xs"
                    size="txtInterMedium12"
                  >
                    4k
                  </Text>
                  <Text
                    className="h-[15px] text-gray-600 text-right text-xs"
                    size="txtInterMedium12"
                  >
                    3k
                  </Text>
                  <Text
                    className="text-gray-600 text-right text-xs"
                    size="txtInterMedium12"
                  >
                    2k
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] text-gray-600 text-right text-xs"
                    size="txtInterMedium12"
                  >
                    1k
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[7px] text-gray-600 text-right text-xs"
                    size="txtInterMedium12"
                  >
                    0
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar6 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]" />
          <InvoicesV2Navigationweb
            className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-10px] p-5 w-[83%] z-[1]"
            title="Reports"
          />
        </div>
      </div>
    </>
  );
};

export default Reportsv1Page;
