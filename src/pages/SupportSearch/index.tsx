import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import FormsCheckboxesPaginationRowarrowleft from "components/FormsCheckboxesPaginationRowarrowleft";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import SupportSearchColumngettingstarted from "components/SupportSearchColumngettingstarted";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const SupportSearchPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const [searchvalue, setSearchvalue] = React.useState<string>("");
  const [searchonevalue, setSearchonevalue] = React.useState<string>("");
  const supportSearchColumngettingstartedPropList = [
    {},
    {
      description: (
        <>
          What’s better than an NFT? 2 NFTs! But you don&#39;t always want to
          mint 2 NFTs of the same artwork. Unfortunately, it can happen by
          accident. If you’re confident you qualify for but didn’t receive any
          in the drop
        </>
      ),
      gettingstarted: "Setting up your Xero account with Stripe",
    },
    {
      description:
        "Is our site or your profile not loading? Are you having issues when you try to create, buy, or sell NFTs? What about missing prompts and notifications? Try completing the following",
      gettingstarted:
        "Integrate your Corporate Card with QuickBooks Online or QuickBooks Desktop",
    },
    {
      description: (
        <>
          Don’t worry, Rarible can’t take anything out of your wallet or remove
          NFTs from any blockchain. Can&#39;t see the artwork on your NFT? If
          you’re confident you qualify for but didn’t receive any in the weekly
          drop, please file a request
        </>
      ),
      gettingstarted:
        "Shopify app compliance with Strong Customer Authentication (SCA) regulations",
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
      label: "Assets",
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
      label: "Following",
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
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_notification.svg"
          alt="notification_One"
        />
      ),
      label: "Support",
      href: "/supportproducts",
      active: window.location.pathname === "/supportproducts",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1378px] mx-auto overflow-auto relative w-full">
        <InvoicesV2Navigationweb
          className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-5 md:px-5 right-[0] top-[0] w-[83%]"
          title="Help center"
        />
        <div className="absolute bottom-[0] flex flex-col gap-8 items-center justify-start md:px-5 right-[0] w-[83%]">
          <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
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
                      name="search_One"
                      placeholder="Account"
                      value={searchonevalue}
                      onChange={(e) => setSearchonevalue(e)}
                      className="font-bold p-0 placeholder:text-black-900 sm:px-5 text-black-900 text-left text-sm w-full"
                      wrapClassName="flex outline outline-[0.5px] outline-white-A700_72 pl-[22px] pr-[35px] py-[21px] rounded-lg w-full"
                      prefix={
                        <div className="mr-3 sm:w-full sm:mx-0 w-[3%] bg-black-900">
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
                          onClick={() => setSearchonevalue("")}
                          style={{
                            visibility:
                              searchonevalue?.length <= 0
                                ? "hidden"
                                : "visible",
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
            <List
              className="flex flex-col gap-3.5 items-center mt-12 w-full"
              orientation="vertical"
            >
              {supportSearchColumngettingstartedPropList.map((props, index) => (
                <React.Fragment
                  key={`SupportSearchColumngettingstarted${index}`}
                >
                  <SupportSearchColumngettingstarted
                    className="border border-blue_gray-100_b2 border-solid flex flex-1 flex-col gap-[9px] items-start justify-end p-[18px] rounded-[16px] w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <FormsCheckboxesPaginationRowarrowleft className="flex flex-row gap-[51px] items-center justify-center mt-8 w-[36%] md:w-full" />
          </div>
          <Footer className="flex items-center justify-center w-full" />
        </div>
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 top-[0]"
        >
          <Img
            className="h-11 mb-[1314px] ml-8 mr-[190px] mt-5 w-11"
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
              className="mt-[17px] text-gray-600 text-sm"
              size="txtInterLight14"
            >
              Balances
            </Text>
            <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-start mt-[25px] w-auto">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[22px] md:h-auto rounded-[50%] w-full"
                  src="images/img_img_22x286.png"
                  alt="img_One"
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
                  alt="img_Two"
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
                  alt="img_Three"
                />
              </div>
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtInterBold14Gray600"
              >
                9455.50 GBP
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[578px] w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                }
                active={window.location.pathname === "/profilesettingsaccount"}
                href="/profilesettingsaccount"
              >
                <Text>Profile Settings</Text>
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default SupportSearchPage;
