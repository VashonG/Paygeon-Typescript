import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import PageWBackIconOnLightNavigationweb from "components/PageWBackIconOnLightNavigationweb";
import SupportArticleRowlinkone from "components/SupportArticleRowlinkone";
import SupportProductsHelpdiscussion from "components/SupportProductsHelpdiscussion";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const SupportArticlePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

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
  const supportProductsHelpdiscussionPropList = [
    {
      waitingperiodtitle: "How do I cancel my reservation for a place to stay?",
    },
    {
      waitingperioddate: "04 Sep 2020",
      waitingperiodtitle:
        "How do I change or cancel my experience reservation?",
      waitingperiodpaymentstext: "Account and settings",
    },
    {
      waitingperioddate: "1 Feb 2022",
      waitingperiodtitle:
        "What should I do if someone asks me to pay outside of the website?",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1347px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]"
          >
            <Img
              className="h-11 mb-[1283px] ml-8 mr-[190px] mt-5 w-11"
              src="images/img_google.svg"
              alt="google"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "13px 13px 13px 30px",
                  gap: "14px",
                  color: "#747a80",
                  fontWeight: 700,
                  fontSize: "14px",
                  [`&:hover, &.ps-active`]: { color: "#000000" },
                },
              }}
              className="flex flex-col items-center justify-start mb-[21px] mt-[109px] w-full"
            >
              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                <Text className="text-gray-600 text-sm" size="txtInterLight14">
                  Navigation
                </Text>
                <div className="flex flex-col gap-0.5 items-center justify-start w-full">
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
              </div>
              <Text
                className="mt-[30px] text-gray-600 text-sm"
                size="txtInterLight14"
              >
                Balances
              </Text>
              <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-start mt-[25px] w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[22px] md:h-auto rounded-[50%] w-full"
                    src="images/img_img_22x286.png"
                    alt="img"
                  />
                </div>
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtInterBold14Gray600"
                >
                  100,050.75 USD
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-start mt-7 w-auto">
                <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[22px] md:h-auto rounded-[50%] w-full"
                    src="images/img_img_1.png"
                    alt="img_One"
                  />
                </div>
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtInterBold14Gray600"
                >
                  2310.40 EUR
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-start mt-7 w-auto">
                <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[22px] md:h-auto rounded-[50%] w-full"
                    src="images/img_img_2.png"
                    alt="img_Two"
                  />
                </div>
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtInterBold14Gray600"
                >
                  9455.50 GBP
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-[547px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  }
                  active={
                    window.location.pathname === "/profilesettingsaccount"
                  }
                  href="/profilesettingsaccount"
                >
                  <Text>Profile Settings</Text>
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
          <div className="flex flex-col items-start justify-start ml-[undefinedpx] mr-[81px] my-auto w-[72%] z-[1]">
            <div className="flex flex-col gap-[17px] items-start justify-start w-[61%] md:w-full">
              <SupportArticleRowlinkone className="flex flex-row gap-2 items-center justify-start w-auto" />
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                size="txtInterExtraBold42"
              >
                Getting started: funds reports
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-7 w-[98%] md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-[68%] md:w-full">
                <Text
                  className="leading-[24.00px] text-base text-black-900 w-[98%] sm:w-full"
                  size="txtInterRegular16"
                >
                  There is no better advertisement campaign that is low cost and
                  also successful at the same time. Great business ideas when
                  utilized effectively can save lots of money. This is not only
                  easy for those who work full-time as an advertiser.
                </Text>
                <div className="border border-blue_gray-100_b2 border-solid flex flex-col items-start justify-start p-[23px] sm:px-5 rounded-[10px] w-full">
                  <Text
                    className="leading-[21.00px] md:ml-[0] ml-[7px] text-gray-600 text-sm"
                    size="txtInterRegular14Gray600"
                  >
                    <>
                      1. Fliers and business cards can be tacked on such
                      bulletin boards. <br />
                      2. But before doing so, check out with the human resource
                      department <br />
                      3. Parents are required to be in regular touch with the
                      teachers to know <br />
                      4. Do not miss this opportunity and spread the word. Hand
                      them the business card
                    </>
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] text-base text-black-900 w-[98%] sm:w-full"
                  size="txtInterRegular16"
                >
                  Get involved with fundraiser at schools, as it’s a nice
                  approach to market business. Prior to handing out the order
                  received, collect all necessary information like business card
                  pack, fliers, with proper information. Information can be
                  based on what is the company about, what are the products and
                  services provided, or how to get information in touch with the
                  company. In each individual order, carefully place all of them
                  and seal the package properly.{" "}
                </Text>
                <Text
                  className="leading-[21.00px] text-gray-600 text-sm w-[98%] sm:w-full"
                  size="txtInterLight14"
                >
                  Note: Voice mails can be put to good use, other than recording
                  messages. They can help to deliver the marketing message.
                  Greet with a brief message, following with website and email
                  address.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start md:mt-0 mt-[19px] w-[22%] md:w-full">
                <div className="flex flex-row gap-[25px] items-center justify-between w-full">
                  <div className="h-[338px] relative w-[1%]">
                    <Line className="absolute bg-blue_gray-100_90 h-[338px] inset-y-[0] my-auto right-[0] w-px" />
                    <Line className="absolute bg-blue-A700 h-9 left-[0] top-[0] w-px" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-blue-A700 text-sm"
                      size="txtInterBold14BlueA700"
                    >
                      Getting started
                    </Text>
                    <Text
                      className="mt-[26px] text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Managing my account
                    </Text>
                    <Text
                      className="mt-[25px] text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Trading and funding
                    </Text>
                    <Text
                      className="mt-6 text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Taxes and financial services
                    </Text>
                    <Text
                      className="mt-[27px] text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Privacy and security
                    </Text>
                    <Text
                      className="mt-[26px] text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Other topics
                    </Text>
                    <Text
                      className="mt-[26px] text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Asset Directory
                    </Text>
                    <Text
                      className="mt-[25px] text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Top of mind
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start mt-12 pt-0.5 w-[66%] md:w-full">
              <Text
                className="text-black-900 text-xl"
                size="txtInterExtraBold20"
              >
                This also may help you
              </Text>
              <List
                className="flex flex-col gap-5 items-center w-full"
                orientation="vertical"
              >
                {supportProductsHelpdiscussionPropList.map((props, index) => (
                  <React.Fragment key={`SupportProductsHelpdiscussion${index}`}>
                    <SupportProductsHelpdiscussion
                      className="flex flex-1 flex-col items-start justify-start pb-[5px] pr-[5px] w-full"
                      {...props}
                    />
                    {index <
                      supportProductsHelpdiscussionPropList.length - 1 && (
                      <Line className="self-center h-px bg-blue_gray-100_90 w-full" />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </div>
            <div className="bg-blue-A700 flex md:flex-col flex-row md:gap-10 gap-[107px] items-center justify-start mt-12 p-[43px] md:px-10 sm:px-5 rounded-[16px] w-full">
              <div className="flex flex-col gap-2 items-start justify-start mb-0.5 ml-10 md:ml-[0] rounded-[16px]">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInterExtraBold24Black900"
                >
                  Not finding what you need?
                </Text>
                <Text
                  className="text-base text-black-900"
                  size="txtInterLight16"
                >
                  Find quick answers to complex problems from other users
                </Text>
              </div>
              <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[210px] md:mt-0 my-2 py-3.5 rounded-[16px] text-center text-sm text-white-A700">
                Contact Us
              </Button>
            </div>
          </div>
          <PageWBackIconOnLightNavigationweb
            className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-11px] p-5 w-[83%] z-[1]"
            titletext="Account"
          />
        </div>
      </div>
    </>
  );
};

export default SupportArticlePage;
