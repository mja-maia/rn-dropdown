import { defaultTheme } from "../../styles/theme";
import { Container } from "./styles";
import { Feather } from "@expo/vector-icons";

interface IProps {
  iconSize: number;
}

export default function MoreIcon({ iconSize }: IProps) {
  return (
    <Container>
      <Feather
        name="more-vertical"
        size={iconSize}
        color={defaultTheme.text.white100}
      />
    </Container>
  );
}
