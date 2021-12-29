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
