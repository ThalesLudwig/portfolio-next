import styled from "styled-components";
import { TABLET } from "../../constants/screen";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 80px);
  border-left: 1px solid ${({ theme }) => theme.colors.divisor};
  margin-left: 30px;
  width: 500px;
  padding: 0px 30px;

  @media (max-width: ${TABLET}) {
    display: none;
  }
`;

export const Input = styled.div`
  padding: 20px 25px;
  background-color: ${({ theme }) => theme.colors.card};
  border: none;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
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
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
