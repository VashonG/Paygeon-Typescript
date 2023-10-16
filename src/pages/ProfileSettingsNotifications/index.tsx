import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Switch, Text } from "components";
import Footer from "components/Footer";
import InvoicesV2Navigationweb from "components/InvoicesV2Navigationweb";
import ProfileSettingsAccountColumn from "components/ProfileSettingsAccountColumn";
import Sidebar7 from "components/Sidebar7";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const ProfileSettingsNotificationsPage: React.FC = () => {
  const [searchvalue, setSearchvalue] = React.useState<string>("");
  const profileSettingsAccountColumnPropList = [
    {
      amountspentsetuped: "Receive messages from our platform",
      cashwithdrawalamount: "Product updates",
    },
    {
      amountspentsetuped: "Receive booking reminders, pricing notices",
      cashwithdrawalamount: "Reminders",
    },
    {
      amountspentsetuped: "Receive coupons, promotions, surveys",
      cashwithdrawalamount: "Promotions and tips",
    },
    {
      amountspentsetuped: "Receive updates on job regulations",
      cashwithdrawalamount: "Policy and community",
    },
    {
      amountspentsetuped:
        "Receive messages about your account, your trips, legal alerts",
      cashwithdrawalamount: "Account support",
    },
    {
      amountspentsetuped: "Upcoming paymennts and balance changes",
      cashwithdrawalamount: "Reminders",
    },
    {
      amountspentsetuped: "Receive updates on government regulations",
      cashwithdrawalamount: "Policy and community",
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

  return (
    <>
      <div className="bg-white-A700 font-inter h-[970px] mx-auto overflow-auto relative w-full">
        <InvoicesV2Navigationweb
          className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-5 md:px-5 right-[0] top-[0] w-[83%]"
          title="Profile settings"
        />
        <div className="absolute bottom-[0] flex flex-col gap-8 items-center justify-start md:px-5 right-[0] w-[83%]">
          <div className="flex flex-col items-start justify-start w-[87%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[42px] items-center justify-start w-auto md:w-full">
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterBold12"
              >
                Profile
              </Text>
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterBold12"
              >
                Security
              </Text>
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterBold12"
              >
                Social Networks
              </Text>
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterBold12"
              >
                APIs
              </Text>
              <Button className="bg-black-900 cursor-pointer font-bold min-w-[118px] py-2.5 rounded-lg text-center text-white-A700 text-xs">
                Notifications
              </Button>
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtInterBold12"
              >
                Payment Limits
              </Text>
            </div>
            <Text
              className="mt-[33px] text-black-900 text-lg"
              size="txtInterExtraBold18Black900"
            >
              Notifications
            </Text>
            <div className="bg-blue_gray-50_99 flex flex-col items-center justify-end mt-4 p-3.5 rounded-[16px] w-full">
              <List
                className="flex flex-col gap-4 items-center mt-2 w-[98%]"
                orientation="vertical"
              >
                {profileSettingsAccountColumnPropList.map((props, index) => (
                  <React.Fragment key={`ProfileSettingsAccountColumn${index}`}>
                    <ProfileSettingsAccountColumn
                      className="flex flex-col items-center justify-start pt-0.5 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <div className="flex flex-row md:gap-10 items-center justify-between mt-[30px] w-full">
              <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[165px] py-3.5 rounded-lg text-center text-sm text-white-A700">
                Update Settings
              </Button>
              <Button className="bg-blue-A700 cursor-pointer font-bold min-w-[165px] py-3.5 rounded-lg text-blue-A700 text-center text-sm">
                Cancel
              </Button>
            </div>
          </div>
          <Footer className="flex items-center justify-center w-full" />
        </div>
        <Sidebar7 className="!sticky !w-[266px] bg-blue_gray-50_99 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 top-[0]" />
      </div>
    </>
  );
};

export default ProfileSettingsNotificationsPage;
