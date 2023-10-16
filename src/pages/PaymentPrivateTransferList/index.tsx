import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import PaymentPrivateTransferListTransfersweb from "components/PaymentPrivateTransferListTransfersweb";
import PaymentPrivateTransferListTransfersweb1 from "components/PaymentPrivateTransferListTransfersweb1";
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

const PaymentPrivateTransferListPage: React.FC = () => {
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
          alt="creditcard_One"
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
          alt="notification_Nine"
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
        <div className="flex flex-col h-full items-start justify-start ml-auto mr-[79px] mt-[170px] pt-[3px] md:px-5 w-[72%]">
          <Text
            className="text-gray-600 text-sm"
            size="txtInterRegular14Gray600"
          >
            Payment accounts
          </Text>
          <Input
            name="transfersweb"
            placeholder=""
            className="p-0 sm:pl-5 w-full"
            wrapClassName="border border-blue_gray-100_b2 border-solid flex mt-3.5 pl-[35px] pr-5 py-[9px] rounded-lg w-full"
            prefix={
              <Img
                className="mt-3.5 mb-[13px] h-[18px] mr-[35px] rounded-[9px]"
                src="images/img_img_18x18.png"
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
          <PaymentPrivateTransferListTransfersweb className="border border-blue_gray-100_b2 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end mt-1.5 p-[9px] rounded-lg w-full" />
        </div>
        <div className="absolute h-[1000px] md:h-[1108px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="h-[1000px] md:h-[1108px] m-auto w-full">
            <div className="absolute bottom-[9%] flex flex-col gap-1.5 items-center justify-start pt-[3px] right-[0] w-[83%]">
              <div className="flex flex-col items-start justify-start w-[87%] md:w-full">
                <Text
                  className="text-gray-600 text-sm"
                  size="txtInterRegular14Gray600"
                >
                  Your recipients
                </Text>
                <Input
                  name="transfersweb_One"
                  placeholder=""
                  className="p-0 sm:pl-5 w-full"
                  wrapClassName="border border-blue_gray-100_b2 border-solid flex mt-3.5 pl-[35px] pr-5 py-[9px] rounded-lg w-full"
                  prefix={
                    <Img
                      className="mt-3.5 mb-[13px] h-[18px] mr-[35px] rounded-[9px]"
                      src="images/img_img_18x18.png"
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
                <PaymentPrivateTransferListTransfersweb1
                  className="border border-blue_gray-100_b2 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end mt-1.5 p-[9px] rounded-lg w-full"
                  buttonslogo="images/img_img_12.png"
                />
                <PaymentPrivateTransferListTransfersweb1
                  className="border border-blue_gray-100_b2 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end mt-1.5 p-[9px] rounded-lg w-full"
                  username="Alicia Puma"
                  currency="EUR"
                  accountnumber="**** 5600"
                />
                <PaymentPrivateTransferListTransfersweb1
                  className="border border-blue_gray-100_b2 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end mt-1.5 p-[9px] rounded-lg w-full"
                  username="Nonkosi Joyi"
                  currency="USD"
                  accountnumber="**** 8390"
                />
                <PaymentPrivateTransferListTransfersweb1
                  className="border border-blue_gray-100_b2 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end mt-1.5 p-[9px] rounded-lg w-full"
                  username="Evelyn Allen"
                  currency="CAD"
                  accountnumber="**** 3245"
                />
              </div>
              <div className="flex sm:h-[135px] h-[164px] md:h-[220px] justify-end relative w-full">
                <PaymentPrivateTransferListTransfersweb1
                  className="absolute border border-blue_gray-100_b2 border-solid flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end mx-auto p-[9px] rounded-lg top-[0] w-[87%]"
                  username="Justine Marshall"
                  currency="AUD"
                  accountnumber="**** 8009"
                />
                <PaymentPrivateTransferListTransfersweb1
                  className="border border-blue_gray-100_b2 border-solid flex md:flex-col flex-row md:gap-5 h-full items-center justify-end mb-[30px] mt-auto mx-auto p-[9px] rounded-lg w-[87%]"
                  username="Yi Chun-Hwa"
                  currency="USD"
                  accountnumber="**** 1564"
                />
                <div className="absolute bg-gradient  bottom-[0] h-[135px] inset-x-[0] mx-auto w-full"></div>
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-10 items-center justify-between right-[5%] top-[9%] w-[72%]">
              <div className="bg-blue_gray-50_99 flex flex-col items-center justify-start md:mt-0 my-0.5 p-1.5 rounded-[10px] w-[38%] md:w-full">
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
            <Sidebar4 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]" />
          </div>
          <InvoicesV2Navigationweb
            className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-5 right-[0] top-[0] w-[83%]"
            title="Payment"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentPrivateTransferListPage;
