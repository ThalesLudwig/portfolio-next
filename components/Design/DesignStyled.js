import styled from "styled-components";
import { MOBILE, TABLET } from "../../constants/screen";
import { SHADOWS } from "../../constants/shadow";

export const Container = styled.div`
  width: 260px;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0px 20px 20px 0px;

  @media (max-width: ${TABLET}) {
    min-width: unset;
    width: 220px;
  }

  @media (max-width: ${MOBILE}) {
    width: 100vw;
    margin: 0px;
  }
`;

export const Link = styled.a`
  cursor: pointer;
`;

export const ImageBackground = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-color: ${({ theme }) => theme.colors.card};
  height: 115px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${TABLET}) {
    width: 220px;
  }

  @media (max-width: ${MOBILE}) {
    border-radius: 0px;
    width: 100vw;
  }
`;

export const Content = styled.div`
  padding: 12px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: ${SHADOWS.default};

  @media (max-width: ${MOBILE}) {
    border-radius: 0px;
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme }) => theme.colors.title};
`;

export const Dribbble = styled.img.attrs({
  src: "social/dribbble.svg",
})`
  width: 33px;
  height: 33px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 55%;
  margin: 10px;
`;
