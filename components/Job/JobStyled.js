import styled from "styled-components";
import { MOBILE } from "../../constants/screen";
import { SHADOWS } from "../../constants/shadow";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  margin-right: 17px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  padding: 8px;
  justify-content: space-between;
  box-shadow: ${SHADOWS.default};

  @media (max-width: ${MOBILE}) {
    width: 100vw;
    max-width: unset;
    margin: 0px;
    border-radius: 0px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme }) => theme.colors.title};
  margin-left: 10px;
`;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme }) => theme.colors.text};
  margin-left: 40px;
`;

export const Link = styled.a`
  cursor: pointer;
`;

export const Pill = styled.div`
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme, isFirst }) =>
    isFirst ? theme.colors.messageMediaText : theme.colors.messageTextPrimary};
  background-color: ${({ theme, isFirst }) =>
    isFirst ? theme.colors.secondary : theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 5px 15px;
  margin-right: 5px;
  max-height: 25px;
`;

export const Pills = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${MOBILE}) {
    flex-wrap: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar-track {
      display: none;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
    }
  }
`;
