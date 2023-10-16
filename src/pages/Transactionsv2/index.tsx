import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import Sidebar2 from "components/Sidebar2";
import TransactionsV2Columnpic from "components/TransactionsV2Columnpic";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Transactionsv2Page: React.FC = () => {
  const transactionsV2ColumnpicPropList = [
    {},
    {
      transactionamount: "- €201.50",
      transactiontime: "28 Aug, 2:15 AM",
      transactiontype: "Cash",
      username: "ATM Cash withdrawal",
    },
    {
      transactionamount: "- €184.00",
      transactiontime: "28 Aug, 5:40 PM",
      transactiontype: "Online payment",
      username: "Online purchase on Amazon.com",
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
          alt="notification_One"
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
  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1020px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="flex flex-col gap-[45px] h-full items-center justify-start ml-auto mr-20 mt-[105px] md:px-5 w-[72%]">
          <div className="flex flex-col items-center justify-start pt-[3px] w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 flex-col items-center justify-start w-1/4 sm:w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                  size="txtInterExtraBold42"
                >
                  €114.158,63
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtInterRegular14Gray600"
                  >
                    Total balance from all accounts
                  </Text>
                  <Text
                    className="text-blue-A700 text-sm w-auto"
                    size="txtInterBold14BlueA700"
                  >
                    USD
                  </Text>
                </div>
              </div>
              <InvoicesV2Buttonsicon
                className="flex sm:flex-1 flex-col items-center justify-start py-2.5 w-[13%] sm:w-full"
                notificationimage="images/img_notification.svg"
                notificationtext="Export to CSV"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="bg-blue_gray-50_99 flex flex-col items-center justify-start p-1.5 rounded-[10px]">
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start p-[3px]">
                  <Text
                    className="my-[7px] text-black-900 text-center text-xs"
                    size="txtInterBold12"
                  >
                    Payment accounts
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start p-0.5">
                  <Text
                    className="my-2 text-black-900 text-center text-xs"
                    size="txtInterBold12"
                  >
                    Cards
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-0.5 py-0.5">
                  <Text
                    className="my-2 text-black-900 text-center text-xs"
                    size="txtInterBold12"
                  >
                    Open Deposits
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start p-0.5">
                  <Text
                    className="my-2 text-black-900 text-center text-xs"
                    size="txtInterBold12"
                  >
                    Your Credits
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="my-[9px] text-black-900 text-center text-xs"
                    size="txtInterBold12"
                  >
                    Crypto Assets
                  </Text>
                </div>
                <Button className="bg-black-900 cursor-pointer font-bold min-w-[106px] py-2.5 rounded-lg text-center text-white-A700 text-xs">
                  Transactions
                </Button>
              </div>
            </div>
            <Button
              className="bg-blue_gray-50_99 cursor-pointer flex items-center justify-center min-w-[194px] px-[19px] py-[13px] rounded-[10px]"
              leftIcon={
                <div className="h-[18px] mb-0.5 mr-2 w-[18px] bg-black-900">
                  <Img
                    className="h-[18px]"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                </div>
              }
            >
              <div className="font-bold text-black-900 text-left text-sm">
                Date: August 2022
              </div>
            </Button>
          </div>
        </div>
        <div className="absolute h-[1020px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="h-[1020px] m-auto w-full">
            <div className="absolute bottom-[8%] flex flex-col gap-6 items-center justify-start right-[0] w-[83%]">
              <div className="flex flex-col gap-6 items-center justify-start w-[87%] md:w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start pt-[3px] w-full">
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
                    {transactionsV2ColumnpicPropList.map((props, index) => (
                      <React.Fragment key={`TransactionsV2Columnpic${index}`}>
                        <TransactionsV2Columnpic
                          className="bg-white-A700 border border-blue_gray-100_b2 border-solid flex flex-1 flex-col items-center justify-start p-3 rounded-lg w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start pt-[3px] w-full">
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
                    <TransactionsV2Columnpic
                      className="border border-blue_gray-100_b2 border-solid flex flex-1 flex-col items-center justify-start p-3 rounded-lg w-full"
                      username="Income payment for projects"
                      transactionamount="+ €3.000,00"
                      transactiontime="24 Aug, 6:20 PM"
                    />
                    <TransactionsV2Columnpic
                      className="border border-blue_gray-100_b2 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-lg w-full"
                      username="Monthly home rent "
                      transactionamount="- €400.00"
                      transactiontime="24 Aug, 1:00 AM"
                    />
                  </List>
                </div>
              </div>
              <div className="sm:h-[158px] h-[188px] md:h-[270px] relative w-full">
                <div className="absolute flex flex-col gap-3.5 inset-x-[0] items-start justify-start mx-auto pt-[3px] top-[0] w-[87%]">
                  <Text
                    className="text-gray-600 text-sm"
                    size="txtInterRegular14Gray600"
                  >
                    19 August
                  </Text>
                  <List
                    className="flex flex-col gap-1.5 items-center w-full"
                    orientation="vertical"
                  >
                    <TransactionsV2Columnpic
                      className="border border-blue_gray-100_b2 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-lg w-full"
                      username="Online purchase at Ebay.com"
                      transactionamount="- €396.00"
                      transactiontype="Online payment"
                      transactiontime="19 Aug, 3:10 PM"
                    />
                    <TransactionsV2Columnpic
                      className="border border-blue_gray-100_b2 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-lg w-full"
                      username="IOfinance UI kit purchase"
                      transactionamount="- €28.00"
                      transactiontype="Online payment"
                      transactiontime="19 Aug, 4:20 AM"
                    />
                  </List>
                </div>
                <Img
                  className="absolute bottom-[0] h-[135px] inset-x-[0] mx-auto object-cover"
                  src="images/img_overlay.png"
                  alt="overlay"
                />
              </div>
            </div>
            <Sidebar2 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]" />
          </div>
          <InvoicesV2Navigationweb
            className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-5 right-[0] top-[0] w-[83%]"
            title="Accounts"
          />
        </div>
      </div>
    </>
  );
};

export default Transactionsv2Page;
