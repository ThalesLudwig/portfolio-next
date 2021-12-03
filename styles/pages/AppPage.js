import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;

  @media (min-width: ${MOBILE}) {
    padding: 0px 20px;
    justify-content: center;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 80px);
  max-width: 750px;

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
    margin-top: 60px;
  }
`;
