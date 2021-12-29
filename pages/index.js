import React, { useRef, useState } from "react";
import localization from "../lang/pages/MainLocalization";
import localizationContact from "../lang/pages/ContactPageLocalization";
import localizationProjects from "../lang/pages/ProjectsPageLocalization";
import localizationSkills from "../lang/pages/SkillsPageLocalization";
import localizationEducation from "../lang/pages/EducationPageLocalization";
import localizationCareer from "../lang/pages/CareerPageLocalization";
import localizationDesigns from "../lang/pages/DesignsPageLocalization";
import localizationArticles from "../lang/pages/ArticlesPageLocalization";
import { useIntl } from "react-intl";
import Chat from "../components/Chat";
import Link from "next/link";
import AboutCard from "../components/AboutCard";
import PageHeader from "../components/PageHeader";
import ContactComponent from "../components/Contact";
import ProjectCard from "../components/Project";
import Skill from "../components/Skill";
import EducationCard from "../components/EducationCard";
import Job from "../components/Job";
import Article from "../components/Article";
import DesignCard from "../components/Design";
import GamesModal from "../components/GamesModal/GamesModal";
import RemoteModal from "../components/RemoteModal/RemoteModal";
import PersonalModal from "../components/PersonalModal/PersonalModal";
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
  CareerSection,
  CareerHobbiesRow,
  Timeline,
  Line,
  TimeStop,
  TimeWrapper,
  Time,
  ArticlesList,
  DesignList,
} from "../styles/pages";

