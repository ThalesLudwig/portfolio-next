import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 20px 0px;

  @media (max-width: ${MOBILE}) {
    width: 100vw;
    padding: 0px 20px;
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.sizes.title};
  color: ${({ theme }) => theme.colors.title};
`;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 20px;
  text-align: justify;
  text-justify: inter-word;
`;
