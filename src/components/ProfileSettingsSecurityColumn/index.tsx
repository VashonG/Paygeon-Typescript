import React from "react";

import { Button, Img, Line, Text } from "components";

type ProfileSettingsSecurityColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "time" | "title" | "session" | "line"
> &
  Partial<{ time: string; title: string; session: string; line: string }>;

const ProfileSettingsSecurityColumn: React.FC<
  ProfileSettingsSecurityColumnProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Button className="border border-blue_gray-100_b2 border-solid flex h-[46px] items-center justify-center p-[13px] rounded-lg w-[46px]">
              <Img
                className="h-[18px]"
                src="images/img_notification.svg"
                alt="notification_One"
              />
            </Button>
            <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[17px] md:mt-0 mt-0.5">
              <Text className="text-gray-600 text-xs" size="txtInterMedium12">
                {props?.time}
              </Text>
              <Text className="text-black-900 text-sm" size="txtInterBold14">
                {props?.title}
              </Text>
            </div>
            {!!props?.session ? (
              <Button className="bg-black-900 cursor-pointer font-bold font-inter min-w-[130px] md:ml-[0] ml-[637px] md:mt-0 my-[5px] py-2.5 rounded-lg text-center text-white-A700 text-xs">
                {props?.session}
              </Button>
            ) : null}
          </div>
          {!!props?.line ? (
            <Line className="bg-blue_gray-100_b2 h-px w-full" />
          ) : null}
        </div>
      </div>
    </>
  );
};

ProfileSettingsSecurityColumn.defaultProps = {
  time: "01 Apr 2021 at 06:25PM",
  title: "Mac OS Safari 15.1",
};

export default ProfileSettingsSecurityColumn;
