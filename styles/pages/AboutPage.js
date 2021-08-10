import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HireMe = styled.div`
  color: ${({ theme }) => theme.colors.title};
  font-weight: ${({ theme }) => theme.sizes.subtitle};
  cursor: pointer;

  @media (max-width: ${MOBILE}) {
    padding: 0px 20px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 23px;

  @media (max-width: ${MOBILE}) {
    width: 100vw;
    flex-wrap: nowrap;
    overflow-y: auto;
    padding: 0px 20px;

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

export const HappeningNow = styled.div`
  color: ${({ theme }) => theme.colors.title};
  font-weight: ${({ theme }) => theme.sizes.subtitle};
  padding: 35px 0px 25px 0px;

  @media (max-width: ${MOBILE}) {
    padding: 25px 20px;
  }
`;

export const News = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  @media (max-width: ${MOBILE}) {
    padding: 0px 20px 100px 20px;
  }
`;

export const NewsLine = styled.div`
  height: 30px;
  margin-left: 20px;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
  width: 0px;
`;
