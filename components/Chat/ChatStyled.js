import styled from "styled-components";
import { TABLET } from "../../constants/screen";
import { SHADOWS } from "../../constants/shadow";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 550px;
  width: 405px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  box-shadow: ${SHADOWS.default};
  padding-top: 15px;

  @media (max-width: ${TABLET}) {
    height: calc(100vh - 80px);
    width: 100%;
  }
`;

export const Input = styled.div`
  padding: 10px 25px;
  background-color: ${({ theme }) => theme.colors.card};
  border: none;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 10px;
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
  overflow-y: auto;
  padding: 15px 30px;
  flex: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SuggestionArea = styled.div`
  padding: 5px 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Suggestion = styled.span`
  padding: 3px 7px;
  border-radius: 7px;
  cursor: pointer;
  margin: 0 5px 5px 0;
  font-size: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
