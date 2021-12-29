import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 10px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FlagWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const SwitchLabel = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.title};
`;

export const FlagImage = styled.img`
  border-radius: 6px;
  cursor: pointer;
  border: 3px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.title : theme.colors.background};
  margin-left: 5px;
`;

export const ThemeSwitcher = styled.img.attrs({
  src: "icons/theme-switch.png",
  width: 35,
  height: 35,
})`
  margin: 0px 10px 0px 5px;
`;
