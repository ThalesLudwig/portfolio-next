import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialList = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${MOBILE}) {
    padding-bottom: 90px;
  }
`;
