import styled from "styled-components";
import { MOBILE, TABLET } from "../../constants/screen";
import { SHADOWS } from "../../constants/shadow";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  margin-top: 25px;

  @media (max-width: ${MOBILE}) {
    position: fixed;
    background-color: ${({ theme }) => theme.colors.card};
    flex-direction: row;
    margin: 0;
    top: 70px;
    left: 0;
    right: 0;
    overflow-x: auto;
    padding: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Text = styled.span`
  margin-left: 10px;

  @media (max-width: ${MOBILE}) {
    display: none;
  }
`;

export const MobileOnly = styled.span`
  display: none;

  @media (max-width: ${TABLET}) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: ${MOBILE}) {
    display: flex;
    flex-direction: row;
  }
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 15px;
  min-width: 150px;
  cursor: pointer;
  border-radius: 30px;
  display: flex;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.activeTab : theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.subtitle};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.background};
  box-shadow: ${({ isActive }) => (isActive ? SHADOWS.default : "none")};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAlt};
    color: ${({ theme }) => theme.colors.activeTab};
    box-shadow: ${SHADOWS.default};
  }

  @media (max-width: ${MOBILE}) {
    min-width: max-content;
    background-color: ${({ theme }) => theme.colors.card};
  }
`;
