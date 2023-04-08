// styled.d.ts

type CustomTheme = typeof defaultTheme;

import "styled-components";
import { defaultTheme } from "./styles/theme";
declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
