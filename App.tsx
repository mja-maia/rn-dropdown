import { ThemeProvider } from "styled-components";
import { Dropdown } from "./components/Dropdown";
import { defaultTheme } from "./styles/theme";
import { Container } from "./styles/styles";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Dropdown align="right">
          <Dropdown.Items>
            <Dropdown.Item onPress={() => console.log("rename")}>
              Rename
            </Dropdown.Item>
            <Dropdown.Item onPress={() => console.log("delete")}>
              Delete
            </Dropdown.Item>
            <Dropdown.Item onPress={() => console.log("share")}>
              Share
            </Dropdown.Item>
          </Dropdown.Items>
        </Dropdown>
      </Container>
    </ThemeProvider>
  );
}
