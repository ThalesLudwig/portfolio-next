import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${MOBILE}) {
    width: 100vw;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }

  @media (max-width: ${MOBILE}) {
    flex-wrap: nowrap;
    overflow-y: auto;
  }
`;

export const Tab = styled.div`
  padding: 5px 5px 2px 5px;
  min-width: max-content;
  cursor: pointer;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.subtitle};
  border-bottom: ${({ theme, isActive }) =>
    `2px ${isActive ? theme.colors.primary : theme.colors.background} solid`};

  &:hover {
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.primary : theme.colors.primaryAlt};
    border-bottom: ${({ theme, isActive }) =>
      `2px ${isActive ? theme.colors.primary : theme.colors.primaryAlt} solid`};
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 35px;
`;

export const NameTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

export const Name = styled.div`
  font-size: ${({ theme }) => theme.sizes.title};
  color: ${({ theme }) => theme.colors.title};

  @media (max-width: ${MOBILE}) {
    font-size: ${({ theme }) => theme.sizes.subtitle};
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: ${({ theme }) => theme.colors.text};
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
`;

export const FlagImage = styled.img`
  border-radius: 6px;
  cursor: pointer;
  border: 3px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.primaryAlt : theme.colors.background};
  margin-left: 5px;
`;

export const FlagProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FlagWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
