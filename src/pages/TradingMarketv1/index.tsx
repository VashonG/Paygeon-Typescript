import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import ButtonsVariationsPartTwoButtonslabel from "components/ButtonsVariationsPartTwoButtonslabel";
import Footer from "components/Footer";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import Sidebar2 from "components/Sidebar2";
import TradingMarketV1Tradingweb from "components/TradingMarketV1Tradingweb";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const TradingMarketv1Page: React.FC = () => {
  const tradingMarketV1TradingwebPropList = [
    { userimageone: "images/img_img_3.png" },
    {
      priceOne: "1.018",
      changeone: "+0.24",
      price: "USD/JPY",
      arrowdropdown: "images/img_arrowdropup_pink_500.svg",
      change: "+0.002",
    },
    {
      priceOne: "136.08",
      changeone: "+0.07",
      change: "+0.1",
      price: "GBP/USD",
    },
    {
      priceOne: "1.203",
      changeone: "+0.05",
      price: "USD/CAD",
      arrowdropdown: "images/img_arrowdropup_pink_500.svg",
      change: "+0.001",
    },
    {
      priceOne: "1.295",
      changeone: "-0.124",
      change: "-0.002",
      price: "AUD/USD",
    },
    {
      priceOne: "10.686",
      changeone: "+0.28",
      price: "USD/LIRA",
      arrowdropdown: "images/img_arrowdropup_pink_500.svg",
      change: "+0.002",
    },
  ];
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
          src="images/img_notification.svg"
          alt="notification_Four"
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
        <div className="absolute h-[1020px] md:h-[1706px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="h-[1020px] md:h-[1706px] m-auto w-full">
            <div className="absolute bottom-[9%] flex flex-col gap-1.5 items-center justify-start right-[0] w-[83%]">
              <List
                className="flex flex-col gap-1.5 items-center w-[87%]"
                orientation="vertical"
              >
                {tradingMarketV1TradingwebPropList.map((props, index) => (
                  <React.Fragment key={`TradingMarketV1Tradingweb${index}`}>
                    <TradingMarketV1Tradingweb
                      className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 py-4 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
              <div className="sm:h-[198px] h-[209px] md:h-[422px] relative w-full">
                <div className="absolute flex flex-col gap-1.5 inset-x-[0] items-center justify-start mx-auto top-[0] w-[87%]">
                  <TradingMarketV1Tradingweb
                    className="flex md:flex-col flex-row md:gap-5 items-center justify-start py-4 w-full"
                    price="RUPEE/USD"
                    priceOne="4.508"
                    change="-0.011"
                    changeone="-0.103"
                  />
                  <div className="h-[108px] relative w-full">
                    <TradingMarketV1Tradingweb
                      className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[-4px] mx-auto py-4 w-full z-[1]"
                      price="USD/YUAN"
                      priceOne="1.603"
                      change="+0.003"
                      changeone="+0.26"
                      arrowdropdown="images/img_arrowdropup_pink_500.svg"
                    />
                    <TradingMarketV1Tradingweb
                      className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-auto mx-auto py-4 w-full"
                      price="CHF/USD"
                      priceOne="0.686"
                      change="+0.1"
                      changeone="+0.02"
                    />
                  </div>
                </div>
                <div className="absolute bg-gradient  bottom-[0] h-[198px] inset-x-[0] mx-auto w-full"></div>
              </div>
            </div>
            <div className="absolute flex flex-col items-start justify-start right-[5%] top-[10%] w-[72%]">
              <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] w-[37%] md:w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                  size="txtInterExtraBold42"
                >
                  Markets Overview
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start mt-1 w-auto">
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtInterRegular14Gray600"
                  >
                    Markets financial data in
                  </Text>
                  <Text
                    className="text-blue-A700 text-sm w-auto"
                    size="txtInterBold14BlueA700"
                  >
                    US
                  </Text>
                </div>
              </div>
              <div className="bg-blue_gray-50_99 flex flex-col items-center justify-start ml-1 md:ml-[0] mt-[45px] p-1.5 rounded-[10px] w-[64%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-auto md:w-full">
                  <Button className="bg-black-900 cursor-pointer font-bold min-w-[104px] py-2.5 rounded-lg text-center text-white-A700 text-xs">
                    Currencies
                  </Button>
                  <div className="flex flex-col items-center justify-start p-[3px]">
                    <Text
                      className="my-[7px] text-black-900 text-center text-xs"
                      size="txtInterBold12"
                    >
                      Treasurys
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="my-[9px] text-black-900 text-center text-xs"
                      size="txtInterBold12"
                    >
                      Commodities
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start p-0.5">
                    <Text
                      className="my-2 text-black-900 text-center text-xs"
                      size="txtInterBold12"
                    >
                      Stock Indexes
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start p-0.5">
                    <Text
                      className="my-2 text-black-900 text-center text-xs"
                      size="txtInterBold12"
                    >
                      Nasdaq 100
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="my-[9px] text-black-900 text-center text-xs"
                      size="txtInterBold12"
                    >
                      Dow 30
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="my-[9px] text-black-900 text-center text-xs"
                      size="txtInterBold12"
                    >
                      Sectors
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[19px] w-full">
                <ButtonsVariationsPartTwoButtonslabel
                  className="flex md:flex-1 flex-col items-center justify-start py-[15px] w-[8%] md:w-full"
                  language="Symbol"
                  globeimage="images/img_notification.svg"
                />
                <ButtonsVariationsPartTwoButtonslabel
                  className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[463px] py-[15px] w-[6%] md:w-full"
                  language="Price"
                  globeimage="images/img_notification.svg"
                />
                <ButtonsVariationsPartTwoButtonslabel
                  className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[185px] py-[15px] w-[8%] md:w-full"
                  language="Change"
                  globeimage="images/img_notification.svg"
                />
                <ButtonsVariationsPartTwoButtonslabel
                  className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[78px] py-[15px] w-[10%] md:w-full"
                  language="% Change"
                  globeimage="images/img_notification.svg"
                />
              </div>
            </div>
            <Sidebar2 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]" />
          </div>
          <InvoicesV2Navigationweb
            className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-5 right-[0] top-[0] w-[83%]"
            title="Trading"
          />
        </div>
      </div>
    </>
  );
};

export default TradingMarketv1Page;
