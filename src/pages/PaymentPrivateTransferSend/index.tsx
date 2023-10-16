import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import DashboardV1Elementwidget from "components/DashboardV1Elementwidget";
import Footer from "components/Footer";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import Sidebar4 from "components/Sidebar4";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];
type Table1RowType = {
  rowlabletwo: string;
  rowlablethree: string;
  rowlablefour: string;
};

const PaymentPrivateTransferSendPage: React.FC = () => {
  const table1Data = React.useRef<Table1RowType[]>([
    {
      rowlabletwo: "5 Aug 3:00 PM",
      rowlablethree: "Yong Tonghyon",
      rowlablefour: "$10.480,00",
    },
    {
      rowlabletwo: "6 Aug 2:15 AM",
      rowlablethree: "Lubomír Dvořák",
      rowlablefour: "$201.50",
    },
    {
      rowlabletwo: "7 Aug 5:40 PM",
      rowlablethree: "Sanne Viscaal",
      rowlablefour: "$184.00",
    },
    {
      rowlabletwo: "7 Aug 6:20 PM",
      rowlablethree: "Mathijn Agter",
      rowlablefour: "$3.000,00",
    },
    {
      rowlabletwo: "8 Aug 1:00 AM",
      rowlablethree: "Stormie Hansford",
      rowlablefour: "$400.00",
    },
    {
      rowlabletwo: "10 Aug 4:50 PM",
      rowlablethree: "Shirline Dungey",
      rowlablefour: "$11.400,00",
    },
    {
      rowlabletwo: "12 Aug 3:10 PM",
      rowlablethree: "Hu Guiying",
      rowlablefour: "$396.00",
    },
    {
      rowlabletwo: "14 Aug 4:20 AM",
      rowlablethree: "Carmen Beltrán",
      rowlablefour: "$28.00",
    },
    {
      rowlabletwo: "14 Aug 7:00 AM",
      rowlablethree: "Darius Cummings",
      rowlablefour: "$4.20",
    },
  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper<Table1RowType>();
    return [
      table1ColumnHelper.accessor("rowlabletwo", {
        cell: (info) => (
          <Text className="pb-3 pl-[3px] pt-[25px] text-gray-600 text-sm">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-start min-w-[129px] pr-4 py-4">
            <Text className="font-bold text-black-900 text-sm w-auto">
              Date
            </Text>
            <Img
              className="h-[18px] w-[9px]"
              src="images/img_notification.svg"
              alt="notification_Two"
            />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowlablethree", {
        cell: (info) => (
          <div className="flex flex-row gap-3.5 items-center justify-center p-[7px]">
            <div className="bg-blue_gray-50_01 flex flex-col h-8 items-center justify-start ml-[11px] mt-2 rounded-[50%] w-8">
              <Img
                className="h-8 md:h-auto rounded-[50%] w-8"
                src="images/img_pic_24.png"
                alt="pic"
              />
            </div>
            <Text className="mr-[70px] text-black-900 text-sm">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-center min-w-[245px] pr-4 py-4">
            <Text className="font-bold text-black-900 text-sm w-auto">
              Payment to
            </Text>
            <Img
              className="h-[18px] w-[9px]"
              src="images/img_notification.svg"
              alt="notification_Three"
            />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowlablefour", {
        cell: (info) => (
          <Text className="font-bold pb-[13px] pt-6 text-black-900 text-right text-sm">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-end min-w-[89px] p-1">
            <Text className="font-bold text-black-900 text-sm w-auto">
              Amount
            </Text>
            <Img
              className="h-[18px] my-3 w-[9px]"
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
          className="h-[21px] w-[22px]"
          src="images/img_notification.svg"
          alt="notification_Five"
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
      <div className="bg-white-A700 font-inter h-[1000px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="flex flex-col gap-[34px] h-full items-center justify-start ml-auto mr-[79px] my-auto md:px-5 w-[72%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="bg-blue_gray-50_99 flex md:flex-1 flex-col items-center justify-start md:mt-0 my-0.5 p-1.5 rounded-[10px] w-[38%] md:w-full">
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-end p-[9px]">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtInterBold12"
                  >
                    Make a payment
                  </Text>
                </div>
                <Button className="bg-black-900 cursor-pointer font-bold min-w-[130px] py-2.5 rounded-lg text-center text-white-A700 text-xs">
                  Private transfer
                </Button>
                <div className="flex flex-col items-center justify-end p-[9px]">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtInterBold12"
                  >
                    Exchange
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start justify-end w-auto">
              <InvoicesV2Buttonsicon
                className="flex flex-col items-center justify-start py-[15px] w-[46%]"
                notificationimage="images/img_notification.svg"
                notificationtext="Add new recipient"
              />
              <InvoicesV2Buttonsicon
                className="flex flex-col items-center justify-start p-[5px] w-[48%]"
                notificationimage="images/img_notification.svg"
                notificationtext="Add your account"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[137px] items-center justify-end outline outline-[1px] outline-blue_gray-100_b2 p-6 sm:px-5 rounded-[12px] w-[49%] md:w-full">
              <div className="flex flex-col items-center justify-start mt-[102px]">
                <Text
                  className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center"
                  size="txtInterExtraBold56"
                >
                  $148.50
                </Text>
                <Text
                  className="text-center text-gray-600 text-sm"
                  size="txtInterRegular14Gray600"
                >
                  1.5% ≈ $1.48 Fee
                </Text>
              </div>
              <div className="flex flex-col gap-7 items-center justify-start mb-1.5 w-full">
                <div className="bg-blue_gray-50_99 flex flex-col items-start justify-center p-1 rounded-[16px] w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end md:ml-[0] ml-[19px] mt-3.5 w-[96%] md:w-full">
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtInterMedium12"
                    >
                      Pay with
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[70px] text-black-900 text-sm"
                      size="txtInterBold14"
                    >
                      Card **** 4008
                    </Text>
                    <Img
                      className="h-[52px] ml-36 sm:ml-[0] w-[52px]"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <Line className="bg-blue_gray-100_90 h-px md:ml-[0] ml-[19px] mt-[11px] w-[91%]" />
                  <div className="flex flex-row gap-[74px] items-start justify-start md:ml-[0] ml-[19px] mt-7 w-[51%] md:w-full">
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtInterMedium12"
                    >
                      Send to
                    </Text>
                    <Text
                      className="mt-0.5 text-black-900 text-sm"
                      size="txtInterBold14"
                    >
                      Paulina Gayoso
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-100_90 h-px md:ml-[0] ml-[19px] mt-[26px] w-[91%]" />
                  <div className="flex flex-row gap-[91px] items-start justify-start mb-[33px] md:ml-[0] ml-[19px] mt-7 w-[56%] md:w-full">
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtInterMedium12"
                    >
                      Note
                    </Text>
                    <Text
                      className="mt-0.5 text-gray-600 text-sm"
                      size="txtInterRegular14Gray600"
                    >
                      Type to add a note
                    </Text>
                  </div>
                </div>
                <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[452px] sm:min-w-full py-[17px] rounded-lg text-center text-sm text-white-A700">
                  Continue Transfer
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
              <DashboardV1Elementwidget
                className="border border-blue_gray-100_b2 border-solid flex flex-col gap-1.5 items-center justify-start pb-0.5 rounded-[12px] w-full"
                title="Recent transfers"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar4 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]" />
          <InvoicesV2Navigationweb
            className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-10px] p-5 w-[83%] z-[1]"
            title="Payment"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentPrivateTransferSendPage;
