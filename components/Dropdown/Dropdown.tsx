import { ReactElement, createContext, useContext, useState } from "react";
import MoreIcon from "../MoreIcon/MoreIcon";
import {
  Container,
  DropdownItemContainer,
  DropdownItemsContainer,
  IconContainer,
  ItemText,
} from "./styles";
import { LayoutAnimation } from "react-native";

interface DropdownOptions {
  align?: "left" | "right";
  iconSize?: number;
}

const DropdownContext = createContext<DropdownOptions>(null);

interface IDropdown extends DropdownOptions {
  children: ReactElement<IDropdownItems>;
}

export default function Dropdown({
  children,
  align = "left",
  iconSize = 48,
}: IDropdown) {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleToggle = () => {
    setToggleDropdown(!toggleDropdown);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <DropdownContext.Provider value={{ align }}>
      <Container>
        <IconContainer testID="icon" onPress={handleToggle}>
          <MoreIcon iconSize={iconSize} />
        </IconContainer>
        {toggleDropdown && children}
      </Container>
    </DropdownContext.Provider>
  );
}

//DROPDOWN ITEMS
interface IDropdownItems {
  children: ReactElement<IDropdownItem>[] | ReactElement<IDropdownItem>;
}
Dropdown.Items = function DropdownItems({ children }: IDropdownItems) {
  const [itemsHeight, setItemsHeight] = useState(0);
  const { align } = useContext(DropdownContext);
  return (
    <DropdownItemsContainer
      testID="dropdown-items-list"
      listHeight={itemsHeight}
      align={align}
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        setItemsHeight(height);
      }}
    >
      {children}
    </DropdownItemsContainer>
  );
};

//DROPDOWN ITEM
interface IDropdownItem {
  children: string;
  onPress: () => void;
}
Dropdown.Item = function DropdownItem({ children, onPress }: IDropdownItem) {
  return (
    <DropdownItemContainer testID="dropdown-item" onPress={onPress}>
      <ItemText>{children}</ItemText>
    </DropdownItemContainer>
  );
};
