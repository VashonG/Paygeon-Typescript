import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import AccountsV1Accountweb from "components/AccountsV1Accountweb";
import AccountsV1Accountweb1 from "components/AccountsV1Accountweb1";
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

const Accountsv1Page: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_icon.svg"
          alt="icon_One"
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
          alt="icon_Two"
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
          alt="icon_Three"
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
          alt="icon_Four"
        />
      ),
      label: "Invoicing",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_icon.svg"
          alt="icon_Five"
        />
      ),
      label: "Trading",
      href: "/tradingmarketv1",
      active: window.location.pathname === "/tradingmarketv1",
    },
    {
      icon: (
        <Img className="h-[22px]" src="images/img_icon.svg" alt="icon_Six" />
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
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 flex-col items-start justify-start w-[27%] sm:w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                  size="txtInterExtraBold42"
                >
                  $120,420.50
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start mt-1 w-[90%] md:w-full">
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
                    USD
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
          <div className="flex flex-col items-start justify-start mt-[45px] pt-[3px] w-full">
            <Text
              className="text-gray-600 text-sm"
              size="txtInterRegular14Gray600"
            >
              Payment accounts
            </Text>
            <Input
              name="accountweb"
              placeholder=""
              className="p-0 sm:pl-5 w-full"
              wrapClassName="bg-white-A700 border border-blue_gray-100_b2 border-solid flex mt-3.5 pl-6 pr-5 py-[17px] rounded-lg w-full"
              prefix={
                <Img
                  className="h-6 mr-[35px] rounded-[12px] my-[11px]"
                  src="images/img_img_24x24.png"
                  alt="img"
                />
              }
              suffix={
                <Img
                  className="h-[46px] ml-[35px] my-auto"
                  src="images/img_notification.svg"
                  alt="notification"
                />
              }
            ></Input>
            <AccountsV1Accountweb
              className="border border-blue_gray-100_b2 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end mt-2.5 p-4 rounded-lg w-full"
              userimage="images/img_img_3.png"
            />
            <AccountsV1Accountweb
              className="border border-blue_gray-100_b2 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end mt-2.5 p-4 rounded-lg w-full"
              accountnumber="8210 **** **** 4990"
              currency="GBP"
              accountbalance="£230,50"
              blockedamount="£60,00"
            />
          </div>
          <div className="flex flex-col gap-3.5 items-start justify-start mt-6 pt-[3px] w-full">
            <Text
              className="text-gray-600 text-sm"
              size="txtInterRegular14Gray600"
            >
              Open deposits
            </Text>
            <Input
              name="accountweb_One"
              placeholder=""
              className="p-0 sm:pl-5 w-full"
              wrapClassName="border border-blue_gray-100_b2 border-solid flex pl-[26px] pr-5 py-[17px] rounded-lg w-full"
              prefix={
                <div className="h-5 mr-[35px] w-5 bg-gray-600 my-[13px]">
                  <Img
                    className="h-5 my-auto"
                    src="images/img_icon.svg"
                    alt="Icon"
                  />
                </div>
              }
              suffix={
                <Img
                  className="h-[46px] ml-[35px] my-auto"
                  src="images/img_notification.svg"
                  alt="notification"
                />
              }
            ></Input>
          </div>
          <div className="flex flex-col items-start justify-start mt-6 pt-0.5 w-full">
            <Text
              className="text-gray-600 text-sm"
              size="txtInterRegular14Gray600"
            >
              Your credits
            </Text>
            <Input
              name="accountweb_Two"
              placeholder=""
              className="p-0 sm:pl-5 w-full"
              wrapClassName="border border-blue_gray-100_b2 border-solid flex mt-[15px] pl-[26px] pr-5 py-[17px] rounded-lg w-full"
              prefix={
                <div className="h-5 mr-[35px] w-5 bg-gray-600 my-[13px]">
                  <Img
                    className="h-5 my-auto"
                    src="images/img_icon.svg"
                    alt="Icon"
                  />
                </div>
              }
              suffix={
                <Img
                  className="h-[46px] ml-[35px] my-auto"
                  src="images/img_notification.svg"
                  alt="notification"
                />
              }
            ></Input>
            <AccountsV1Accountweb1 className="border border-blue_gray-100_b2 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end mt-2.5 p-4 rounded-lg w-full" />
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

export default Accountsv1Page;
