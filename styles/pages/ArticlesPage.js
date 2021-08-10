import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticlesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100vw;
    padding-bottom: 80px;
  }
`;
