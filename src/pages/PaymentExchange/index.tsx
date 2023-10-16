import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardV1Elementwidget from "components/DashboardV1Elementwidget";
import Footer from "components/Footer";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
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

const PaymentExchangePage: React.FC = () => {
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
          alt="notification_One"
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
        <div className="flex flex-col gap-[34px] h-full items-center justify-start ml-auto mr-[79px] my-auto md:px-5 w-[72%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="bg-blue_gray-50_99 flex md:flex-1 flex-row items-center justify-end md:mt-0 my-0.5 p-1.5 rounded-[10px] w-[38%] md:w-full">
              <div className="flex flex-col items-center justify-end p-[9px]">
                <Text
                  className="text-black-900 text-center text-xs"
                  size="txtInterBold12"
                >
                  Make a payment
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-1.5 p-[9px]">
                <Text
                  className="text-black-900 text-center text-xs"
                  size="txtInterBold12"
                >
                  Private transfer
                </Text>
              </div>
              <Button className="bg-black-900 cursor-pointer font-bold min-w-[102px] ml-1 py-2.5 rounded-lg text-center text-white-A700 text-xs">
                Exchange
              </Button>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[23px] grid grid-cols-2 w-[33%] md:w-full"
              orientation="horizontal"
            >
              <InvoicesV2Buttonsicon
                className="flex flex-col items-center justify-start sm:ml-[0] py-[15px] w-full"
                notificationimage="images/img_notification.svg"
                notificationtext="Add new recipient"
              />
              <InvoicesV2Buttonsicon
                className="flex flex-col items-center justify-start sm:ml-[0] p-[5px] w-full"
                notificationimage="images/img_notification.svg"
                notificationtext="Add your account"
              />
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[101px] items-end justify-end outline outline-[0.5px] outline-blue_gray-100_b2 p-6 sm:px-5 rounded-[12px] w-[49%] md:w-full">
              <div className="flex flex-col items-center justify-start mt-[116px] w-[77%] md:w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center"
                      size="txtInterExtraBold56"
                    >
                      $148.50
                    </Text>
                    <div className="flex flex-col gap-[33px] items-start justify-start mt-[3px] w-[48%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                        size="txtInterExtraBold24Black900"
                      >
                        €140,30
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-between md:ml-[0] ml-[3px] w-[98%] md:w-full">
                        <Text
                          className="text-center text-gray-600 text-sm"
                          size="txtInterRegular14Gray600"
                        >
                          0.95635624
                        </Text>
                        <Img
                          className="h-[21px] mr-[3px]"
                          src="images/img_arrowdropup.svg"
                          alt="arrowdropup"
                        />
                      </div>
                    </div>
                  </div>
                  <Button className="border border-blue_gray-100_b2 border-solid flex h-[52px] items-center justify-center mt-[29px] p-[17px] rounded-lg w-[52px]">
                    <Img src="images/img_notification.svg" alt="notification" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-7 items-center justify-start mb-[7px] w-full">
                <List
                  className="bg-blue_gray-50_99 flex flex-col gap-[12.5px] items-center p-1 rounded-[16px] w-full"
                  orientation="vertical"
                >
                  <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-end ml-[19px] my-0 w-[96%] md:w-full">
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtInterMedium12"
                    >
                      From
                    </Text>
                    <div className="bg-white-A700 flex flex-col h-4 items-center justify-start sm:ml-[0] ml-[63px] sm:mt-0 my-[18px] w-4">
                      <Img
                        className="h-4 md:h-auto rounded-[50%] w-4"
                        src="images/img_img_16x16.png"
                        alt="img"
                      />
                    </div>
                    <Text
                      className="ml-2.5 sm:ml-[0] text-black-900 text-sm"
                      size="txtInterBold14"
                    >
                      USD Account
                    </Text>
                    <div className="h-[52px] sm:ml-[0] ml-[87px] relative w-[31%] sm:w-full">
                      <Text
                        className="absolute h-max inset-y-[0] left-[0] my-auto text-black-900 text-right text-sm"
                        size="txtInterBold14"
                      >
                        $114.158,63
                      </Text>
                      <Img
                        className="absolute h-[52px] inset-y-[0] my-auto right-[0] w-[52px]"
                        src="images/img_arrowdown_black_900.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-100_90 w-[91%]" />
                  <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-end ml-[19px] my-0 w-[96%] md:w-full">
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtInterMedium12"
                    >
                      Send to
                    </Text>
                    <div className="bg-white-A700 flex flex-col h-4 items-center justify-start ml-12 sm:ml-[0] sm:mt-0 my-[18px] w-4">
                      <Img
                        className="h-4 md:h-auto rounded-[50%] w-4"
                        src="images/img_img_9.png"
                        alt="img"
                      />
                    </div>
                    <Text
                      className="ml-2.5 sm:ml-[0] text-black-900 text-sm"
                      size="txtInterBold14"
                    >
                      EUR Account
                    </Text>
                    <div className="h-[52px] sm:ml-[0] ml-[89px] relative w-[30%] sm:w-full">
                      <Text
                        className="absolute bottom-[31%] left-[0] text-black-900 text-right text-sm"
                        size="txtInterBold14"
                      >
                        €74.250,30
                      </Text>
                      <Img
                        className="absolute h-[52px] inset-y-[0] my-auto right-[0] w-[52px]"
                        src="images/img_arrowdown_black_900.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </List>
                <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[452px] sm:min-w-full py-[17px] rounded-lg text-center text-sm text-white-A700">
                  Continue Exchange
                </Button>
              </div>
            </div>
            <div className="sm:h-[1117px] md:h-[669px] h-[674px] relative w-[49%] md:w-full">
              <div className="sm:h-[1117px] md:h-[669px] h-[674px] m-auto w-full">
                <DashboardV1Elementwidget
                  className="absolute border border-blue_gray-100_b2 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto pb-7 rounded-[12px] w-full"
                  title="USD to EUR Chart"
                />
                <Img
                  className="absolute bottom-[11%] h-[370px] inset-x-[0] mx-auto object-cover"
                  src="images/img_graph.png"
                  alt="graph"
                />
              </div>
              <div className="absolute bottom-[10%] flex flex-col md:gap-10 gap-[106px] justify-start left-[5%] w-[62%]">
                <div className="flex flex-col items-center justify-start mr-[18px] pr-[3px] pt-[3px] w-[95%] md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-gray-600 text-sm"
                      size="txtInterRegular14Gray600"
                    >
                      Jul 4, 2022, 14:03 UTC
                    </Text>
                    <div className="flex flex-row gap-2.5 items-end justify-between w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtInterExtraBold24Black900"
                      >
                        1 USD = 0.957397 EUR
                      </Text>
                      <Img
                        className="h-5 mb-[3px] mt-1.5"
                        src="images/img_arrowdropup.svg"
                        alt="arrowdropup_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end md:ml-[0] ml-[153px] w-[51%] md:w-full">
                  <Img
                    className="h-[252px] mt-3.5"
                    src="images/img_pin.svg"
                    alt="pin"
                  />
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[60px] items-end justify-end ml-0.5 p-2 w-[87%]"
                    style={{ backgroundImage: "url('images/img_group60.svg')" }}
                  >
                    <div className="flex flex-col items-start justify-start mr-[5px]">
                      <Text
                        className="text-gray-600 text-sm"
                        size="txtInterRegular14Gray600"
                      >
                        9:11:40 AM
                      </Text>
                      <Text
                        className="mt-1 text-base text-black-900"
                        size="txtInterBold16"
                      >
                        0.94531623
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
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

export default PaymentExchangePage;
