import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardV1Elementwidget from "components/DashboardV1Elementwidget";
import Footer from "components/Footer";
import PageWBackIconOnLightNavigationweb from "components/PageWBackIconOnLightNavigationweb";
import TradingCurrencyIndexColumn from "components/TradingCurrencyIndexColumn";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const TradingCurrencyIndexPage: React.FC = () => {
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
          src="images/img_notification.svg"
          alt="notification"
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
  const tradingCurrencyIndexColumnPropList = [
    {},
    { number: "107.545", title: "52 week high", five: "+5.7%" },
    { number: "106.515", title: "52 week low", five: "+16.4%" },
  ];
  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1445px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="absolute flex inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]"
          >
            <Img
              className="h-11 mb-[1381px] ml-8 mr-[190px] mt-5 w-11"
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
              <div className="flex flex-col items-center justify-start mt-[645px] w-full">
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
            <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] pt-0.5 w-[31%] md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-gray-600 text-sm"
                  size="txtInterRegular14Gray600"
                >
                  Last | 07/08/22 EDT
                </Text>
                <div className="flex flex-row items-end justify-start w-full">
                  <div className="bg-white-A700 flex flex-col h-[26px] items-center justify-start my-[7px] w-[26px]">
                    <Img
                      className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                      src="images/img_img_26x26.png"
                      alt="img_Three"
                    />
                  </div>
                  <Text
                    className="ml-3 sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                    size="txtInterExtraBold34"
                  >
                    106.90
                  </Text>
                  <div className="flex flex-row gap-0.5 items-center justify-end mb-[3px] ml-[34px] mt-[17px] w-auto">
                    <Text
                      className="text-pink-500 text-right text-sm w-auto"
                      size="txtInterBold14Pink500"
                    >
                      -0.23 (-0.21%)
                    </Text>
                    <Img
                      className="h-5 w-2.5"
                      src="images/img_arrowdropdown.svg"
                      alt="arrowdropdown"
                    />
                  </div>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-9 w-full"
              orientation="horizontal"
            >
              {tradingCurrencyIndexColumnPropList.map((props, index) => (
                <React.Fragment key={`TradingCurrencyIndexColumn${index}`}>
                  <TradingCurrencyIndexColumn
                    className="bg-white-A700 border border-blue_gray-100_b2 border-solid flex flex-1 flex-col items-center justify-start p-[18px] rounded-[10px] w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between mt-6 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-blue_gray-100_90 py-[13px] rounded-[16px] w-[66%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start mb-2 w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-[53px] items-center justify-between w-[94%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-between w-1/2 sm:w-full">
                        <div className="bg-blue_gray-50_99 flex flex-row items-center justify-start p-1.5 rounded-[10px]">
                          <Button className="bg-black-900 cursor-pointer font-bold min-w-[54px] ml-0.5 py-2.5 rounded-lg text-center text-white-A700 text-xs">
                            15M
                          </Button>
                          <div className="flex flex-col items-end justify-start ml-4 p-1">
                            <Text
                              className="h-[15px] my-1.5 text-black-900 text-center text-xs"
                              size="txtInterBold12"
                            >
                              1H
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start ml-5 p-[3px]">
                            <Text
                              className="my-[7px] text-black-900 text-center text-xs"
                              size="txtInterBold12"
                            >
                              4H
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start ml-5 p-1">
                            <Text
                              className="h-[15px] my-1.5 text-black-900 text-center text-xs"
                              size="txtInterBold12"
                            >
                              1D
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start ml-5 p-0.5">
                            <Text
                              className="my-2 text-black-900 text-center text-xs"
                              size="txtInterBold12"
                            >
                              1W
                            </Text>
                          </div>
                        </div>
                        <Button className="border border-blue_gray-100_b2 border-solid flex h-12 items-center justify-center p-[15px] rounded-lg w-12">
                          <Img
                            className="h-[18px]"
                            src="images/img_settings_black_900.svg"
                            alt="settings_One"
                          />
                        </Button>
                      </div>
                      <div className="bg-blue_gray-50_99 flex flex-row items-center justify-center p-1.5 rounded-[10px] w-[43%] sm:w-full">
                        <Button className="bg-black-900 cursor-pointer font-bold min-w-[80px] py-2.5 rounded-lg text-center text-white-A700 text-xs">
                          Original
                        </Button>
                        <div className="flex flex-col items-center justify-start ml-[15px] p-0.5">
                          <Text
                            className="my-2 text-black-900 text-center text-xs"
                            size="txtInterBold12"
                          >
                            Trading View
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-5 mr-3.5 p-0.5">
                          <Text
                            className="my-2 text-black-900 text-center text-xs"
                            size="txtInterBold12"
                          >
                            Depth
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100_90 h-px w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-3.5 md:ml-[0] w-[87%] md:w-full">
                      <Text
                        className="text-gray-600 text-xs"
                        size="txtInterMedium12"
                      >
                        2022/07/07
                      </Text>
                      <div className="flex flex-row items-start justify-center sm:ml-[0] ml-[11px] pt-0.5 w-[17%] sm:w-full">
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtInterMedium12"
                        >
                          Open
                        </Text>
                        <Text
                          className="ml-1 text-green-A700 text-xs"
                          size="txtInterMedium12GreenA700"
                        >
                          40,025.20
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-center ml-2.5 sm:ml-[0] pt-0.5 w-[16%] sm:w-full">
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtInterMedium12"
                        >
                          High
                        </Text>
                        <Text
                          className="ml-1 text-green-A700 text-xs"
                          size="txtInterMedium12GreenA700"
                        >
                          44,205.20
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-center ml-2.5 sm:ml-[0] w-[15%] sm:w-full">
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtInterMedium12"
                        >
                          Low
                        </Text>
                        <Text
                          className="ml-1 text-pink-500 text-xs"
                          size="txtInterMedium12Pink500"
                        >
                          34,504.10
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-center ml-2.5 sm:ml-[0] w-[17%] sm:w-full">
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtInterMedium12"
                        >
                          Close
                        </Text>
                        <Text
                          className="ml-1 text-pink-500 text-xs"
                          size="txtInterMedium12Pink500"
                        >
                          39,240.50
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-evenly ml-2.5 sm:ml-[0] w-[17%] sm:w-full">
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtInterMedium12"
                        >
                          Change
                        </Text>
                        <Text
                          className="text-green-A700 text-xs"
                          size="txtInterMedium12GreenA700"
                        >
                          +2.53%
                        </Text>
                      </div>
                    </div>
                    <div className="md:h-[344px] h-[348px] mt-[5px] relative w-full">
                      <div className="md:h-[339px] h-[348px] m-auto w-full">
                        <div className="md:h-[339px] h-[348px] m-auto w-full">
                          <Img
                            className="absolute bottom-[0] h-[332px] inset-x-[0] mx-auto"
                            src="images/img_lines_blue_gray_100.svg"
                            alt="lines"
                          />
                          <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[1%]">
                            <Text
                              className="text-gray-600 text-right text-xs"
                              size="txtInterMedium12"
                            >
                              1200.69
                            </Text>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-[26px] text-gray-600 text-right text-xs"
                              size="txtInterMedium12"
                            >
                              1199.74
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[25px] text-gray-600 text-right text-xs"
                              size="txtInterMedium12"
                            >
                              1198.79
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[27px] text-gray-600 text-right text-xs"
                              size="txtInterMedium12"
                            >
                              1197.84
                            </Text>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-[25px] text-gray-600 text-right text-xs"
                              size="txtInterMedium12"
                            >
                              1196.89
                            </Text>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-[27px] text-gray-600 text-right text-xs"
                              size="txtInterMedium12"
                            >
                              1195.94
                            </Text>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-6 text-gray-600 text-right text-xs"
                              size="txtInterMedium12"
                            >
                              1194.99
                            </Text>
                            <Text
                              className="mt-[26px] text-gray-600 text-right text-xs"
                              size="txtInterMedium12"
                            >
                              1194.04
                            </Text>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-6 text-gray-600 text-right text-xs"
                              size="txtInterMedium12"
                            >
                              1193.09
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] h-[330px] inset-x-[0] mx-auto w-full">
                          <div className="absolute h-[330px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[22%] w-full">
                              <div className="flex flex-col md:gap-10 gap-[77px] items-center justify-start w-full">
                                <Line className="bg-green-A700 h-0.5 w-full" />
                                <Line className="bg-white-A700 h-0.5 outline-[1px] outline-blue_gray-100 outline-dashed w-full" />
                              </div>
                            </div>
                            <Line className="absolute bg-white-A700 h-[330px] inset-y-[0] my-auto outline-[0.5px] outline-blue_gray-100 outline-dashed right-1/4 w-px" />
                          </div>
                          <Text
                            className="absolute bg-green-A700 h-5 justify-end px-[5px] py-0.5 right-[0] rounded text-right text-white-A700 text-xs top-[19%] w-14"
                            size="txtInterMedium12WhiteA700"
                          >
                            1198.69
                          </Text>
                          <Text
                            className="absolute bg-blue_gray-50 h-5 justify-end px-[5px] py-0.5 right-[0] rounded text-black-900 text-right text-xs top-[43%] w-14"
                            size="txtInterMedium12Black900"
                          >
                            1196.94
                          </Text>
                          <Img
                            className="absolute h-[197px] left-[2%] top-[17%]"
                            src="images/img_graph_pink_500.svg"
                            alt="graph"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[71px] left-[2%]"
                        src="images/img_graphbottom.svg"
                        alt="graphbottom"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row gap-14 items-start justify-start ml-3.5 md:ml-[0] mt-4 w-[85%] md:w-full">
                      <Text
                        className="text-center text-gray-600 text-xs"
                        size="txtInterMedium12"
                      >
                        06:00
                      </Text>
                      <Text
                        className="text-center text-gray-600 text-xs"
                        size="txtInterMedium12"
                      >
                        08:00
                      </Text>
                      <Text
                        className="text-center text-gray-600 text-xs"
                        size="txtInterMedium12"
                      >
                        10:00
                      </Text>
                      <Text
                        className="text-center text-gray-600 text-xs"
                        size="txtInterMedium12"
                      >
                        12:00
                      </Text>
                      <Text
                        className="text-center text-gray-600 text-xs"
                        size="txtInterMedium12"
                      >
                        14:00
                      </Text>
                      <Text
                        className="text-center text-gray-600 text-xs"
                        size="txtInterMedium12"
                      >
                        16:00
                      </Text>
                      <Text
                        className="text-center text-gray-600 text-xs"
                        size="txtInterMedium12"
                      >
                        18:00
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-blue_gray-100_90 py-[13px] rounded-[12px] w-[32%] md:w-full">
                <div className="bg-blue_gray-50_99 flex flex-row items-center justify-start p-1.5 rounded-[10px] w-[85%] md:w-full">
                  <Button className="bg-black-900 cursor-pointer font-bold min-w-[130px] py-2.5 rounded-lg text-center text-white-A700 text-xs">
                    Sell
                  </Button>
                  <div className="flex flex-col items-center justify-end p-[9px]">
                    <Text
                      className="text-black-900 text-center text-xs"
                      size="txtInterBold12"
                    >
                      Buy
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-100_90 h-px mt-[13px] w-full" />
                <Text
                  className="mt-[60px] sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
                  size="txtInterExtraBold34"
                >
                  $148.50
                </Text>
                <Text
                  className="mt-1.5 text-black-900 text-center text-sm"
                  size="txtInterRegular14"
                >
                  €140,30
                </Text>
                <div className="flex flex-row gap-[7px] items-center justify-start mt-[30px] w-[34%] md:w-full">
                  <Text
                    className="text-center text-gray-600 text-sm"
                    size="txtInterRegular14Gray600"
                  >
                    0.95635624
                  </Text>
                  <Img
                    className="h-[21px]"
                    src="images/img_arrowdropup.svg"
                    alt="arrowdropup"
                  />
                </div>
                <div className="flex flex-col gap-[15px] items-center justify-start mb-[13px] mt-[53px] w-[86%] md:w-full">
                  <div className="bg-blue_gray-50_99 flex flex-col items-end justify-start p-1 rounded-[16px] w-full">
                    <List
                      className="flex flex-col gap-[3px] items-start w-auto"
                      orientation="vertical"
                    >
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <div className="bg-white-A700 flex flex-col h-4 items-center justify-start w-4">
                            <Img
                              className="h-4 md:h-auto rounded-[50%] w-4"
                              src="images/img_img_16x16.png"
                              alt="img"
                            />
                          </div>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterBold14"
                          >
                            USD
                          </Text>
                        </div>
                        <div className="h-[52px] relative w-[52%]">
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
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <div className="bg-white-A700 flex flex-col h-4 items-center justify-start w-4">
                            <Img
                              className="h-4 md:h-auto rounded-[50%] w-4"
                              src="images/img_img_9.png"
                              alt="img"
                            />
                          </div>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtInterBold14"
                          >
                            EUR
                          </Text>
                        </div>
                        <div className="h-[52px] relative w-[51%]">
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
                  </div>
                  <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[275px] py-[17px] rounded-lg text-center text-sm text-white-A700">
                    Continue Transfer
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between mt-6 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
                <DashboardV1Elementwidget className="border border-blue_gray-100_b2 border-solid flex flex-col gap-[21px] items-center justify-start pb-[30px] rounded-[12px] w-full" />
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                <DashboardV1Elementwidget className="border border-blue_gray-100_b2 border-solid flex flex-col gap-[22px] items-center justify-start pb-[30px] rounded-[12px] w-full" />
              </div>
            </div>
          </div>
          <PageWBackIconOnLightNavigationweb
            className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-10px] p-5 w-[83%] z-[1]"
            titletext="US Dollar Currency Index"
          />
        </div>
      </div>
    </>
  );
};

export default TradingCurrencyIndexPage;
