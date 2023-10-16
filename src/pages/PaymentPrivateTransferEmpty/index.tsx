import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import AccountsEmptyButtonsicon from "components/AccountsEmptyButtonsicon";
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

const PaymentPrivateTransferEmptyPage: React.FC = () => {
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
          alt="notification_Two"
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
        <div className="flex flex-col gap-[38px] h-full items-center justify-start ml-auto mr-[79px] mt-[90px] md:px-5 w-[72%]">
          <div className="flex flex-col md:gap-10 gap-[452px] items-center justify-start w-full">
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
            <div className="flex flex-col gap-2 items-center justify-start">
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center"
                size="txtInterExtraBold42"
              >
                Add new contact
              </Text>
              <Text
                className="leading-[21.00px] text-center text-gray-600 text-sm"
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
          <AccountsEmptyButtonsicon
            className="flex flex-col items-center justify-start p-2.5 w-[17%] md:w-full"
            lable="Add new contact"
          />
        </div>
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar4 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]" />
          <InvoicesV2Navigationweb
            className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-10px] p-5 w-[83%] z-[1]"
            title="Payment"
          />
          <Img
            className="h-[263px] ml-[undefinedpx] mr-[457px] mt-[280px] z-[1]"
            src="images/img_undrawprojectionsreulc6.svg"
            alt="undrawprojectio"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentPrivateTransferEmptyPage;
