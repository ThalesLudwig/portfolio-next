import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin-top: 30px;
  padding-bottom: 30px;

  @media (max-width: ${MOBILE}) {
    width: 100vw;
    padding-bottom: 90px;
  }
`;

export const Line = styled.div`
  margin-left: 50px;
  border-left: 2px solid
    ${({ theme, isLast }) =>
      isLast ? theme.colors.primary : theme.colors.secondary};
  height: ${({ isLast }) => (isLast ? "25px" : "50px")};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TimeStop = styled.div`
  background-color: ${({ theme, isLast }) =>
    isLast ? theme.colors.primary : theme.colors.secondary};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: ${({ isLast }) => (isLast ? "-15px" : "0px")};
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ isLast }) => (isLast ? "flex-start" : "center")};
  margin-left: -8px;
`;

export const Time = styled.div`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.sizes.subtitle};
  margin-top: ${({ isLast }) => (isLast ? "-20px" : "0px")};
`;
