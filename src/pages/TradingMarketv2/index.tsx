import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import Footer from "components/Footer";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import Sidebar2 from "components/Sidebar2";
import TradingMarketV2Tradingweb from "components/TradingMarketV2Tradingweb";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];
type Table3RowType = {
  rowlable: string;
  rowlableone: string;
  rowlabletwo: string;
  rowlablethree: string;
  rowlablefour: string;
};

const TradingMarketv2Page: React.FC = () => {
  const table3Data = React.useRef<Table3RowType[]>([
    {
      rowlable: "EUR/USD",
      rowlableone: "images/img_car.svg",
      rowlabletwo: "images/img_arrowdropdown.svg",
      rowlablethree: "- 0.23",
      rowlablefour: "images/img_notification.svg",
    },
    {
      rowlable: "USD/JPY",
      rowlableone: "images/img_car.svg",
      rowlabletwo: "images/img_arrowdropup_pink_500.svg",
      rowlablethree: "+0.002",
      rowlablefour: "images/img_notification.svg",
    },
    {
      rowlable: "GBP/USD",
      rowlableone: "images/img_car.svg",
      rowlabletwo: "images/img_arrowright_pink_500.svg",
      rowlablethree: "+0.1",
      rowlablefour: "images/img_notification.svg",
    },
    {
      rowlable: "USD/CAD",
      rowlableone: "images/img_car.svg",
      rowlabletwo: "images/img_arrowdropup_pink_500.svg",
      rowlablethree: "+0.001",
      rowlablefour: "images/img_notification.svg",
    },
    {
      rowlable: "AUD/USD",
      rowlableone: "images/img_car.svg",
      rowlabletwo: "images/img_arrowdropdown.svg",
      rowlablethree: "-0.002",
      rowlablefour: "images/img_notification.svg",
    },
    {
      rowlable: "USD/LIRA",
      rowlableone: "images/img_car.svg",
      rowlabletwo: "images/img_arrowright_pink_500.svg",
      rowlablethree: "+0.002",
      rowlablefour: "images/img_notification.svg",
    },
  ]);
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper<Table3RowType>();
    return [
      table3ColumnHelper.accessor("rowlable", {
        cell: (info) => (
          <div className="flex flex-row gap-[18px] items-center justify-start p-1">
            <div className="h-6 md:h-[50px] my-[13px] relative w-[17%]">
              <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-6">
                <Img
                  className="h-6 md:h-auto rounded-[50%] w-6"
                  src="images/img_img_24x24.png"
                  alt="img"
                />
              </div>
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-6">
                <div className="bg-white-A700 flex flex-col h-6 items-center justify-start w-6">
                  <Img
                    className="h-6 md:h-auto rounded-[50%] w-6"
                    src="images/img_img_3.png"
                    alt="img_One"
                  />
                </div>
              </div>
            </div>
            <Text className="text-black-900 text-sm" size="txtInterBold14">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-start min-w-[278px] pr-4 py-4">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              Symbol
            </Text>
            <Img
              className="h-[18px] w-[9px]"
              src="images/img_notification.svg"
              alt="notification"
            />
          </div>
        ),
      }),
      table3ColumnHelper.accessor("rowlableone", {
        cell: (info) => (
          <div className="flex flex-row gap-20 items-center justify-center p-[9px]">
            <Text
              className="ml-[3px] text-black-900 text-right text-sm"
              size="txtInterBold14"
            >
              106.9
            </Text>
            <Img className="h-[39px] mr-16" alt="car" src="info?.getValue()" />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-center min-w-[305px] pr-4 py-4">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              Price
            </Text>
            <Img
              className="h-[18px] w-[9px]"
              src="images/img_notification.svg"
              alt="notification_One"
            />
          </div>
        ),
      }),
      table3ColumnHelper.accessor("rowlabletwo", {
        cell: (info) => (
          <div className="flex flex-row gap-[9px] items-center justify-start p-1.5">
            <Text className="text-black-900 text-sm" size="txtInterRegular14">
              Bearish
            </Text>
            <Img
              className="h-5 my-3"
              alt="arrowdropdown"
              src="info?.getValue()"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-start min-w-[159px] pr-4 py-4">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              Sentiment
            </Text>
            <Img
              className="h-[18px] w-[9px]"
              src="images/img_notification.svg"
              alt="notification_Two"
            />
          </div>
        ),
      }),
      table3ColumnHelper.accessor("rowlablethree", {
        cell: (info) => (
          <Text
            className="pb-[19px] pl-[26px] pr-[35px] pt-[22px] sm:px-5 text-pink-500 text-right text-sm"
            size="txtInterBold14Pink500"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-end min-w-[128px] pr-4 py-4">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              Change
            </Text>
            <Img
              className="h-[18px] w-[9px]"
              src="images/img_notification.svg"
              alt="notification_Three"
            />
          </div>
        ),
      }),
      table3ColumnHelper.accessor("rowlablefour", {
        cell: (info) => (
          <div className="flex flex-row gap-[37px] items-center justify-between pl-[3px] py-[3px]">
            <div className="flex flex-row gap-2.5 items-start justify-center ml-5 pr-1">
              <Text
                className="mt-0.5 text-pink-500 text-right text-sm"
                size="txtInterBold14Pink500"
              >
                - 0.21
              </Text>
              <Img
                className="h-5"
                src="images/img_arrowdropdown.svg"
                alt="arrowdropdown_One"
              />
            </div>
            <Img
              className="h-[52px] w-[52px]"
              alt="notification_Five"
              src="info?.getValue()"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-between min-w-[177px] pr-4 py-4">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              % Change
            </Text>
            <Img
              className="h-[18px] w-[9px]"
              src="images/img_notification.svg"
              alt="notification_Four"
            />
          </div>
        ),
      }),
    ];
  }, []);

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
          alt="notification_Fourteen"
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
        <div className="absolute h-[1020px] md:h-[1135px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="h-[1020px] md:h-[1135px] m-auto w-full">
            <div className="absolute bottom-[9%] flex flex-col gap-1.5 items-center justify-start right-[0] w-[83%]">
              <div className="overflow-auto w-[89%]">
                <ReactTable
                  columns={table3Columns}
                  data={table3Data.current}
                  rowClass={""}
                  headerClass=""
                />
              </div>
              <div className="sm:h-[118px] h-[209px] md:h-[710px] pb-[39px] sm:px-5 px-[39px] relative w-full">
                <div className="absolute flex flex-col gap-1.5 inset-x-[0] items-center justify-start mx-auto top-[0] w-[89%]">
                  <TradingMarketV2Tradingweb
                    className="flex md:flex-col flex-row md:gap-5 items-center justify-start py-0.5 w-full"
                    userimage="images/img_img_24.png"
                  />
                  <div className="h-[108px] relative w-full">
                    <TradingMarketV2Tradingweb
                      className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[-4px] mx-auto py-0.5 w-full z-[1]"
                      currencytype="USD/YUAN"
                      currencyvalue="1.603"
                      sentimenttype="Bullish"
                      sentimentdropdown="images/img_arrowdropup_pink_500.svg"
                      changevalue="+0.003"
                      changevalue1="+0.26"
                      changedropdown="images/img_arrowdropup_pink_500.svg"
                    />
                    <TradingMarketV2Tradingweb
                      className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-auto mx-auto py-0.5 w-full"
                      currencytype="CHF/USD"
                      currencyvalue="0.686"
                      changevalue="+0.1"
                      changevalue1="+0.02"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col gap-[45px] items-start justify-start left-[23%] top-[10%] w-[46%]">
              <div className="flex flex-col items-start justify-start w-[59%] md:w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                  size="txtInterExtraBold42"
                >
                  Markets Overview
                </Text>
                <div className="flex flex-row gap-1.5 items-start justify-start mt-1 w-auto">
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
              <div className="bg-blue_gray-50_99 flex flex-col items-center justify-start p-1.5 rounded-[10px] w-full">
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

export default TradingMarketv2Page;
