import React from "react";

const sizeClasses = {
  txtInterExtraBold42WhiteA700: "font-extrabold font-inter",
  txtInterExtraBold18: "font-extrabold font-inter",
  txtInterLight16: "font-inter font-light",
  txtInterLight14: "font-inter font-light",
  txtInterExtraBold56: "font-extrabold font-inter",
  txtInterExtraBold34: "font-extrabold font-inter",
  txtInterBold14Pink500: "font-bold font-inter",
  txtInterBold14Gray600: "font-bold font-inter",
  txtInterBold12Gray600: "font-bold font-inter",
  txtInterBold14: "font-bold font-inter",
  txtInterMedium12: "font-inter font-medium",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium12WhiteA700: "font-inter font-medium",
  txtInterExtraBold18Black900: "font-extrabold font-inter",
  txtInterMedium12Pink500: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtInterBold12GreenA700: "font-bold font-inter",
  txtInterExtraBold28: "font-extrabold font-inter",
  txtInterExtraBold24: "font-extrabold font-inter",
  txtInterBlack21: "font-black font-inter",
  txtInterBold12BlueA700: "font-bold font-inter",
  txtInterExtraBold42: "font-extrabold font-inter",
  txtInterExtraBold20: "font-extrabold font-inter",
  txtInterRegular14Gray600: "font-inter font-normal",
  txtInterBold14BlueA700: "font-bold font-inter",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular14WhiteA7007f: "font-inter font-normal",
  txtInterExtraBold24Black900: "font-extrabold font-inter",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium12GreenA700: "font-inter font-medium",
  txtInterMedium12Black900: "font-inter font-medium",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
