import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const FlagRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlagImage = styled.img`
  border-radius: 6px;
  cursor: pointer;
  border: 3px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.title : theme.colors.background};
  margin-right: 15px;
`;

export const ThemeSwitcher = styled.img.attrs({
  src: "icons/theme-switch.png",
  width: 35,
  height: 35,
})`
  cursor: pointer;
  margin: 0px 10px 0px 5px;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.title};
  font-weight: ${({ theme }) => theme.sizes.text};
  padding: 10px 0px;
`;
