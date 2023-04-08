import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.TouchableHighlight`
  position: absolute;
`;

interface IDropdownItemsContainer {
  listHeight: number;
  align: "left" | "right";
}
export const DropdownItemsContainer = styled.View<IDropdownItemsContainer>`
  background-color: ${({ theme }) => theme.background.black500};
  width: 200px;
  position: relative;
  top: ${({ listHeight }) => `${listHeight / 2 + 32}px`};
  ${({ align }) => (align === "left" ? "left: 68px;" : "right: 68px;")}
`;

export const DropdownItemContainer = styled.TouchableHighlight.attrs(
  ({ theme }) => ({
    underlayColor: theme.primary.blue200,
    activeOpacity: 1,
  })
)``;

export const ItemText = styled.Text`
  padding: 16px 8px;
  color: ${({ theme }) => theme.text.white100};
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 16px;
`;
