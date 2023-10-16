import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import Footer from "components/Footer";
import InvoicesV1Invoicesweb from "components/InvoicesV1Invoicesweb";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import Sidebar5 from "components/Sidebar5";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];
type Table2RowType = {
  rowlableone: string;
  rowlabletwo: string;
  rowlablethree: string;
  rowlablefour: string;
  rowlablefive: string;
};

const Invoicesv1Page: React.FC = () => {
  const table2Data = React.useRef<Table2RowType[]>([
    {
      rowlableone: "Apple Inc.",
      rowlabletwo: "Inv 001",
      rowlablethree: "$1.140,00",
      rowlablefour: "28 Dec 2022",
      rowlablefive: "images/img_notification.svg",
    },
    {
      rowlableone: "Amazon Inc.",
      rowlabletwo: "Inv 002",
      rowlablethree: "$4.540,00",
      rowlablefour: "18 May 2022",
      rowlablefive: "images/img_notification.svg",
    },
    {
      rowlableone: "Dropbox Inc.",
      rowlabletwo: "Inv 003",
      rowlablethree: "$10.550,00",
      rowlablefour: "20 Dec 2022",
      rowlablefive: "images/img_notification.svg",
    },
    {
      rowlableone: "Apple Inc.",
      rowlabletwo: "Inv 004",
      rowlablethree: "$1.810,00",
      rowlablefour: "02 Sep 2022",
      rowlablefive: "images/img_notification.svg",
    },
    {
      rowlableone: "Youtube Inc.",
      rowlabletwo: "Inv 005",
      rowlablethree: "$25.530,00",
      rowlablefour: "05 Oct  2022",
      rowlablefive: "images/img_notification.svg",
    },
  ]);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper<Table2RowType>();
    return [
      table2ColumnHelper.accessor("rowlableone", {
        cell: (info) => (
          <div className="flex flex-row gap-[34px] items-center justify-start p-2">
            <Img
              className="h-5 ml-5 w-5"
              src="images/img_icon.svg"
              alt="icon"
            />
            <div className="flex flex-col gap-[5px] items-start justify-start mt-[17px] w-auto">
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtInterBold14"
              >
                Invoice for UI design
              </Text>
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtInterRegular14Gray600"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-start min-w-[413px] pr-4 py-4">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              Name
            </Text>
            <Img
              className="h-[18px] w-[9px]"
              src="images/img_notification.svg"
              alt="notification_Two"
            />
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowlabletwo", {
        cell: (info) => (
          <Text
            className="pb-[22px] pt-[35px] text-black-900 text-sm"
            size="txtInterRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-start min-w-[126px] p-4">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              id
            </Text>
            <Img
              className="h-[18px] w-[9px]"
              src="images/img_notification.svg"
              alt="notification_Three"
            />
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowlablethree", {
        cell: (info) => (
          <Text
            className="pb-[21px] pl-3.5 pt-[35px] text-black-900 text-right text-sm"
            size="txtInterBold14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-end min-w-[149px] p-3">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              Amount
            </Text>
            <Img
              className="h-[18px] my-1 w-[9px]"
              src="images/img_notification.svg"
              alt="notification_Four"
            />
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowlablefour", {
        cell: (info) => (
          <Text
            className="pb-[22px] pt-[35px] text-black-900 text-right text-sm"
            size="txtInterRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-end min-w-[155px] p-[11px]">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              Due date
            </Text>
            <Img
              className="h-[18px] my-[5px] w-[9px]"
              src="images/img_notification.svg"
              alt="notification_Five"
            />
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowlablefive", {
        cell: (info) => (
          <div className="flex flex-row gap-3.5 items-start justify-center pr-2 py-2">
            <Button className="bg-green-A700 cursor-pointer font-bold mb-[5px] min-w-[104px] mt-[23px] py-2.5 rounded-lg text-center text-green-A700 text-xs">
              Paid
            </Button>
            <Img
              className="h-[46px] mr-[11px] mt-[18px] w-[46px]"
              alt="notification_Seven"
              src="info?.getValue()"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-center min-w-[184px] p-0.5">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtInterBold14"
            >
              Status
            </Text>
            <Img
              className="h-[18px] my-3.5 w-[9px]"
              src="images/img_notification.svg"
              alt="notification_Six"
            />
          </div>
        ),
      }),
    ];
  }, []);

  const [searchvalue, setSearchvalue] = React.useState<string>("");
  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_icon.svg"
          alt="icon_Seven"
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
          alt="icon_Eight"
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
          alt="icon_Nine"
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
          src="images/img_notification.svg"
          alt="notification_Fourteen"
        />
      ),
      label: "Invoicing",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_icon.svg"
          alt="icon_Ten"
        />
      ),
      label: "Trading",
      href: "/tradingmarketv1",
      active: window.location.pathname === "/tradingmarketv1",
    },
    {
      icon: (
        <Img className="h-[22px]" src="images/img_icon.svg" alt="icon_Eleven" />
      ),
      label: "Reports",
      href: "/reportsv1",
      active: window.location.pathname === "/reportsv1",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-inter h-[960px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="absolute md:h-[1187px] h-[960px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[83%]">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                <InvoicesV2Navigationweb className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full" />
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[87%] md:w-full">
                  <div className="bg-blue_gray-50_99 flex flex-col items-center justify-start sm:mt-0 my-0.5 p-1.5 rounded-[10px] w-[31%] sm:w-full">
                    <div className="flex flex-row items-start justify-start w-auto">
                      <Button className="bg-black-900 cursor-pointer font-bold min-w-[56px] py-2.5 rounded-lg text-center text-white-A700 text-xs">
                        All
                      </Button>
                      <div className="flex flex-col items-center justify-start p-[9px]">
                        <Text
                          className="text-black-900 text-center text-xs"
                          size="txtInterBold12"
                        >
                          Paid
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[9px]">
                        <Text
                          className="text-black-900 text-center text-xs"
                          size="txtInterBold12"
                        >
                          Unpaid
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end p-[9px]">
                        <Text
                          className="text-black-900 text-center text-xs"
                          size="txtInterBold12"
                        >
                          Rejected
                        </Text>
                      </div>
                    </div>
                  </div>
                  <InvoicesV2Buttonsicon
                    className="flex flex-col items-center justify-start p-1 w-[15%] sm:w-full"
                    notificationimage="images/img_notification.svg"
                    notificationtext="Add new invoice"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="overflow-auto w-[87%]">
                  <ReactTable
                    columns={table2Columns}
                    data={table2Data.current}
                    rowClass={""}
                    headerClass=""
                  />
                </div>
                <div className="sm:h-20 h-[188px] md:h-[347px] pb-[18px] px-[18px] relative w-full">
                  <InvoicesV1Invoicesweb className="absolute border border-blue_gray-100_b2 border-solid flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end mx-auto p-4 rounded-lg top-[0] w-[87%]" />
                  <InvoicesV1Invoicesweb
                    className="absolute border border-blue_gray-100_b2 border-solid bottom-[10%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end mx-auto p-4 rounded-lg w-[87%]"
                    invoicetext="Invoice for online advertising"
                    accounttitle="Google Inc."
                    invcounter="Inv 007"
                    price="$1.790,00"
                    language="18 Aug 2022"
                  />
                </div>
              </div>
            </div>
          </div>
          <Sidebar5 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]" />
        </div>
      </div>
    </>
  );
};

export default Invoicesv1Page;
