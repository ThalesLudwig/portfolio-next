import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding-bottom: 30px;

  @media (max-width: ${MOBILE}) {
    width: 100vw;
    padding-bottom: 80px;
  }
`;

export const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: ${({ theme }) => theme.colors.title};
  margin: 15px 0px 10px 0px;

  @media (max-width: ${MOBILE}) {
    margin: 10px 0px 10px 20px;
  }
`;
