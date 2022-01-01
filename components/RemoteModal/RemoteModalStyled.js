import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 450px;

  @media (max-width: ${MOBILE}) {
    width: 80vw;
    height: 70vh;
  }
`;

export const Title = styled.div`
  color: #ececec;
  font-size: ${({ theme }) => theme.sizes.title};
`;

export const Subtitle = styled.div`
  color: #ececec;
  font-size: ${({ theme }) => theme.sizes.subtitle};
  margin: 15px 0;
`;

export const ImagesRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;

  @media (max-width: ${MOBILE}) {
    margin-top: 10px;
    justify-content: flex-start;
  }
`;

export const Image = styled.div`
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-top: 20px;

  @media (max-width: ${MOBILE}) {
    width: 80px;
    height: 80px;
    margin: 10px 10px 0 0;
  }

  &:hover {
    width: 150px;
    height: 150px;
    transition: all 0.2s ease;
    -webkit-transition: all 0.3s ease;
  }
`;
