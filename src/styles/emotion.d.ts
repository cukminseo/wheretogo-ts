import "@emotion/react";

type color =
  | "main"
  | "sub1"
  | "sub2"
  | "sub3"
  | "point"
  | "white"
  | "gray1"
  | "gray2"
  | "gray3"
  | "gray4";
type typography =
  | "title1"
  | "title2"
  | "subheader"
  | "menu1"
  | "menu2"
  | "btn"
  | "body1"
  | "body2"
  | "caption";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      [key in color]: string;
    };
    typography: {
      [key in typography]: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
      };
    };
  }
}
