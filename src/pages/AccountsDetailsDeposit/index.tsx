import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import AccountsDetailsColumn from "components/AccountsDetailsColumn";
import AccountsDetailsDepositColumnThree from "components/AccountsDetailsDepositColumnThree";
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

const AccountsDetailsDepositPage: React.FC = () => {
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

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1020px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar2 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]" />
          <PageWBackIconOnLightNavigationweb
            className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-10px] p-5 w-[83%] z-[1]"
            titletext="Deposit Account Details"
          />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[87px] ml-[undefinedpx] mr-20 mt-auto w-[72%] z-[1]">
            <div className="flex flex-col gap-1.5 items-center justify-start pt-[3px] w-[51%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
                <Text
                  className="text-gray-600 text-sm"
                  size="txtInterRegular14Gray600"
                >
                  28 August, 2022
                </Text>
                <List
                  className="flex flex-col gap-1.5 items-center mt-3.5 w-full"
                  orientation="vertical"
                >
                  <AccountsDetailsColumn
                    className="flex flex-1 flex-col items-center justify-start pt-[3px] w-full"
                    transactionname="Deposit opening"
                    transactiondate="28 Aug, 2:15 AM"
                    transactionprice="$20,800.00"
                  />
                  <AccountsDetailsColumn
                    className="flex flex-1 flex-col items-center justify-start pt-[3px] w-full"
                    transactionname="Balance top-up"
                    transactiondate="28 Aug, 2:15 AM"
                    transactionprice="+$950.00"
                  />
                </List>
                <Text
                  className="mt-[27px] text-gray-600 text-sm"
                  size="txtInterRegular14Gray600"
                >
                  29 August, 2022
                </Text>
                <AccountsDetailsColumn
                  className="flex flex-col items-center justify-start mt-3.5 pt-[3px] w-full"
                  transactionname="Balance top-up"
                  transactiondate="29 Aug, 6:20 PM"
                  transactionprice="+ $2.350,50"
                />
                <Text
                  className="mt-[27px] text-gray-600 text-sm"
                  size="txtInterRegular14Gray600"
                >
                  30 August, 2022
                </Text>
                <AccountsDetailsColumn
                  className="flex flex-col items-center justify-start mt-3.5 pt-[3px] w-full"
                  transactionname="Income payment for projects"
                  transactiondate="30 Aug, 5:30 PM"
                  transactionprice="+ $1.850,00"
                />
                <Text
                  className="mt-[27px] text-gray-600 text-sm"
                  size="txtInterRegular14Gray600"
                >
                  2 September, 2022
                </Text>
              </div>
              <div className="h-[177px] relative w-full">
                <List
                  className="flex flex-col gap-1.5 items-center mt-[9px] mx-auto w-[96%]"
                  orientation="vertical"
                >
                  <AccountsDetailsColumn
                    className="flex flex-col items-center justify-start pt-[3px] w-full"
                    transactionname="Income payment for projects"
                    transactiondate="2 Sep, 6:20 PM"
                    transactionprice="+ $900.00"
                  />
                  <AccountsDetailsColumn
                    className="flex flex-col items-center justify-start pt-[3px] w-full"
                    transactionname="Income payment for projects"
                    transactiondate="2 Sep, 9:40 PM"
                    transactionprice="+ $3.000,00"
                  />
                </List>
                <div className="absolute bg-gradient  h-[177px] inset-[0] justify-center m-auto w-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-[37px] items-center justify-start md:mt-0 mt-0.5 w-2/5 md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="text-gray-600 text-sm"
                  size="txtInterRegular14Gray600"
                >
                  Overview
                </Text>
                <AccountsDetailsDepositColumnThree className="border border-blue_gray-100_b2 border-solid flex flex-col items-center justify-start p-[17px] rounded-[12px] w-full" />
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start pt-[3px] w-full">
                <Text
                  className="text-gray-600 text-sm"
                  size="txtInterRegular14Gray600"
                >
                  Deposit Details
                </Text>
                <div className="flex flex-col items-center justify-start outline outline-[0.5px] outline-blue_gray-100_90 p-6 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-center w-auto">
                    <div className="flex flex-row items-start justify-between pt-0.5 w-full">
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
                        Cumulative deposit
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
                        UK64CT0000010034056
                      </Text>
                    </div>
                    <Line className="bg-blue_gray-100_90 h-0.5 w-full" />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtInterRegular14"
                      >
                        Rate
                      </Text>
                      <Text
                        className="text-black-900 text-right text-sm"
                        size="txtInterBold14"
                      >
                        2.00%
                      </Text>
                    </div>
                    <Line className="bg-blue_gray-100_90 h-0.5 w-full" />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtInterRegular14"
                      >
                        Start date
                      </Text>
                      <Text
                        className="text-black-900 text-right text-sm"
                        size="txtInterBold14"
                      >
                        20.06.2022
                      </Text>
                    </div>
                    <Line className="bg-blue_gray-100_90 h-0.5 w-full" />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtInterRegular14"
                      >
                        End date
                      </Text>
                      <Text
                        className="text-black-900 text-right text-sm"
                        size="txtInterBold14"
                      >
                        20.06.2024
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start ml-[-10px] mt-[215px] w-[83%] z-[1]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[87%] md:w-full">
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <InvoicesV2Buttonsicon
                    className="flex flex-col items-center justify-start p-0.5 w-[35%]"
                    notificationimage="images/img_notification.svg"
                    notificationtext="Transfer"
                  />
                  <InvoicesV2Buttonsicon
                    className="flex flex-col items-center justify-start p-0.5 w-[56%]"
                    notificationimage="images/img_notification.svg"
                    notificationtext="Make a Payment"
                  />
                </div>
                <InvoicesV2Buttonsicon
                  className="flex flex-col items-center justify-start p-[3px] w-[16%] sm:w-full"
                  notificationimage="images/img_overflowmenu_black_900.svg"
                  notificationtext="Additional Actions"
                />
              </div>
              <Line className="bg-blue_gray-100_90 h-px w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-[5px] items-start justify-start ml-[undefinedpx] mt-[105px] pr-0.5 pt-0.5 z-[1]">
            <Text
              className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
              size="txtInterExtraBold42"
            >
              $48.140,00
            </Text>
            <Text
              className="text-gray-600 text-sm"
              size="txtInterRegular14Gray600"
            >
              Cumulative deposit
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsDetailsDepositPage;
