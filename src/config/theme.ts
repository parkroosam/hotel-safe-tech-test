import { DefaultTheme } from "styled-components";

const breakpoints = {
  md: 768,
  sm: 576,
  lg: 1024,
};

const theme: DefaultTheme = {
  deviceSizes: {
    from: {
      md: `screen and (min-width: ${breakpoints.md}px)`,
      sm: `screen and (min-width: ${breakpoints.sm}px)`,
      lg: `screen and (min-width: ${breakpoints.lg}px)`,
    },
  },

  black: "#000000",
  displayBg: "#9ea18c",
  lockedGreen: "#008000",
  lockedRed: "#940000",
  numpadBg: "#666666",
  safeBg: "#2a3f54",
  shadowGrey: "#333333",
  solitude: "#dce3ea",
};

export default theme;
