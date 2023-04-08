import { EllipsisVerticalIcon } from "react-native-heroicons/solid";
import { defaultTheme } from "../../styles/theme";
import { Container } from "./styles";

export default function MoreIcon() {
  return (
    <Container>
      <EllipsisVerticalIcon
        width={48}
        height={48}
        color={defaultTheme.text.white100}
      />
    </Container>
  );
}
