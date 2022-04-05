import React, { useRef } from "react";
import localization from "../lang/pages/MainLocalization";
import localizationContact from "../lang/pages/ContactPageLocalization";
import localizationProjects from "../lang/pages/ProjectsPageLocalization";
import localizationSkills from "../lang/pages/SkillsPageLocalization";
import localizationEducation from "../lang/pages/EducationPageLocalization";
import { useIntl } from "react-intl";
import Chat from "../components/Chat";
import Link from "next/link";
import AboutCard from "../components/AboutCard";
import PageHeader from "../components/PageHeader";
import ContactComponent from "../components/Contact";
import ProjectCard from "../components/Project";
import Skill from "../components/Skill";
import EducationCard from "../components/EducationCard";
import {
  Main,
  AboutSection,
  Content,
  CardWrapper,
  ProfileImage,
  ProfileCard,
  Greetings,
  SimulateInterview,
  Subtitle,
  HireMe,
  ContactSection,
  ContactRow,
  ProjectsSection,
  ProjectsRow,
  ProjectsColumn,
  ProjectList,
  SkillsSection,
  SkillListWrapper,
  SkillList,
  EducationSection,
  EducationRow,
  ChatWrapper,
} from "../styles/pages";

export default function Home() {
  const { formatMessage } = useIntl();
  const contactSectionRef = useRef(null);

  return (
    <Main>
      <AboutSection>
        <Content>
          <ProfileCard>
            <ProfileImage width={90} height={90} src="profile_crop.jpg" />
            <Greetings>{formatMessage(localization.hello)}</Greetings>
            <Greetings>{`${formatMessage(localization.name)} 👋`}</Greetings>
            <Subtitle>{formatMessage(localization.header)}</Subtitle>
            <Link href="/chat">
              <SimulateInterview>{formatMessage(localization.simulate).toLocaleUpperCase()}</SimulateInterview>
            </Link>
            <HireMe onClick={() => contactSectionRef?.current?.scrollIntoView()}>
              {formatMessage(localization.hireMe).toLocaleUpperCase()}
            </HireMe>
          </ProfileCard>
          <CardWrapper>
            <AboutCard title={formatMessage(localization.cardOne)} image="about/about_card_1.png" />
            <AboutCard title={formatMessage(localization.cardTwo)} image="about/about_card_2.png" />
            <AboutCard title={formatMessage(localization.cardThree)} image="about/about_card_3.png" />
          </CardWrapper>
        </Content>
        <ChatWrapper>
          <Chat />
        </ChatWrapper>
      </AboutSection>
      <ContactSection ref={contactSectionRef}>
        <PageHeader title={formatMessage(localizationContact.title)} icon="💬">
          {formatMessage(localizationContact.header)}
        </PageHeader>
        <ContactRow>
          <ContactComponent image="social/github.svg" title="Github" url="https://github.com/ThalesLudwig/">
            {formatMessage(localizationContact.github)}
          </ContactComponent>
          <ContactComponent
            image="social/linkedin.svg"
            title="Linkedin"
            url="https://www.linkedin.com/in/thalesludwig/"
          >
            {formatMessage(localizationContact.linkedin)}
          </ContactComponent>
          <ContactComponent image="social/medium.jpeg" title="Medium" url="https://medium.com/@thalesludwig">
            {formatMessage(localizationContact.medium)}
          </ContactComponent>
          <ContactComponent
            image="social/coffee.png"
            title="Buy me a Coffee"
            url="https://www.buymeacoffee.com/thalesludwig"
          >
            {formatMessage(localizationContact.coffee)}
          </ContactComponent>
          <ContactComponent
            image="social/stackoverflow.png"
            title="Stack Overflow"
            url="https://stackoverflow.com/users/8103847/thales-ludwig"
          >
            {formatMessage(localizationContact.stackoverflow)}
          </ContactComponent>
        </ContactRow>
      </ContactSection>
      <SkillsSection>
        <PageHeader title={formatMessage(localizationSkills.title)} icon="🛠️">
          {formatMessage(localizationSkills.header)}
        </PageHeader>
        <SkillListWrapper>
          <SkillList>
            <Skill label="Javascript" />
            <Skill label="React" />
            <Skill label="Redux" progress={95} />
            <Skill label="Typescript" progress={95} />
            <Skill label="React Native" progress={90} />
            <Skill label="Node" progress={80} />
            <Skill label="Angular" progress={80} />
            <Skill label="Vue" progress={65} />
          </SkillList>
          <SkillList>
            <Skill label="HTML" isAlt />
            <Skill label="CSS" isAlt progress={90} />
            <Skill label="SCSS" isAlt progress={85} />
            <Skill label="Git" isAlt progress={80} />
            <Skill label="Jest" isAlt progress={80} />
            <Skill label="Docker" isAlt progress={70} />
            <Skill label="Cypress" isAlt progress={30} />
          </SkillList>
        </SkillListWrapper>
      </SkillsSection>
      <EducationSection>
        <PageHeader title={formatMessage(localizationEducation.title)} icon="📚">
          {formatMessage(localizationEducation.header)}
        </PageHeader>
        <EducationRow>
          <EducationCard
            image="education/education_1.png"
            title={formatMessage(localizationEducation.courseDevelopment)}
            status="100%"
            subtitle={formatMessage(localizationEducation.degreeGraduation)}
            school={formatMessage(localizationEducation.schoolTitleQI)}
            location={formatMessage(localizationEducation.country)}
            logo="education/qi.png"
            icon="education/check.svg"
          />
          <EducationCard
            image="education/education_2.png"
            title={formatMessage(localizationEducation.courseUx)}
            status="95%"
            subtitle={formatMessage(localizationEducation.degreeSpecialization)}
            school={formatMessage(localizationEducation.schoolTitleUniritter)}
            location={formatMessage(localizationEducation.country)}
            logo="education/uniritter.png"
            icon="education/clock.svg"
          />
          <EducationCard
            image="education/education_3.png"
            title={formatMessage(localizationEducation.courseMobile)}
            status="95%"
            subtitle={formatMessage(localizationEducation.degreeSpecialization)}
            school={formatMessage(localizationEducation.schoolTitleUniritter)}
            location={formatMessage(localizationEducation.country)}
            logo="education/uniritter.png"
            icon="education/clock.svg"
          />
        </EducationRow>
      </EducationSection>
      <ProjectsSection>
        <PageHeader title={formatMessage(localizationProjects.title)} icon="💻">
          {formatMessage(localizationProjects.header)}
        </PageHeader>
        <ProjectsRow>
          <ProjectsColumn withPaddingRight>
            <PageHeader title="React" />
            <ProjectList>
              <ProjectCard
                pills={["React", "Redux"]}
                title="Condofy"
                url="https://github.com/ThalesLudwig/condofy-web-react"
              >
                {formatMessage(localizationProjects.projectCondofy)}
              </ProjectCard>
              <ProjectCard
                pills={["React", "Redux"]}
                title="Condofy (Demo)"
                url="https://condofy.vercel.app/"
                image="social/star.png"
              >
                {formatMessage(localizationProjects.projectCondofyDemo)}
              </ProjectCard>
              <ProjectCard
                pills={["React", "NextJS", "Redux"]}
                title="portfolio-next"
                url="https://github.com/ThalesLudwig/portfolio-next"
              >
                {formatMessage(localizationProjects.projectPortfolio)}
              </ProjectCard>
            </ProjectList>
          </ProjectsColumn>
          <ProjectsColumn hasBorder withPaddingRight withPaddingLeft>
            <PageHeader title="React Native" />
            <ProjectList>
              <ProjectCard
                pills={["React Native", "Typescript", "Redux"]}
                title="journaly-mobile"
                url="https://github.com/ThalesLudwig/journaly-rn"
              >
                {formatMessage(localizationProjects.journalyCode)}
              </ProjectCard>
              <ProjectCard
                pills={["Expo"]}
                title="Journaly"
                url="https://play.google.com/store/apps/details?id=com.valentini.journaly"
                image="social/playstore.jpeg"
              >
                {formatMessage(localizationProjects.journalyMobile)}
              </ProjectCard>
              <ProjectCard
                pills={["React Native", "Javascript", "Redux"]}
                title="moneyger-rn"
                url="https://github.com/ThalesLudwig/moneyger-rn"
              >
                {formatMessage(localizationProjects.projectMoneyger)}
              </ProjectCard>
              <ProjectCard
                pills={["Expo"]}
                title="Moneyger"
                url="https://play.google.com/store/apps/details?id=com.valentini.ludwig.thales"
                image="social/playstore.jpeg"
              >
                {formatMessage(localizationProjects.projectMoneygerApp)}
              </ProjectCard>
            </ProjectList>
          </ProjectsColumn>
          <ProjectsColumn withPaddingLeft>
            <PageHeader title="NodeJS" />
            <ProjectList>
              <ProjectCard
                pills={["Node", "Express", "Javascript"]}
                title="aiden"
                url="https://github.com/ThalesLudwig/aiden"
              >
                {formatMessage(localizationProjects.projectAiden)}
              </ProjectCard>
              <ProjectCard
                pills={["Node", "Express", "Typescript"]}
                title="condofy-server"
                url="https://github.com/ThalesLudwig/condofy-server"
              >
                {formatMessage(localizationProjects.projectCondofyServer)}
              </ProjectCard>
            </ProjectList>
          </ProjectsColumn>
        </ProjectsRow>
      </ProjectsSection>
    </Main>
  );
}
