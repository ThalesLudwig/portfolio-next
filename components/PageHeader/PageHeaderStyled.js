import styled from "styled-components";
import { TABLET } from "../../constants/screen";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${TABLET}) {
    padding: 0 20px;
    box-sizing: border-box;
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.sizes.title};
  color: ${({ theme }) => theme.colors.title};
`;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 5px;
`;
