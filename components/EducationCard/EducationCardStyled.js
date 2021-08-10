import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 410px;
  width: 210px;
  min-width: 210px;
  margin-right: 10px;
  cursor: default;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 356px;
  background-color: ${({ theme }) => theme.colors.card};
  font-size: ${({ theme }) => theme.sizes.text};
  border-radius: 0px 0px 20px 20px;
`;

export const ContentWrapper = styled.div`
  padding: 12px;
`;

export const ImageBackground = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-color: ${({ theme }) => theme.colors.card};
  height: 247px;
  width: 210px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px 20px 0px 0px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.sizes.text};
`;

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.textSmall};
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.sizes.textSmall};
`;

export const SchoolWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`;

export const School = styled.div`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.sizes.textSmall};
`;

export const Location = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.textSmall};
`;

export const SchoolLocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Logo = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-color: ${({ theme }) => theme.colors.background};
  height: 30px;
  width: 30px;
  min-width: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StatusIcon = styled.img`
  margin-right: 5px;
`;
