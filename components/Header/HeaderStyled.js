import styled from "styled-components";
import { MOBILE, MINI } from "../../constants/screen";
import { SHADOWS } from "../../constants/shadow";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: ${SHADOWS.default};
  padding: 0px 20px;
  top: 0;
  left: 0;
  right: 0;
`;

export const FlagProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1250px;
  align-self: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`;

export const NameTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;

  @media (max-width: ${MINI}) {
    margin-left: 10px;
  }
`;

export const Name = styled.div`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: ${({ theme }) => theme.colors.title};

  @media (max-width: ${MOBILE}) {
    font-size: ${({ theme }) => theme.sizes.subtitle};
  }

  @media (max-width: ${MINI}) {
    font-size: ${({ theme }) => theme.sizes.text};
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${MOBILE}) {
    font-size: ${({ theme }) => theme.sizes.textSmall};
  }
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
`;

export const FlagImage = styled.img`
  border-radius: 6px;
  cursor: pointer;
  border: 3px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.title : theme.colors.background};
  margin-left: 5px;
`;

export const FlagWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: ${MOBILE}) {
    display: none;
  }
`;

export const ThemeSwitcher = styled.img.attrs({
  src: "icons/theme-switch.png",
  width: 35,
  height: 35,
})`
  cursor: pointer;
  margin: 0px 10px 0px 5px;
`;
