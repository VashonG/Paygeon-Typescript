import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import AccountsDetailsColumn from "components/AccountsDetailsColumn";
import AccountsDetailsColumnmeshgradient from "components/AccountsDetailsColumnmeshgradient";
import Footer from "components/Footer";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import PageWBackIconOnLightNavigationweb from "components/PageWBackIconOnLightNavigationweb";
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

const AccountsDetailsPage: React.FC = () => {
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
          src="images/img_inbox_black_900.svg"
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
        <Img className="h-[22px]" src="images/img_icon.svg" alt="icon_Five" />
      ),
      label: "Reports",
      href: "/reportsv1",
      active: window.location.pathname === "/reportsv1",
    },
  ];
  const [searchvalue, setSearchvalue] = React.useState<string>("");
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

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1020px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar2 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]" />
          <PageWBackIconOnLightNavigationweb
            className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-10px] p-5 w-[83%] z-[1]"
            titletext="Account Details"
          />
          <div className="flex flex-col gap-6 items-center justify-start mb-[87px] ml-[-10px] mt-auto w-[48%] z-[1]">
            <div className="flex flex-col gap-3.5 items-start justify-start pt-[3px] w-[74%] md:w-full">
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
            <div className="md:h-[368px] h-[377px] relative w-full">
              <div className="absolute flex flex-col gap-3.5 h-max inset-[0] items-start justify-center m-auto pt-[3px] w-[74%]">
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
              <div className="absolute bg-gradient  bottom-[0] h-[177px] inset-x-[0] mx-auto w-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-[37px] items-center justify-start mb-[200px] ml-[undefinedpx] mr-20 mt-auto w-[29%] z-[1]">
            <div className="flex flex-col gap-[23px] items-start justify-start w-full">
              <Text
                className="text-gray-600 text-sm"
                size="txtInterRegular14Gray600"
              >
                Linked Card
              </Text>
              <AccountsDetailsColumnmeshgradient className="bg-blue_gray-50_b2 flex flex-col items-center justify-start p-6 sm:px-5 rounded-lg w-full" />
            </div>
            <div className="flex flex-col gap-[23px] items-start justify-start pt-0.5 w-full">
              <Text
                className="text-gray-600 text-sm"
                size="txtInterRegular14Gray600"
              >
                Account Details
              </Text>
              <div className="flex flex-col items-center justify-start outline outline-[0.5px] outline-blue_gray-100_b2 p-6 sm:px-5 rounded-lg w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start mb-[7px] w-auto">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Account name
                    </Text>
                    <Text
                      className="text-black-900 text-right text-sm"
                      size="txtInterBold14"
                    >
                      Premium Account
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-100_90 h-0.5 w-full" />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Account number
                    </Text>
                    <Text
                      className="text-black-900 text-right text-sm"
                      size="txtInterBold14"
                    >
                      UK64CT0000010034567
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-100_90 h-0.5 w-full" />
                  <div className="flex flex-row items-start justify-between pt-[3px] w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Account type
                    </Text>
                    <Text
                      className="text-black-900 text-right text-sm"
                      size="txtInterBold14"
                    >
                      Single Currency
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-100_90 h-0.5 w-full" />
                  <div className="flex flex-row items-start justify-between pt-0.5 w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Bonus programm
                    </Text>
                    <Text
                      className="text-black-900 text-right text-sm"
                      size="txtInterBold14"
                    >
                      Premium
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-100_90 h-0.5 w-full" />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Insurance
                    </Text>
                    <Text
                      className="text-black-900 text-right text-sm"
                      size="txtInterBold14"
                    >
                      Enabled
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start ml-[-10px] mt-[215px] w-[83%] z-[1]">
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
          <div className="flex flex-col items-start justify-end ml-[undefinedpx] mt-[105px] z-[1]">
            <Text
              className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
              size="txtInterExtraBold42"
            >
              $120,420.50
            </Text>
            <Text
              className="mt-1 text-gray-600 text-sm"
              size="txtInterRegular14Gray600"
            >
              Account **** 4567
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsDetailsPage;
