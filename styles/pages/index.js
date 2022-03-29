import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { MOBILE, TABLET } from "../../constants/screen";
import { SHADOWS } from "../../constants/shadow";
import { dark } from "../theme";

const fadeInAnimation = keyframes`${fadeIn}`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  animation: 1s ${fadeInAnimation};
  max-width: 1120px;
`;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${TABLET}) {
    flex-direction: row;
  }

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
  }
`;

export const ProfileImage = styled.img`
  margin: 20px 0;
  border-radius: 50%;
  box-shadow: ${SHADOWS.default};

  @media (max-width: ${MOBILE}) {
    margin-left: 20px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: ${TABLET}) {
    flex-direction: column;
  }

  @media (max-width: ${MOBILE}) {
    flex-direction: row;
    width: 100vw;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0px 20px;
    margin-left: 0;

    &::-webkit-scrollbar-track {
      display: none;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
    }
  }
`;

export const ProfileCard = styled.div`
  background-image: linear-gradient(#222126, rgba(130, 87, 230, 0.73)), url("about/background.jpeg");
  background-color: ${({ theme }) => theme.colors.card};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  padding: 25px;
  max-width: 700px;
  box-shadow: ${SHADOWS.default};

  @media (max-width: ${TABLET}) {
    max-width: unset;
    margin: 0 20px;
    height: 458px;
  }
`;

export const Greetings = styled.div`
  font-size: ${({ theme }) => theme.sizes.title};
  color: ${dark.colors.title};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.sizes.title};
  color: ${({ theme }) => theme.colors.title};
`;

export const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: ${dark.colors.title};
  margin-top: 20px;
`;

export const HireMe = styled.div`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: #222126;
  background-color: #ffffff;
  margin-top: 20px;
  width: max-content;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: ${TABLET}) {
    display: none;
  }
`;

export const SimulateInterview = styled.div`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: #222126;
  background-color: #ffffff;
  margin-top: 20px;
  width: max-content;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;

  @media (min-width: ${TABLET}) {
    display: none;
  }
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  flex-wrap: nowrap;

  @media (max-width: ${TABLET}) {
    flex-wrap: wrap;
  }
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const EducationSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  @media (max-width: ${MOBILE}) {
    margin: 0;
  }
`;

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const ProjectsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;

  @media (max-width: ${TABLET}) {
    flex-wrap: wrap;
  }
`;

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const ProjectsColumn = styled.div`
  display: flex;
  flex-direction: column;
  border-left: ${({ hasBorder, theme }) => (hasBorder ? `1px solid ${theme.colors.divisor}` : "none")};
  border-right: ${({ hasBorder, theme }) => (hasBorder ? `1px solid ${theme.colors.divisor}` : "none")};
  flex: 1;
  padding-right: ${({ withPaddingRight }) => (withPaddingRight ? "20px" : "0")};
  padding-left: ${({ withPaddingLeft }) => (withPaddingLeft ? "20px" : "0")};

  @media (max-width: ${TABLET}) {
    border: none;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  align-items: center;

  @media (max-width: ${TABLET}) {
    align-items: flex-start;
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 520px;
  margin-top: 15px;

  @media (max-width: ${MOBILE}) {
    max-width: unset;
  }
`;

export const SkillListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${TABLET}) {
    justify-content: center;
  }

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    padding: 0px 20px 80px 20px;
  }
`;

export const EducationRow = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${MOBILE}) {
    width: 100vw;
    flex-wrap: nowrap;
    overflow-y: auto;
    padding: 0px 20px;
    margin: 20px 0;

    &::-webkit-scrollbar-track {
      display: none;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
    }
  }
`;
