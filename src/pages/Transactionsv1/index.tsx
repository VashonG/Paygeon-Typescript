import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import AccountsDetailsColumn from "components/AccountsDetailsColumn";
import Footer from "components/Footer";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Transactionsv1Page: React.FC = () => {
  const accountsDetailsColumnPropList = [
    {},
    {
      transactiondate: "28 Aug, 2:15 AM",
      transactionname: "ATM Cash withdrawal",
      transactionprice: "- $201.50",
    },
    {
      transactiondate: "28 Aug, 5:40 PM",
      transactionname: "Online purchase on Amazon.com",
      transactionprice: "- $184.00",
    },
  ];
  const accountsDetailsColumnPropList1 = [
    {
      transactiondate: "24 Aug, 6:20 PM",
      transactionname: "Income payment for projects",
      transactionprice: "+ $3.000,00",
    },
    {
      transactiondate: "24 Aug, 1:00 AM",
      transactionname: "Groceries store",
      transactionprice: "- $400.00",
    },
    {
      transactiondate: "24 Aug, 1:00 AM",
      transactionname: "Monthly home rent ",
      transactionprice: "- $400.00",
    },
    { transactionprice: "- $396.00", transactiondate: "19 Aug, 3:10 PM" },
    {
      transactiondate: "19 Aug, 4:20 AM",
      transactionname: "IOfinance UI kit purchase",
      transactionprice: "- $28.00",
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
          src="images/img_notification.svg"
          alt="notification_Two"
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
  const [searchonevalue, setSearchonevalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1020px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="absolute h-[1020px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="h-[1020px] m-auto w-full">
            <div className="absolute bottom-[9%] flex flex-col items-center justify-start right-[0] w-[83%]">
              <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[87%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                        <InvoicesV2Buttonsicon
                          className="flex flex-col items-center justify-start p-0.5 w-[19%] sm:w-full"
                          notificationimage="images/img_notification.svg"
                          notificationtext="Transfer"
                        />
                        <InvoicesV2Buttonsicon
                          className="flex flex-col items-center justify-start p-0.5 w-[30%] sm:w-full"
                          notificationimage="images/img_notification.svg"
                          notificationtext="Make a Payment"
                        />
                        <List
                          className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[42%] sm:w-full"
                          orientation="horizontal"
                        >
                          <InvoicesV2Buttonsicon
                            className="flex flex-col items-center justify-start p-[3px] w-full"
                            notificationimage="images/img_notification.svg"
                            notificationtext="Convert"
                          />
                          <InvoicesV2Buttonsicon
                            className="flex flex-col items-center justify-start p-0.5 w-full"
                            notificationimage="images/img_notification.svg"
                            notificationtext="Request"
                          />
                        </List>
                      </div>
                      <div className="flex flex-row gap-6 items-start justify-end w-auto">
                        <InvoicesV2Buttonsicon
                          className="flex flex-col items-center justify-start w-[36%]"
                          notificationimage="images/img_search.svg"
                          notificationtext="Search"
                        />
                        <InvoicesV2Buttonsicon
                          className="flex flex-col items-center justify-start py-[15px] w-[54%]"
                          notificationimage="images/img_calendar.svg"
                          notificationtext="August 2022"
                        />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100_90 h-px w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start pt-[3px] w-[87%] md:w-full">
                    <Text
                      className="text-gray-600 text-sm"
                      size="txtInterRegular14Gray600"
                    >
                      28 August
                    </Text>
                    <List
                      className="flex flex-col gap-1.5 items-center w-full"
                      orientation="vertical"
                    >
                      {accountsDetailsColumnPropList.map((props, index) => (
                        <React.Fragment key={`AccountsDetailsColumn${index}`}>
                          <AccountsDetailsColumn
                            className="flex flex-1 flex-col items-center justify-start pt-[3px] w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
                  </div>
                  <div className="md:h-[368px] h-[405px] relative w-full">
                    <div className="absolute flex flex-col gap-3.5 inset-x-[0] items-start justify-start mx-auto pt-[3px] top-[0] w-[87%]">
                      <Text
                        className="text-gray-600 text-sm"
                        size="txtInterRegular14Gray600"
                      >
                        24 August
                      </Text>
                      <List
                        className="flex flex-col gap-1.5 items-center w-full"
                        orientation="vertical"
                      >
                        {accountsDetailsColumnPropList1.map((props, index) => (
                          <React.Fragment key={`AccountsDetailsColumn${index}`}>
                            <AccountsDetailsColumn
                              className="flex flex-1 flex-col items-center justify-start pt-[3px] w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ))}
                      </List>
                    </div>
                    <div className="absolute bg-gradient  bottom-[0] h-[135px] inset-x-[0] mx-auto w-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col items-center justify-start left-[23%] pr-0.5 pt-0.5 top-[10%] w-[16%]">
              <div className="flex flex-row gap-5 items-center justify-between w-full">
                <div className="bg-white-A700 flex flex-col h-[41px] items-center justify-start my-[5px] w-[41px]">
                  <Img
                    className="h-[41px] md:h-auto rounded-[50%] w-[41px]"
                    src="images/img_img_41x41.png"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start">
                  <Text
                    className="ml-0.5 md:ml-[0] text-gray-600 text-sm"
                    size="txtInterRegular14Gray600"
                  >
                    Account **** 7890
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterExtraBold24Black900"
                  >
                    $120,420.50
                  </Text>
                </div>
              </div>
            </div>
            <Sidebar2 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]" />
          </div>
          <InvoicesV2Navigationweb
            className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 right-[0] top-[0] w-[83%]"
            title="Transactions"
          />
        </div>
      </div>
    </>
  );
};

export default Transactionsv1Page;
