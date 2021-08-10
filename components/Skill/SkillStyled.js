import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    margin-bottom: 10px;
    align-items: flex-start;
  }
`;

export const Label = styled.div`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: ${({ theme }) => theme.colors.title};
  margin-right: 10px;
`;

export const ProgressBackground = styled.div`
  width: 223px;
  height: 18px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.divisor};

  @media (max-width: ${MOBILE}) {
    width: calc(100vw - 40px);
  }
`;

export const ProgressBar = styled.div`
  width: ${({ progress }) => progress}%;
  height: 18px;
  border-radius: 20px;
  background-color: ${({ theme, isAlt }) =>
    isAlt ? theme.colors.secondary : theme.colors.primary};
`;
