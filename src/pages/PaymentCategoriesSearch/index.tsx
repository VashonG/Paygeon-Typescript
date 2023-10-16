import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import PageWBackIconOnLightNavigationweb from "components/PageWBackIconOnLightNavigationweb";
import PaymentCategoriesPaymentitemv2 from "components/PaymentCategoriesPaymentitemv2";
import PaymentCategoriesSearchElementwidget from "components/PaymentCategoriesSearchElementwidget";
import PaymentCategoriesSearchPaymentitemv from "components/PaymentCategoriesSearchPaymentitemv";
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

const PaymentCategoriesSearchPage: React.FC = () => {
  const [navigationiosvalue, setNavigationiosvalue] =
    React.useState<string>("");
  const paymentCategoriesSearchPaymentitemvPropList = [
    { username: "Verizon" },
    { username: "Apple Music" },
    { username: "Amazon Prime" },
    { username: "Wise payment" },
    { price: "$4.99" },
    { username: "Private transfer" },
    { username: "Booking" },
    { username: "Airbnb" },
    { username: "Telia" },
    { username: "Airtable" },
    { username: "Spotify" },
    { price: "$3.99", username: "Box Cloud" },
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

  return (
    <>
      <div className="bg-white-A700 font-inter h-[968px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="flex flex-col gap-[31px] h-full items-center justify-start ml-auto mr-[81px] my-auto md:px-5 w-[71%]">
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
          <div className="h-[678px] md:h-[771px] relative w-full">
            <div className="h-[678px] md:h-[771px] m-auto w-full">
              <div className="absolute flex md:flex-col flex-row gap-[29px] h-max inset-[0] items-start justify-between m-auto outline outline-[0.5px] outline-blue_gray-100_90 rounded-[12px] w-full">
                <Input
                  name="navigationios"
                  placeholder="Search for payment providers"
                  value={navigationiosvalue}
                  onChange={(e) => setNavigationiosvalue(e)}
                  className="p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-sm w-full"
                  wrapClassName="border border-blue_gray-100_b2 border-solid flex md:flex-1 md:ml-[0] ml-[23px] md:mt-0 mt-[23px] pl-[15px] pr-[35px] py-[15px] rounded-lg md:w-full"
                  prefix={
                    <div className="mr-[13px] bg-gray-600">
                      <Img
                        className="cursor-pointer my-auto"
                        src="images/img_search_gray_600.svg"
                        alt="search"
                      />
                    </div>
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#747a80"
                      className="cursor-pointer my-auto"
                      onClick={() => setNavigationiosvalue("")}
                      style={{
                        visibility:
                          navigationiosvalue?.length <= 0
                            ? "hidden"
                            : "visible",
                      }}
                      height={20}
                      width={18}
                      viewBox="0 0 18 20"
                    />
                  }
                ></Input>
                <div className="flex flex-col items-center justify-start mb-[9px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <PaymentCategoriesSearchElementwidget
                      className="flex flex-col items-center justify-end pt-[23px] w-full"
                      title="Saved templates"
                      calendar="images/img_overflowmenu_black_900.svg"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start mt-7 w-[92%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="sm:gap-5 gap-[26px] grid sm:grid-cols-1 grid-cols-3 justify-center min-h-[auto] w-full">
                        {paymentCategoriesSearchPaymentitemvPropList.map(
                          (props, index) => (
                            <React.Fragment
                              key={`PaymentCategoriesSearchPaymentitemv${index}`}
                            >
                              <PaymentCategoriesSearchPaymentitemv
                                className="flex flex-1 flex-col items-center justify-start pb-[5px] px-[5px] w-full"
                                {...props}
                              />
                            </React.Fragment>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                  <InvoicesV2Buttonsicon
                    className="flex flex-col items-center justify-start mt-[19px] w-[24%] md:w-full"
                    notificationimage="images/img_notification.svg"
                    notificationtext="See all templates"
                  />
                </div>
              </div>
              <Line className="absolute bg-blue_gray-100_90 h-[678px] inset-y-[0] left-[40%] my-auto w-px" />
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[1%] w-[39%]">
              <List
                className="flex flex-col gap-1 items-center w-full"
                orientation="vertical"
              >
                <div className="flex md:flex-1 flex-col items-start justify-start ml-[9px] my-0 w-[98%] md:w-full">
                  <div className="flex flex-row gap-[26px] items-center justify-between w-full">
                    <PaymentCategoriesPaymentitemv2
                      className="flex flex-col items-center justify-start p-[17px]"
                      title="Saved templates"
                      category="Payments that you made most frequently"
                      img="images/img_qrcode.svg"
                    />
                    <Line className="bg-blue-A700 h-[97px] w-px" />
                  </div>
                  <Line className="bg-blue_gray-100_90 h-px mt-1 w-[93%]" />
                  <PaymentCategoriesPaymentitemv2
                    className="flex flex-col items-center justify-start mt-1 p-[17px] w-[94%] md:w-full"
                    title="Mobile networks"
                    category="Top up your balance instantly with operators"
                    img="images/img_notification.svg"
                  />
                  <Line className="bg-blue_gray-100_90 h-px mt-1 w-[93%]" />
                  <PaymentCategoriesPaymentitemv2
                    className="flex flex-col items-center justify-start mt-1 p-[17px] w-[94%] md:w-full"
                    title="Utilities"
                    category="Check your home utility bills and pay them instantly"
                    img="images/img_notification.svg"
                  />
                  <Line className="bg-blue_gray-100_90 h-px mt-1 w-[93%]" />
                </div>
                <div className="md:h-[206px] h-[264px] mr-[11px] my-0 relative w-[98%] sm:w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[94%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <PaymentCategoriesPaymentitemv2
                        className="flex flex-col items-center justify-start p-[17px] w-full"
                        title="Financial services"
                        category="Pay for interests, make a private transfers abroad"
                        img="images/img_notification.svg"
                      />
                      <Line className="bg-blue_gray-100_90 h-px mt-1 w-full" />
                      <Line className="bg-blue_gray-100_90 h-px mt-[105px] w-full" />
                    </div>
                  </div>
                  <PaymentCategoriesPaymentitemv2
                    className="absolute bottom-[23%] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[17px] w-[94%]"
                    title="Entertainment"
                    category="Check your online movies and music subscriptions"
                    img="images/img_notification.svg"
                  />
                  <PaymentCategoriesPaymentitemv2
                    className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pt-[17px] px-[17px] w-[94%]"
                    notificationimage="images/img_notification.svg"
                  />
                  <div className="absolute bg-gradient  bottom-[0] h-[185px] inset-x-[0] mx-auto w-full"></div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar3 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]" />
          <PageWBackIconOnLightNavigationweb
            className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-10px] p-5 w-[83%] z-[1]"
            titletext="Payment Providers"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentCategoriesSearchPage;
