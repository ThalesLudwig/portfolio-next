import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

export const SkillListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    padding: 0px 20px 80px 20px;
  }
`;
