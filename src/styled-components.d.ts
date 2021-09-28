import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    deviceSizes: {
      from: {
        md: string;
        sm: string;
        lg: string;
      };
    };

    black: string;
    displayBg: string;
    lockedGreen: string;
    lockedRed: string;
    numpadBg: string;
    safeBg: string;
    shadowGrey: string;
    solitude: string;
  }
}
