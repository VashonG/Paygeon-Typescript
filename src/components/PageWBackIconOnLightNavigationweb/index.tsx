import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

type PageWBackIconOnLightNavigationwebProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titletext" | "search"
> &
  Partial<{ titletext: string; search: string }>;

const PageWBackIconOnLightNavigationweb: React.FC<
  PageWBackIconOnLightNavigationwebProps
> = (props) => {
  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className={props.className}>
        <Button className="border border-blue_gray-100_b2 border-solid flex h-10 items-center justify-center mb-1 md:ml-[0] ml-[60px] p-[11px] rounded-lg w-10">
          <Img src="images/img_arrowleft_black_900.svg" alt="arrowleft" />
        </Button>
        <Text
          className="ml-6 md:ml-[0] md:mt-0 mt-[9px] text-black-900 text-lg"
          size="txtInterExtraBold18Black900"
        >
          {props?.titletext}
        </Text>
        {!!props?.search ? (
          <Input
            name="search"
            placeholder="Type to search …"
            value={searchvalue}
            onChange={(e) => setSearchvalue(e)}
            className="font-inter font-medium p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-xs w-full"
            wrapClassName="border border-blue_gray-100_b2 border-solid flex mb-1 md:ml-[0] ml-[506px] pl-[13px] pr-[35px] py-[9px] rounded-lg w-[27%] md:w-full"
            prefix={
              <div className="mr-3 sm:w-full sm:mx-0 w-[2%] bg-black-900">
                <Img
                  className="cursor-pointer my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              </div>
            }
            suffix={
              <CloseSVG
                fillColor="#747a80"
                className="cursor-pointer my-auto"
                onClick={() => setSearchvalue("")}
                style={{
                  visibility: searchvalue?.length <= 0 ? "hidden" : "visible",
                }}
                height={20}
                width={18}
                viewBox="0 0 18 20"
              />
            }
          ></Input>
        ) : null}
        <Button className="border border-blue_gray-100_b2 border-solid flex h-10 items-center justify-center mb-1 ml-2 md:ml-[0] p-2.5 rounded-lg w-10">
          <Img src="images/img_notification.svg" alt="notification" />
        </Button>
        <div className="flex flex-col h-10 items-center justify-start mb-1 ml-4 md:ml-[0] w-10">
          <Img
            className="h-10 md:h-auto rounded-[50%] w-10"
            src="images/img_img.png"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

PageWBackIconOnLightNavigationweb.defaultProps = { titletext: "Title" };

export default PageWBackIconOnLightNavigationweb;
