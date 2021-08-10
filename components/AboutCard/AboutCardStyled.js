import styled from "styled-components";

export const Container = styled.div`
  width: 223px;
  min-width: 223px;
  display: flex;
  flex-direction: column;
  margin-right: 17px;
`;

export const ImageBackground = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-color: ${({ theme }) => theme.colors.card};
  height: 73px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px 10px 0px 0px;
`;

export const Title = styled.div`
  padding: 12px;
  height: 70px;
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 0px 0px 10px 10px;
  cursor: default;
`;