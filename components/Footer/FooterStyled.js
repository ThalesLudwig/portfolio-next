import styled from "styled-components";
import { TABLET, MOBILE } from "../../constants/screen";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.divisor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media (min-width: ${TABLET}) {
    display: none;
  }
`;

export const Avatar = styled.img.attrs({
  src: "profile_anim.jpg",
})`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

export const AvatarLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.sizes.text};
  margin: 0px 10px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryAlt};
  }
`;

export const FlagImage = styled.img`
  border-radius: 6px;
  cursor: pointer;
  border: 3px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.title : theme.colors.background};
  margin-left: 5px;
`;

export const FlagWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${TABLET}) {
    display: none;
  }
  @media (max-width: ${MOBILE}) {
    display: flex;
  }
`;
