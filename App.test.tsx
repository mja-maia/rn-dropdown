import React from "react";
import { fireEvent, render, waitFor } from "./test-utils";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import { Dropdown } from "./components/Dropdown";

describe("<App />", () => {
  it("Should render App component correctly", () => {
    render(<App />, {});
  });

  it("Should open toggle on click on icon", async () => {
    const { getByTestId } = render(<App />, {});
    const icon = getByTestId("icon");
    fireEvent.press(icon);

    await waitFor(() => {
      expect(getByTestId("dropdown-items-list")).toBeTruthy();
    });
  });

  it("Should render 3 touchable highlights on press", async () => {
    const { getByTestId, getByText } = render(<App />, {});
    const icon = getByTestId("icon");
    fireEvent.press(icon);

    await waitFor(() => {
      expect(getByTestId("dropdown-items-list")).toBeTruthy();
      expect(getByText("Rename")).toBeTruthy();
      expect(getByText("Delete")).toBeTruthy();
      expect(getByText("Share")).toBeTruthy();
    });
  });

  it("Should call mocked function on press dropdown item", async () => {
    const mockedFn = jest.fn();
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Dropdown>
          <Dropdown.Items>
            <Dropdown.Item onPress={mockedFn}>Test</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown>
      </ThemeProvider>,
      {}
    );
    const icon = getByTestId("icon");
    fireEvent.press(icon);

    await waitFor(() => {
      expect(getByTestId("dropdown-items-list")).toBeTruthy();
      const item = getByText("Test");
      fireEvent.press(item);
      expect(mockedFn).toBeCalled();
    });
  });
});