export default function Home() {
  const { formatMessage } = useIntl();
  const contactSectionRef = useRef(null);
  const [isPersonalModalOpen, setIsPersonalModalOpen] = useState(false);
  const [isRemoteModalOpen, setIsRemoteModalOpen] = useState(false);
  const [isGamesModalOpen, setIsGamesModalOpen] = useState(false);

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
              <SimulateInterview>
                {formatMessage(localization.simulate).toLocaleUpperCase()}
              </SimulateInterview>
            </Link>
            <HireMe
              onClick={() => contactSectionRef?.current?.scrollIntoView()}
            >
              {formatMessage(localization.hireMe).toLocaleUpperCase()}
            </HireMe>
          </ProfileCard>
          <CardWrapper>
            <AboutCard
              title={formatMessage(localization.cardOne)}
              image="about/about_card_1.png"
              onClick={() => setIsPersonalModalOpen(true)}
            />
            <AboutCard
              title={formatMessage(localization.cardTwo)}
              image="about/about_card_2.png"
              onClick={() => setIsRemoteModalOpen(true)}
            />
            <AboutCard
              title={formatMessage(localization.cardThree)}
              image="about/about_card_3.png"
              onClick={() => setIsGamesModalOpen(true)}
            />
          </CardWrapper>
        </Content>
        <Chat />
      </AboutSection>
      <ContactSection ref={contactSectionRef}>
        <PageHeader title={formatMessage(localizationContact.title)} icon="💬">
          {formatMessage(localizationContact.header)}
        </PageHeader>
        <ContactRow>
          <ContactComponent
            image="social/github.svg"
            title="Github"
            url="https://github.com/ThalesLudwig/"
          >
            {formatMessage(localizationContact.github)}
          </ContactComponent>
          <ContactComponent
            image="social/linkedin.svg"
            title="Linkedin"
            url="https://www.linkedin.com/in/thalesludwig/"
          >
            {formatMessage(localizationContact.linkedin)}
          </ContactComponent>
          <ContactComponent
            image="social/dribbble.svg"
            title="Dribbble"
            url="https://dribbble.com/thalesludwig"
          >
            {formatMessage(localizationContact.dribbble)}
          </ContactComponent>
          <ContactComponent
            image="social/medium.jpeg"
            title="Medium"
            url="https://medium.com/@thalesludwig"
          >
            {formatMessage(localizationContact.medium)}
          </ContactComponent>
          <ContactComponent
            image="social/coffee.png"
            title="Buy me a Coffee"
            url="https://www.buymeacoffee.com/thalesludwig"
          >
            {formatMessage(localizationContact.coffee)}
          </ContactComponent>
        </ContactRow>
      </ContactSection>
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
                pills={["React", "NextJS", "Redux"]}
                title="portfolio-next"
                url="https://github.com/ThalesLudwig/portfolio-next"
              >
                {formatMessage(localizationProjects.projectPortfolio)}
              </ProjectCard>
              <ProjectCard
                pills={["React", "Socket-io", "axios"]}
                title="coffeegram-web"
                url="https://github.com/ThalesLudwig/coffeegram-web"
              >
                {formatMessage(localizationProjects.projectCoffegramWeb)}
              </ProjectCard>
            </ProjectList>
          </ProjectsColumn>
          <ProjectsColumn hasBorder withPaddingRight withPaddingLeft>
            <PageHeader title="React Native" />
            <ProjectList>
              <ProjectCard
                pills={["React Native", "Expo"]}
                title="paguei-rn"
                url="https://github.com/ThalesLudwig/paguei-rn"
              >
                {formatMessage(localizationProjects.projectPaguei)}
              </ProjectCard>
              <ProjectCard
                pills={["React Native", "Expo"]}
                title="Paguei"
                url="https://play.google.com/store/apps/details?id=com.valentini.ludwig.thales"
                image="social/playstore.jpeg"
              >
                {formatMessage(localizationProjects.projectPagueiApp)}
              </ProjectCard>
              <ProjectCard
                pills={["React Native", "Expo"]}
                title="coffeegram-mobile"
                url="https://github.com/ThalesLudwig/coffeegram-mobile"
              >
                {formatMessage(localizationProjects.projectCoffegramMobile)}
              </ProjectCard>
            </ProjectList>
          </ProjectsColumn>
          <ProjectsColumn withPaddingLeft>
            <PageHeader title="NodeJS" />
            <ProjectList>
              <ProjectCard
                pills={["Node", "Express"]}
                title="aiden"
                url="https://github.com/ThalesLudwig/aiden"
              >
                {formatMessage(localizationProjects.projectAiden)}
              </ProjectCard>
              <ProjectCard
                pills={["Node", "mongoose", "socket"]}
                title="coffeegram-server"
                url="https://github.com/ThalesLudwig/coffeegram-server"
              >
                {formatMessage(localizationProjects.projectCoffeegramServer)}
              </ProjectCard>
            </ProjectList>
          </ProjectsColumn>
        </ProjectsRow>
      </ProjectsSection>
      <SkillsSection>
        <PageHeader title={formatMessage(localizationSkills.title)} icon="🛠️">
          {formatMessage(localizationSkills.header)}
        </PageHeader>
        <SkillListWrapper>
          <SkillList>
            <Skill label="Javascript" />
            <Skill label="React" />
            <Skill label="Redux" progress={95} />
            <Skill label="React Native" progress={90} />
            <Skill label="Typescript" progress={85} />
            <Skill label="Node" progress={80} />
            <Skill label="Angular" progress={80} />
            <Skill label="Vue" progress={65} />
            <Skill label="Flutter" progress={20} />
          </SkillList>
          <SkillList>
            <Skill label="HTML" isAlt />
            <Skill label="CSS" isAlt progress={90} />
            <Skill label="SCSS" isAlt progress={85} />
            <Skill label="Git" isAlt progress={80} />
            <Skill label="Jest" isAlt progress={80} />
            <Skill label="Jasmine" isAlt progress={70} />
            <Skill label="Docker" isAlt progress={70} />
            <Skill label="Cypress" isAlt progress={30} />
          </SkillList>
        </SkillListWrapper>
      </SkillsSection>
      <EducationSection>
        <PageHeader
          title={formatMessage(localizationEducation.title)}
          icon="📚"
        >
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
            status="90%"
            subtitle={formatMessage(localizationEducation.degreeSpecialization)}
            school={formatMessage(localizationEducation.schoolTitleUniritter)}
            location={formatMessage(localizationEducation.country)}
            logo="education/uniritter.png"
            icon="education/clock.svg"
          />
          <EducationCard
            image="education/education_3.png"
            title={formatMessage(localizationEducation.courseMobile)}
            status="90%"
            subtitle={formatMessage(localizationEducation.degreeSpecialization)}
            school={formatMessage(localizationEducation.schoolTitleUniritter)}
            location={formatMessage(localizationEducation.country)}
            logo="education/uniritter.png"
            icon="education/clock.svg"
          />
        </EducationRow>
      </EducationSection>
      <CareerSection>
        <CareerHobbiesRow>
          <ProjectsColumn>
            <PageHeader
              title={formatMessage(localizationCareer.title)}
              icon="💼"
            >
              {formatMessage(localizationCareer.header)}
            </PageHeader>
            <Timeline>
              <Line isLast>
                <TimeWrapper isLast>
                  <TimeStop isLast />
                  <Time isLast>12/2019</Time>
                </TimeWrapper>
              </Line>
              <Job
                title={formatMessage(localizationCareer.frontEndEngineer)}
                company="X-Team"
                pills={["React", "Redux", "Jest", "Storyboard", "GraphQL"]}
                image="careers/xteam.jpg"
                url="https://www.linkedin.com/company/x-team"
              />
              <Line>
                <TimeWrapper>
                  <TimeStop />
                  <Time>07/2019</Time>
                </TimeWrapper>
              </Line>
              <Job
                title={formatMessage(localizationCareer.seniorFullStack)}
                company="Sensedia"
                pills={["React", "Redux", "Docker", "MongoDB"]}
                image="careers/sensedia.jpg"
                url="https://www.linkedin.com/company/sensedia/"
              />
              <Line>
                <TimeWrapper>
                  <TimeStop />
                  <Time>11/2018</Time>
                </TimeWrapper>
              </Line>
              <Job
                title={formatMessage(localizationCareer.seniorFullStack)}
                company="Aptivison"
                pills={["VueJS", "PHP", "Docker", "PostgreSQL", "JQuery"]}
                image="careers/aptvision.jpg"
                url="https://www.linkedin.com/company/aptvision/"
              />
              <Line>
                <TimeWrapper>
                  <TimeStop />
                  <Time>07/2017</Time>
                </TimeWrapper>
              </Line>
              <Job
                title={formatMessage(localizationCareer.devLead)}
                company="Datum TI"
                pills={["Angular", "Node", "PHP", "Xamarin", "MySQL"]}
                image="careers/datum.jpg"
                url="https://www.linkedin.com/company/datumti/"
              />
              <Line>
                <TimeWrapper>
                  <TimeStop />
                  <Time>03/2016</Time>
                </TimeWrapper>
              </Line>
              <Job
                title={formatMessage(localizationCareer.developer)}
                company="Getnet"
                pills={["Java", "PHP", "PL/SQL"]}
                image="careers/getnet.jpg"
                url="https://www.linkedin.com/company/getnet-br/"
              />
              <Line>
                <TimeWrapper>
                  <TimeStop />
                  <Time>08/2015</Time>
                </TimeWrapper>
              </Line>
              <Job
                title={formatMessage(localizationCareer.juniorDeveloper)}
                company="Dell Technologies"
                pills={["Java", "PL/SQL"]}
                image="careers/dell.jpg"
                url="https://www.linkedin.com/company/delltechnologies/"
              />
            </Timeline>
          </ProjectsColumn>
          <ProjectsColumn>
            <PageHeader
              title={formatMessage(localizationArticles.title)}
              icon="📰"
            >
              {formatMessage(localizationArticles.header)}
            </PageHeader>
            <ArticlesList>
              <Article
                image="articles/article_1.jpeg"
                title="The Mid-twenties Crisis"
                time="4"
                url="https://medium.com/@thalesludwig/the-mid-twenties-crisis-186e87ed849e"
              />
              <Article
                image="articles/article_2.jpeg"
                title="You’re a Slave of Your Money"
                time="4"
                url="https://medium.com/@thalesludwig/youre-a-slave-of-your-money-797bbaf59c35"
              />
              <Article
                image="articles/article_3.jpeg"
                title="What They Didn’t Tell You About the Time"
                time="4"
                url="https://medium.com/@thalesludwig/what-they-didnt-tell-you-about-time-8b742ad4065e"
              />
            </ArticlesList>
            <PageHeader
              title={formatMessage(localizationDesigns.title)}
              icon="✍️"
            >
              {formatMessage(localizationDesigns.header)}
            </PageHeader>
            <DesignList>
              <DesignCard
                image="designs/design_1.png"
                title="Developer-friendly Porfolio"
                url="https://dribbble.com/shots/16123641-Developer-friendly-Porfolio"
              />
              <DesignCard
                image="designs/design_2.png"
                title="Socialfy - Developer-friendly social network"
                url="https://dribbble.com/shots/16124088-Socialfy-Developer-friendly-social-network"
              />
            </DesignList>
          </ProjectsColumn>
        </CareerHobbiesRow>
      </CareerSection>
      <PersonalModal
        isOpen={isPersonalModalOpen}
        onClose={() => setIsPersonalModalOpen(false)}
      />
      <RemoteModal
        isOpen={isRemoteModalOpen}
        onClose={() => setIsRemoteModalOpen(false)}
      />
      <GamesModal
        isOpen={isGamesModalOpen}
        onClose={() => setIsGamesModalOpen(false)}
      />
    </Main>
  );
}
