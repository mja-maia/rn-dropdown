import React, { ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./styles/theme";

interface IProviderProps {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: IProviderProps) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
