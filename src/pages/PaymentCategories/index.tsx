import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import PaymentCategoriesPaymentitemv from "components/PaymentCategoriesPaymentitemv";
import PaymentCategoriesPaymentitemv1 from "components/PaymentCategoriesPaymentitemv1";
import PaymentCategoriesPaymentitemv2 from "components/PaymentCategoriesPaymentitemv2";
import Sidebar3 from "components/Sidebar3";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const PaymentCategoriesPage: React.FC = () => {
  const paymentCategoriesPaymentitemv2PropList = [
    {
      category: (
        <>
          Top up your balance instantly <br />
          with operators
        </>
      ),
      title: "Mobile networks",
    },
    {},
    {
      category: (
        <>
          Check your home utility bills <br />
          and pay them instantly
        </>
      ),
      title: "Utilities",
    },
    {
      category: (
        <>
          Find Home Internet provider <br />
          in your area
        </>
      ),
      title: "Internet providers",
    },
    {
      category: (
        <>
          Pay for interests, make <br />a private transfers abroad
        </>
      ),
      title: "Financial services",
    },
    {
      category: (
        <>
          Purchase parking permit, <br />
          and pay for police fines
        </>
      ),
      title: "Parking and fines",
    },
    {
      category: (
        <>
          Check your online movies
          <br />
          and music subscriptions
        </>
      ),
      title: "Entertainment",
    },
    {
      category: "Search for various service providers in your city",
      title: "Other payments",
    },
  ];
  const paymentCategoriesPaymentitemvPropList = [
    {},
    { userprice: "-$10.480,00", username: "Money transfer to John Doe" },
    { userprice: "-$201.50", username: "ATM Cash withdrawal" },
    { userprice: "-$184.00", username: "Online purchase on Amazon.com" },
    { userprice: "-$114.20", username: "Income payment for projects" },
    { userprice: "-$400.00", username: "Monthly home rent " },
    { userprice: "-$540.00", username: "Provided services" },
    { userprice: "-$396.00", username: "Online purchase at Ebay.com" },
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
          alt="notification_Three"
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
      <div className="bg-white-A700 font-inter h-[968px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="flex flex-col gap-[27px] h-full items-center justify-start ml-auto mr-20 my-auto md:px-5 w-[72%]">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="bg-blue_gray-50_99 flex sm:flex-1 flex-row gap-1.5 items-center justify-start sm:mt-0 my-0.5 p-1.5 rounded-[10px] w-[38%] sm:w-full">
              <Button className="bg-black-900 cursor-pointer font-bold min-w-[128px] py-2.5 rounded-lg text-center text-white-A700 text-xs">
                Make a payment
              </Button>
              <div className="h-9 md:h-[33px] relative w-[63%]">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-[9px] right-[0]">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtInterBold12"
                  >
                    Exchange
                  </Text>
                </div>
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[9px]">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtInterBold12"
                  >
                    Private transfer
                  </Text>
                </div>
              </div>
            </div>
            <InvoicesV2Buttonsicon
              className="flex sm:flex-1 flex-col items-center justify-start py-[15px] w-[15%] sm:w-full"
              notificationimage="images/img_notification.svg"
              notificationtext="Add new template"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex flex-col gap-6 items-center justify-start">
              <div className="flex flex-col items-center justify-start pt-0.5 w-full">
                <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtInterExtraBold18Black900"
                  >
                    Payment options
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
                    <PaymentCategoriesPaymentitemv1 className="border border-blue_gray-100_b2 border-solid flex sm:flex-1 flex-col items-center justify-start p-[21px] sm:px-5 rounded-[10px] w-[48%] sm:w-full" />
                    <PaymentCategoriesPaymentitemv1
                      className="bg-white-A700 border border-blue_gray-100_b2 border-solid flex sm:flex-1 flex-col items-start justify-start p-[21px] sm:px-5 rounded-[10px] w-[48%] sm:w-full"
                      title="Pay for utilities"
                      contactscounter="98 service providers"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pt-0.5 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtInterExtraBold18Black900"
                  >
                    Service providers
                  </Text>
                  <div className="sm:gap-5 gap-6 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[17px] w-full">
                    {paymentCategoriesPaymentitemv2PropList.map(
                      (props, index) => (
                        <React.Fragment
                          key={`PaymentCategoriesPaymentitemv2${index}`}
                        >
                          <PaymentCategoriesPaymentitemv2
                            className="border border-blue_gray-100_b2 border-solid md:h-11 h-24 p-[17px] relative rounded-[10px] w-full"
                            img="images/img_notification.svg"
                            {...props}
                          />
                        </React.Fragment>
                      ),
                    )}
                  </div>
                  <InvoicesV2Buttonsicon
                    className="flex flex-col items-center justify-start mt-[11px] w-1/4 md:w-full"
                    notificationimage="images/img_overflowmenu_black_900.svg"
                    notificationtext="See all providers"
                  />
                </div>
              </div>
            </div>
            <Line className="bg-blue_gray-100_90 h-[676px] md:h-px mb-3.5 md:mt-0 mt-0.5 md:w-full w-px" />
            <div className="flex flex-col items-start justify-start pt-[3px]">
              <Text
                className="text-black-900 text-lg"
                size="txtInterExtraBold18Black900"
              >
                Recent payments
              </Text>
              <List
                className="flex flex-col gap-1.5 items-center mt-4 w-full"
                orientation="vertical"
              >
                {paymentCategoriesPaymentitemvPropList.map((props, index) => (
                  <React.Fragment key={`PaymentCategoriesPaymentitemv${index}`}>
                    <PaymentCategoriesPaymentitemv
                      className="border border-blue_gray-100_b2 border-solid flex flex-1 flex-col items-start justify-start p-[15px] rounded-lg w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
              <InvoicesV2Buttonsicon
                className="flex flex-col items-center justify-start mt-[13px] py-[15px] w-1/2 md:w-full"
                notificationimage="images/img_notification.svg"
                notificationtext="See all transactions"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar3 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]" />
          <InvoicesV2Navigationweb
            className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-10px] p-5 w-[83%] z-[1]"
            title="Payment"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentCategoriesPage;
