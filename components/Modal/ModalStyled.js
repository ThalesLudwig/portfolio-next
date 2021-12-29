import styled, { css, keyframes } from "styled-components";
import { pulse } from "react-animations";
import { FiX } from "react-icons/fi";

const pulseAnimation = keyframes`${pulse}`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  animation: 1s ${pulseAnimation};

  ${({ imageUrl }) =>
    imageUrl &&
    css`
      background-image: linear-gradient(rgba(130, 87, 230, 0.73), #222126),
        url(${imageUrl});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Hoverable = styled.div`
  display: flex;
  width: max-content;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  border-radius: 8px;
  padding: 5px 7px;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.CARD_ACCENT};
  }
`;

export const Close = styled(FiX).attrs({
  size: 20,
  color: "#FFFFFF",
})``;
