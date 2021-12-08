import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
`;

export const Input = styled.div`
  padding: 20px 25px;
  background-color: ${({ theme }) => theme.colors.card};
  border: none;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const NativeInput = styled.input`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.card};
  border: none;
  font-size: ${({ theme }) => theme.sizes.text};
  outline: none;
  width: 100%;
`;

export const SendButton = styled.img.attrs({
  src: "icons/send.png",
  alt: "send",
})`
  margin-left: 10px;
  cursor: pointer;
`;

export const ScrollPanel = styled.div`
  display: flex;
  flex-direction: column;
  -ms-overflow-style: none;
  scrollbar-width: none;
  height: calc(100vh - 210px);
  overflow-y: auto;
  padding: 0px 15px;
  position: fixed;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${MOBILE}) {
    height: calc(100vh - 145px);
  }
`;
