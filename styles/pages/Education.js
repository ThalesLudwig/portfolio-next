import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Cards = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${MOBILE}) {
    width: 100vw;
    flex-wrap: nowrap;
    overflow-y: auto;
    padding: 0px 20px;
    margin-bottom: 110px;

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
