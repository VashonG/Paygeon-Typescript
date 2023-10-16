import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import SupportProductsColumngettingstarted from "components/SupportProductsColumngettingstarted";
import SupportProductsHelpappitem from "components/SupportProductsHelpappitem";
import SupportProductsHelpdiscussion from "components/SupportProductsHelpdiscussion";
import SupportProductsHelplinkslist from "components/SupportProductsHelplinkslist";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const SupportProductsPage: React.FC = () => {
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
  const supportProductsHelpappitemPropList = [
    {},
    {
      userwalletdescription: "Accept payments from anyone",
      userwallet: "Commerce",
    },
    {
      userwalletdescription: "Build the future of payments",
      userwallet: "Cloud",
    },
    {
      userwalletdescription: "Access our trading terminal",
      userwallet: "Online Trading",
    },
    { userwalletdescription: "Access to our exchange", userwallet: "Exchange" },
    {
      userwalletdescription: "Secure payments",
      userwallet: "Query & Transactions",
    },
    { userwalletdescription: "Spend funds, earn rewards", userwallet: "Card" },
    {
      userwalletdescription: "Power your fintech compliance",
      userwallet: "Intelligence",
    },
    {
      userwalletdescription: "Our apps for web and mobile",
      userwallet: "Apps downloads",
    },
  ];
  const supportProductsColumngettingstartedPropList = [
    {},
    {
      multilinetext: "How to verify your identity on our marketplace",
      gettingstarted: "Privacy and Security",
      multilinetext2:
        "Is our site or your profile not loading? Are you having issues you try to create",
    },
    {
      multilinetext:
        "Keep your account safe by adding an extra layer of security",
      gettingstarted: "Getting Started",
      multilinetext2:
        "See these steps to secure your account if you notice suspicious activity",
    },
  ];
  const supportProductsHelplinkslistPropList = [
    {},
    {
      userlinkone: "Get back into my account",
      userlinkthree: "Verify my identity",
      userlinktwo: "Link a payment method",
      usertitle: "Managing my account",
    },
    {
      userlinkone: "Buying, selling or converting crypto",
      userlinkthree: "Pricing and fees",
      userlinktwo: "Sending or receiving cryptocurrency",
      usertitle: "Trading and funding",
    },
  ];
  const supportProductsHelpdiscussionPropList = [
    {},
    {
      waitingperioddate: "04 Sep 2020",
      waitingperiodtitle:
        "Strong Customer Authentication-related preparations for businesses created using platforms or plugins",
      waitingperiodpaymentstext: "Account and settings",
    },
    {
      waitingperioddate: "1 Feb 2022",
      waitingperiodtitle:
        "Security, permissions, and access levels when connecting your account to a third-party platform",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-inter h-[2124px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]"
          >
            <Img
              className="h-11 mb-[2060px] ml-8 mr-[190px] mt-5 w-11"
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
                },
              }}
              className="flex flex-col items-center justify-start mb-[21px] mt-[109px] pr-2.5 w-[97%]"
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
              <div className="flex flex-col items-center justify-start mt-[1324px] w-full">
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
          <div className="flex flex-col items-center justify-start ml-[undefinedpx] mr-[79px] my-auto w-[72%] z-[1]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-blue-A700 flex flex-col items-center justify-start rounded-[24px] w-full">
                <div className="h-[284px] relative w-full">
                  <div className="h-[284px] m-auto w-full">
                    <Img
                      className="h-[284px] m-auto object-cover rounded-[24px] w-full"
                      src="images/img_meshgradient_284x1024.png"
                      alt="meshgradient"
                    />
                    <Img
                      className="absolute h-[283px] inset-y-[0] left-[0] my-auto object-cover rounded-[24px] w-[51%]"
                      src="images/img_bitmapcopy_283x518.png"
                      alt="bitmapcopy"
                    />
                    <Img
                      className="absolute h-[283px] inset-y-[0] my-auto object-cover right-[0] rounded-[24px] w-1/2"
                      src="images/img_bitmapcopy2_283x505.png"
                      alt="bitmapcopyTwo"
                    />
                  </div>
                  <div className="absolute flex flex-col gap-[22px] h-max inset-[0] items-center justify-center m-auto w-[66%]">
                    <Text
                      className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-white-A700"
                      size="txtInterExtraBold42WhiteA700"
                    >
                      How can we help you?
                    </Text>
                    <Input
                      name="search"
                      placeholder="Search help articles"
                      value={searchvalue}
                      onChange={(e) => setSearchvalue(e)}
                      className="font-bold p-0 placeholder:text-black-900 sm:px-5 text-black-900 text-left text-sm w-full"
                      wrapClassName="flex outline outline-[0.5px] outline-white-A700_72 pl-[22px] pr-[35px] py-[21px] rounded-lg w-full"
                      prefix={
                        <div className="mb-px mr-3 sm:w-full sm:mx-0 w-[3%] bg-black-900">
                          <Img
                            className="cursor-pointer my-auto"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        </div>
                      }
                      suffix={
                        <CloseSVG
                          fillColor="#000000"
                          className="cursor-pointer my-auto"
                          onClick={() => setSearchvalue("")}
                          style={{
                            visibility:
                              searchvalue?.length <= 0 ? "hidden" : "visible",
                          }}
                          height={20}
                          width={18}
                          viewBox="0 0 18 20"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-12 w-full">
              <div className="flex flex-col gap-[29px] items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtInterExtraBold20"
                >
                  Products
                </Text>
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {supportProductsHelpappitemPropList.map((props, index) => (
                    <React.Fragment key={`SupportProductsHelpappitem${index}`}>
                      <SupportProductsHelpappitem
                        className="flex flex-1 flex-col items-start justify-start w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-12 pt-0.5 w-[97%] md:w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <Text
                  className="ml-1 md:ml-[0] text-black-900 text-xl"
                  size="txtInterExtraBold20"
                >
                  Popular help articles
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[51px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  {supportProductsColumngettingstartedPropList.map(
                    (props, index) => (
                      <React.Fragment
                        key={`SupportProductsColumngettingstarted${index}`}
                      >
                        <SupportProductsColumngettingstarted
                          className="flex flex-1 flex-col items-start justify-start w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ),
                  )}
                </List>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-12 pt-0.5 w-[98%] md:w-full">
              <div className="flex flex-col gap-7 items-start justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[5px] text-black-900 text-xl"
                  size="txtInterExtraBold20"
                >
                  Explore community articles
                </Text>
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  {supportProductsHelplinkslistPropList.map((props, index) => (
                    <React.Fragment
                      key={`SupportProductsHelplinkslist${index}`}
                    >
                      <SupportProductsHelplinkslist
                        className="flex flex-1 flex-col items-start justify-start w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
            <div className="flex flex-col gap-7 items-start justify-start mt-[41px] pt-0.5 w-full">
              <Text
                className="text-black-900 text-xl"
                size="txtInterExtraBold20"
              >
                Top Community Posts
              </Text>
              <List
                className="flex flex-col gap-[18px] items-start w-auto"
                orientation="vertical"
              >
                {supportProductsHelpdiscussionPropList.map((props, index) => (
                  <React.Fragment key={`SupportProductsHelpdiscussion${index}`}>
                    <SupportProductsHelpdiscussion
                      className="flex flex-col items-start justify-start my-0 pb-[5px] pr-[5px] w-[66%] md:w-full"
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
            <div className="bg-blue-A700 h-[309px] md:h-[357px] mt-12 sm:px-5 px-[29px] relative rounded-[16px] w-full">
              <div className="absolute bg-blue-A700 bottom-[0] flex flex-col items-center justify-start right-[22%] rounded-[16px] w-[42%]">
                <div className="h-[154px] relative w-full">
                  <Img
                    className="h-[154px] m-auto object-cover rounded-[16px] w-full"
                    src="images/img_meshgradient_154x422.png"
                    alt="meshgradient_One"
                  />
                  <Img
                    className="absolute h-[154px] inset-[0] justify-center m-auto object-cover rounded-[16px] w-full"
                    src="images/img_bitmapcopy2_154x422.png"
                    alt="bitmapcopyTwo_One"
                  />
                </div>
              </div>
              <Text
                className="absolute left-[8%] sm:text-2xl md:text-[26px] text-[28px] text-black-900 top-1/4"
                size="txtInterExtraBold28"
              >
                Not finding what you need?
              </Text>
              <Text
                className="absolute leading-[24.00px] left-[8%] text-base text-black-900 top-[39%] w-[42%] sm:w-full"
                size="txtInterLight16"
              >
                Find quick answers to complex problems from other users, or ask
                the community a question.
              </Text>
              <Button className="absolute bg-blue-A700 bottom-[23%] cursor-pointer font-bold left-[8%] min-w-[210px] py-3.5 rounded-[16px] text-center text-sm text-white-A700">
                Contact Us
              </Button>
              <Img
                className="absolute h-[309px] inset-y-[0] my-auto right-[9%] rounded-[16px]"
                src="images/img_undrawnewspaperresyf5.svg"
                alt="undrawnewspaper"
              />
            </div>
          </div>
          <InvoicesV2Navigationweb
            className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-11px] p-5 w-[83%] z-[1]"
            title="Help center"
          />
        </div>
      </div>
    </>
  );
};

export default SupportProductsPage;
