import styled from "styled-components";

export const Container = styled.div`
  margin: 2px 0px;
  display: flex;
  align-items: center;
  flex-direction: ${({ isPrimary }) => (isPrimary ? "row" : "row-reverse")};
`;

export const Avatar = styled.div`
  background: ${({ theme }) => theme.colors.messages};
  background-image: ${({ isPrimary }) =>
    isPrimary ? `url('profile_anim.jpg')` : `url('avatar.jpeg')`};
  background-repeat: no-repeat;
  background-size: cover;
  width: 42px;
  min-width: 42px;
  height: 42px;
  border-radius: 50%;
`;

export const TextArea = styled.div`
  background: ${({ isPrimary, theme }) =>
    isPrimary ? theme.colors.primary : theme.colors.messages};
  font-weight: 400;
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.background : theme.colors.title};
  border-radius: 20px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  min-height: 32px;
  margin-left: ${({ hasAvatar, isPrimary }) =>
    !hasAvatar && isPrimary ? "52px" : "10px"};
  margin-right: ${({ hasAvatar, isPrimary }) =>
    !hasAvatar && !isPrimary ? "52px" : "10px"};
`;

export const Image = styled.div`
  background: ${({ isPrimary, theme }) =>
    isPrimary ? theme.colors.primary : theme.colors.messages};
  background: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 335px;
  height: 200px;
  border-radius: 20px;
  margin-left: ${({ hasAvatar, isPrimary }) =>
    !hasAvatar && isPrimary ? "52px" : "10px"};
  margin-right: ${({ hasAvatar, isPrimary }) =>
    !hasAvatar && !isPrimary ? "52px" : "10px"};
`;

export const MediaLink = styled.a`
  text-decoration: none;
`;

export const MediaIcon = styled.div`
  background: ${({ theme }) => theme.colors.messages};
  background: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 29px;
  height: 29px;
  min-width: 29px;
  border-radius: 20px;
  margin-right: 7px;
`;

export const MediaCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.secondary};
  width: 185px;
  height: 115px;
  border-radius: 20px;
  padding: 10px;
  margin: 0px 5px 5px 0px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryAlt};
  }
`;

export const MediaTitle = styled.div`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.sizes.textSmall};
  display: flex;
  align-items: center;
`;

export const MediaText = styled.div`
  font-weight: normal;
  font-size: ${({ theme }) => theme.sizes.textSmall};
  color: ${({ theme }) => theme.colors.title};
`;

export const MediaTitleTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 9px;
`;

export const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${({ hasAvatar }) => (!hasAvatar ? "52px" : "10px")};
  flex-wrap: wrap;
`;
