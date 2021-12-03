import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 45px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.card};
  }
  @media (max-width: ${MOBILE}) {
    border-radius: 0px;
  }
`;

export const Logo = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-color: ${({ theme }) => theme.colors.card};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50px;
  width: 50px;
  min-width: 50px;
  border-radius: 50%;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: ${({ theme }) => theme.colors.title};
`;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme }) => theme.colors.text};
`;

export const LogoContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

export const Chevron = styled.img.attrs({
  src: "icons/chevron.svg",
})`
  color: ${({ theme }) => theme.colors.text};
`;
