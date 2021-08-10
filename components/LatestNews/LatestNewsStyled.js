import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 42px;
  width: 42px;
  min-width: 42px;
  border-radius: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img``;

export const Title = styled.div`
  margin-left: 14px;
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme }) => theme.colors.text};
  max-width: 365px;
`;
