import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import InvoicesV2Buttonsicon from "components/InvoicesV2Buttonsicon";
import PageWBackIconOnLightNavigationweb from "components/PageWBackIconOnLightNavigationweb";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const websiteDesignOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const InvoicesAddInvoicePage: React.FC = () => {
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
          src="images/img_notification.svg"
          alt="notification_Two"
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
      <div className="bg-white-A700 font-inter h-[1285px] mx-auto overflow-auto relative w-full">
        <Footer className="absolute bottom-[0] flex items-center justify-center md:px-5 right-[0] w-full" />
        <div className="absolute h-[1285px] md:h-[1770px] inset-[0] justify-center m-auto md:px-5 w-full">
          <PageWBackIconOnLightNavigationweb
            className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start p-5 right-[0] top-[0] w-[83%]"
            titletext="Add New Invoice"
          />
          <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[18%] w-[47%]">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[89%] md:w-full">
                <Line className="bg-white-A700 h-px md:mt-0 my-[17px] outline-[0.5px] outline-blue_gray-100 outline-dashed w-[34%]" />
                <Button className="bg-blue_gray-50_99 cursor-pointer font-bold min-w-[151px] ml-6 md:ml-[0] py-2.5 rounded-lg text-center text-gray-600 text-xs">
                  Template
                </Button>
                <Line className="bg-white-A700 h-px ml-6 md:ml-[0] md:mt-0 my-[17px] outline-[0.5px] outline-blue_gray-100 outline-dashed w-[34%]" />
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Text className="text-black-900 text-xs" size="txtInterBold12">
                  Template
                </Text>
                <SelectBox
                  className="border border-blue_gray-100_b2 border-solid px-5 py-[22px] rounded-lg text-black-900 text-left text-sm w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-[18px] mr-[0] w-[11px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupFortyFour"
                  options={websiteDesignOptionsList}
                  isSearchable={false}
                  placeholder="Website design"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-8 w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[89%] md:w-full">
                  <Line className="bg-white-A700 h-px md:mt-0 my-[17px] outline-[0.5px] outline-blue_gray-100 outline-dashed w-[34%]" />
                  <Button className="bg-blue_gray-50_99 cursor-pointer font-bold min-w-[151px] ml-6 md:ml-[0] py-2.5 rounded-lg text-center text-gray-600 text-xs">
                    Company details
                  </Button>
                  <Line className="bg-white-A700 h-px md:ml-[0] ml-[25px] md:mt-0 my-[17px] outline-[0.5px] outline-blue_gray-100 outline-dashed w-[34%]" />
                </div>
                <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[49%] md:w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterBold12"
                      >
                        Invoice number
                      </Text>
                      <Input
                        name="groupThirtySix"
                        placeholder="Enter invoice number"
                        className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-100_b2 border-solid pl-5 pr-3 py-[23px] rounded-lg w-full"
                        type="number"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[49%] md:w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterBold12"
                      >
                        Due date
                      </Text>
                      <Input
                        name="groupThirtyNine"
                        placeholder="Select date"
                        className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm w-full"
                        wrapClassName="flex outline outline-[0.5px] outline-blue_gray-100_75 px-[19px] py-[22px] rounded-lg w-full"
                        suffix={
                          <div className="h-[18px] mb-px ml-[35px] w-[18px] bg-gray-600">
                            <Img
                              className="h-[18px] my-auto"
                              src="images/img_calendar_gray_600.svg"
                              alt="calendar"
                            />
                          </div>
                        }
                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[49%] md:w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterBold12"
                      >
                        Company name
                      </Text>
                      <Input
                        name="groupThirtySeven"
                        placeholder="Enter company name"
                        className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-100_b2 border-solid pl-5 pr-3 py-[23px] rounded-lg w-full"
                        type="text"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[49%] md:w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterBold12"
                      >
                        Contact email
                      </Text>
                      <Input
                        name="groupForty"
                        placeholder="Enter contact email"
                        className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-100_b2 border-solid pl-5 pr-3 py-[23px] rounded-lg w-full"
                        type="email"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtInterBold12"
                    >
                      Address
                    </Text>
                    <Input
                      name="groupThirtyEight"
                      placeholder="Enter company address"
                      className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-100_b2 border-solid pl-5 pr-3 py-[23px] rounded-lg w-full"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-8 w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[89%] md:w-full">
                    <Line className="bg-white-A700 h-px md:mt-0 my-[17px] outline-[0.5px] outline-blue_gray-100 outline-dashed w-[34%]" />
                    <Button className="bg-blue_gray-50_99 cursor-pointer font-bold min-w-[151px] ml-6 md:ml-[0] py-2.5 rounded-lg text-center text-gray-600 text-xs">
                      Services
                    </Button>
                    <Line className="bg-white-A700 h-px ml-6 md:ml-[0] md:mt-0 my-[17px] outline-[0.5px] outline-blue_gray-100 outline-dashed w-[34%]" />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[49%] md:w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterBold12"
                      >
                        Item description
                      </Text>
                      <Input
                        name="groupFortyOne"
                        placeholder="Enter service description"
                        className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-100_b2 border-solid pl-5 pr-3 py-[23px] rounded-lg w-full"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[23%] md:w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterBold12"
                      >
                        Qty
                      </Text>
                      <Input
                        name="groupFortyTwo"
                        placeholder="Enter amount"
                        className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-100_b2 border-solid pl-5 pr-3 py-[23px] rounded-lg w-full"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[23%] md:w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterBold12"
                      >
                        Rate
                      </Text>
                      <Input
                        name="groupFortyThree"
                        placeholder="Enter rate"
                        className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-100_b2 border-solid pl-5 pr-3 py-[23px] rounded-lg w-full"
                      ></Input>
                    </div>
                  </div>
                </div>
                <InvoicesV2Buttonsicon
                  className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] p-[3px] w-[19%] md:w-full"
                  notificationimage="images/img_notification.svg"
                  notificationtext="Add new item"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[5px] mt-3 w-4/5 md:w-full">
              <div className="flex flex-col items-center justify-start w-[37%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-full">
                  <div className="flex relative w-[15%]">
                    <Line className="bg-blue_gray-100_90 h-[72px] my-auto rotate-[2deg] w-[5px]" />
                    <Img
                      className="h-2.5 ml-[-1.77px] mt-[13px] z-[1]"
                      src="images/img_daymark.svg"
                      alt="daymark"
                    />
                    <Img
                      className="h-2.5 mb-[18px] ml-[-1.77px] mt-auto z-[1]"
                      src="images/img_daymark.svg"
                      alt="daymark_One"
                    />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-[79%]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-gray-600 text-xs"
                        size="txtInterMedium12"
                      >
                        Subtotal
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterBold12"
                      >
                        0.00 USD
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-gray-600 text-xs"
                        size="txtInterMedium12"
                      >
                        Tax 10%
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterBold12"
                      >
                        0.00 USD
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="leading-[18.00px] text-gray-600 text-xs w-full"
                size="txtInterMedium12"
              >
                Transfers made on weekends or holidays take longer. All
                transfers are subject to review and could be delayed or stopped
                if we identify an issue.
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[5px] mt-[38px] w-full">
              <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[174px] py-[17px] rounded-lg text-blue-A700 text-center text-sm">
                Save as Draft
              </Button>
              <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[175px] py-[17px] rounded-lg text-center text-sm text-white-A700">
                Send Invoice
              </Button>
            </div>
          </div>
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]"
          >
            <Img
              className="h-11 mb-[1221px] ml-8 mr-[190px] mt-5 w-11"
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
              <div className="flex flex-col items-center justify-start mt-[485px] w-full">
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
        </div>
      </div>
    </>
  );
};

export default InvoicesAddInvoicePage;
