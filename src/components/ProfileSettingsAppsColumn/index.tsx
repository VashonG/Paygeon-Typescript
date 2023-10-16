import React from "react";

import { Img, Line, Text } from "components";

type ProfileSettingsAppsColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "subtitle" | "title" | "linkimage" | "linklabel"
> &
  Partial<{
    userimage: string;
    subtitle: string;
    title: string;
    linkimage: string;
    linklabel: string;
  }>;

const ProfileSettingsAppsColumn: React.FC<ProfileSettingsAppsColumnProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="border border-blue_gray-100_b2 border-solid flex flex-col h-[46px] items-center justify-start p-[13px] rounded-lg w-[46px]">
              <div className="flex flex-col h-5 items-center justify-start w-5">
                {!!props?.userimage ? (
                  <Img
                    className="h-[17px] w-[17px]"
                    alt="google"
                    src="props?.userimage"
                  />
                ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[17px] md:mt-0 mt-0.5">
              <Text className="text-gray-600 text-xs" size="txtInterMedium12">
                {props?.subtitle}
              </Text>
              <Text className="text-black-900 text-sm" size="txtInterBold14">
                {props?.title}
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[716px] w-[10%] md:w-full">
              <div className="flex flex-row gap-2 items-center justify-center my-2.5 w-auto">
                {!!props?.linkimage ? (
                  <Img
                    className="h-[18px] w-[18px]"
                    alt="link"
                    src="props?.linkimage"
                  />
                ) : null}
                {!!props?.linklabel ? (
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtInterBold14"
                  >
                    {props?.linklabel}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
          <Line className="bg-blue_gray-100_b2 h-px w-full" />
        </div>
      </div>
    </>
  );
};

ProfileSettingsAppsColumn.defaultProps = {
  subtitle: "Google",
  title: "Not connected",
};

export default ProfileSettingsAppsColumn;
