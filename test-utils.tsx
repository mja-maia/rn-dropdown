import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./styles/theme";

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
