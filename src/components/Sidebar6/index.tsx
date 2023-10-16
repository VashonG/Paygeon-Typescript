import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

type Sidebar6Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;
type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Sidebar6: React.FC<Sidebar6Props> = (props) => {
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
        <Img
          className="h-[22px] w-[17px]"
          src="images/img_notification.svg"
          alt="notification_One"
        />
      ),
      label: "Reports",
      href: "/reportsv1",
      active: window.location.pathname === "/reportsv1",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Img
          className="h-11 mb-[956px] ml-8 mr-[190px] mt-5 w-11"
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
              fontFamily: "Inter",
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
          <div className="flex flex-col items-center justify-start mt-[220px] w-full">
            <MenuItem
              icon={
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_settings.svg"
                  alt="settings_One"
                />
              }
              active={window.location.pathname === "/profilesettingsaccount"}
            >
              <Text>Profile Settings</Text>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar6.defaultProps = {};

export default Sidebar6;
