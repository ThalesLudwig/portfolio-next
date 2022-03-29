import styled from "styled-components";
import { MOBILE, TABLET } from "../../constants/screen";
import { SHADOWS } from "../../constants/shadow";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  cursor: pointer;
  width: 210px;
  height: 225px;
  box-shadow: ${SHADOWS.default};
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${TABLET}) {
    margin: 10px;
    width: 170px;
  }

  @media (max-width: ${MOBILE}) {
    margin: 0;
    border-radius: 0;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 120px;
  }

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
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
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 10px;
`;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme }) => theme.colors.text};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;

  @media (max-width: ${MOBILE}) {
    align-items: flex-start;
    margin-left: 10px;
    text-align: start;
  }
`;
