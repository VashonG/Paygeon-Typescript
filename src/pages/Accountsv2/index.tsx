import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import AccountsV2Accountweb from "components/AccountsV2Accountweb";
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

const Accountsv2Page: React.FC = () => {
  const accountsV2AccountwebPropList = [
    { userimage: "images/img_img_28x28.png" },
    {
      accountnumber: "8210 **** **** 4340",
      pricetwo: "€1,960.00",
      priceone: "€64.120,50",
      price: "EUR",
    },
    {
      accountnumber: "8210 **** **** 9490",
      pricetwo: "₺0.00",
      priceone: "₺1.560,00",
      price: "CHF",
    },
    {
      accountnumber: "8210 **** **** 4990",
      pricetwo: "£60.00",
      price: "GBP",
      accountnumberco: "On Hold",
      priceone: "£1.830,50",
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
        <div className="flex flex-col h-full items-center justify-start ml-auto mr-20 my-auto md:px-5 w-[72%]">
          <div className="flex flex-col items-center justify-end w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-0.5 w-full">
              <div className="flex sm:flex-1 flex-col items-start justify-start w-1/4 sm:w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                  size="txtInterExtraBold42"
                >
                  €114.158,63
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start mt-0.5 w-[96%] md:w-full">
                  <Text
                    className="text-gray-600 text-sm"
                    size="txtInterRegular14Gray600"
                  >
                    Total balance from all accounts
                  </Text>
                  <Text
                    className="text-blue-A700 text-sm"
                    size="txtInterBold14BlueA700"
                  >
                    EUR
                  </Text>
                </div>
              </div>
              <InvoicesV2Buttonsicon
                className="flex sm:flex-1 flex-col items-center justify-start p-1 w-[22%] sm:w-full"
                notificationimage="images/img_plus.svg"
                notificationtext="Open an account or deposit"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[45px] w-full">
            <div className="bg-blue_gray-50_99 flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-1.5 rounded-[10px] w-[63%] md:w-full">
              <Button className="bg-black-900 cursor-pointer font-bold min-w-[142px] ml-0.5 md:ml-[0] py-2.5 rounded-lg text-center text-white-A700 text-xs">
                Payment accounts
              </Button>
              <div className="flex flex-col items-center justify-start ml-3.5 md:ml-[0] p-0.5">
                <Text
                  className="my-2 text-black-900 text-center text-xs"
                  size="txtInterBold12"
                >
                  Cards
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-5 md:ml-[0] pl-0.5 py-0.5">
                <Text
                  className="my-2 text-black-900 text-center text-xs"
                  size="txtInterBold12"
                >
                  Open Deposits
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-5 md:ml-[0] p-0.5">
                <Text
                  className="my-2 text-black-900 text-center text-xs"
                  size="txtInterBold12"
                >
                  Your Credits
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-5 md:ml-[0]">
                <Text
                  className="my-[9px] text-black-900 text-center text-xs"
                  size="txtInterBold12"
                >
                  Crypto Assets
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-5 md:ml-[0] p-0.5">
                <Text
                  className="my-2 text-black-900 text-center text-xs"
                  size="txtInterBold12"
                >
                  Transactions
                </Text>
              </div>
            </div>
            <div className="bg-blue_gray-50_99 flex md:flex-1 flex-row items-center justify-end p-1.5 rounded-[10px] w-[14%] md:w-full">
              <Button className="bg-black-900 cursor-pointer font-bold min-w-[64px] py-2.5 rounded-lg text-center text-white-A700 text-xs">
                List
              </Button>
              <div className="flex flex-col items-center justify-start p-[9px]">
                <Text
                  className="text-black-900 text-center text-xs"
                  size="txtInterBold12"
                >
                  Grid
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-8 w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                {accountsV2AccountwebPropList.map((props, index) => (
                  <React.Fragment key={`AccountsV2Accountweb${index}`}>
                    <AccountsV2Accountweb
                      className="bg-white-A700 border border-blue_gray-100_b2 border-solid flex flex-1 flex-col items-center justify-end p-6 sm:px-5 rounded-[10px] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
              <AccountsV2Accountweb
                className="border border-blue_gray-100_b2 border-solid flex flex-col items-center justify-end p-[23px] sm:px-5 rounded-[10px] w-[49%] md:w-full"
                price="YUAN"
                accountnumber="3280 **** **** 3556"
                priceone="¥230,50"
                pricetwo="¥0.00"
                accountnumberco="Closed"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar2 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]" />
          <InvoicesV2Navigationweb
            className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-10px] p-5 w-[83%] z-[1]"
            title="Accounts"
          />
        </div>
      </div>
    </>
  );
};

export default Accountsv2Page;
