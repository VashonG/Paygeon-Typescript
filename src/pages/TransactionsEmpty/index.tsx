import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import AccountsEmptyButtonsicon from "components/AccountsEmptyButtonsicon";
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

const TransactionsEmptyPage: React.FC = () => {
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
          src="images/img_notification.svg"
          alt="notification_Three"
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

  return (
    <>
      <div className="bg-white-A700 flex font-inter h-[1020px] justify-end mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <AccountsEmptyButtonsicon
          className="flex flex-col h-full items-center justify-start mb-[182px] ml-auto mr-[506px] mt-auto p-1 md:px-5 w-[12%]"
          lable="Transfer your funds"
        />
        <div className="absolute h-[1020px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[83%]">
            <div className="flex flex-col md:gap-10 gap-[416px] items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[103px] items-center justify-start w-full">
                <InvoicesV2Navigationweb
                  className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full"
                  title="Transactions"
                />
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
              </div>
              <div className="flex flex-col items-center justify-start pr-0.5 pt-0.5">
                <Text
                  className="mt-0.5 sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                  size="txtInterExtraBold42"
                >
                  Make a payment
                </Text>
                <Text
                  className="leading-[21.00px] mt-1 text-center text-gray-600 text-sm"
                  size="txtInterRegular14Gray600"
                >
                  <>
                    Start spending your funds and get detailed
                    <br />
                    list of transactions for each account
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col items-center justify-start left-[23%] pr-0.5 pt-0.5 top-[10%] w-[16%]">
            <div className="flex flex-row gap-5 items-center justify-between w-full">
              <div className="bg-white-A700 flex flex-col h-[41px] items-center justify-start my-[5px] w-[41px]">
                <Img
                  className="h-[41px] md:h-auto rounded-[50%] w-[41px]"
                  src="images/img_img_41x41.png"
                  alt="img_One"
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
          <Img
            className="absolute h-[260px] right-[34%] top-[34%]"
            src="images/img_undrawfinancialdatarep0fl.svg"
            alt="undrawfinancial"
          />
        </div>
      </div>
    </>
  );
};

export default TransactionsEmptyPage;
