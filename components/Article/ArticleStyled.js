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

export const Title = styled.div`
  padding: 12px;
  height: 70px;
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 0px 0px 10px 10px;
  box-shadow: ${SHADOWS.default};

  @media (max-width: ${MOBILE}) {
    border-radius: 0px;
  }
`;

export const Time = styled.div`
  width: 75px;
  height: 33px;
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Medium = styled.img.attrs({
  src: "social/medium.jpeg",
})`
  width: 33px;
  height: 33px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 55%;
  margin: 10px;
`;
