import { useEffect } from "react";
import { connect } from "react-redux";
import { addMessage, setIsLoading } from "../config/messagesSlice";
import messageParser from "../helpers/messageParser";
import localization from "../lang/pages/ProjectsPageLocalization";
import { useIntl } from "react-intl";
import { MESSAGE_WAIT } from "../constants/time";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/Project";
import {
  Content,
  ProjectList,
  Title,
  ProjectRow,
} from "../styles/pages/ProjectsPage";

function Projects({ addMessage, setIsLoading, messages }) {
  const { formatMessage } = useIntl();

  useEffect(() => {
    const greetingMessages = [
      formatMessage(localization.firstGreeting),
      formatMessage(localization.secondGreeting),
      formatMessage(localization.thirdGreeting),
      formatMessage(localization.fourthGreeting),
    ];
    if (messages[messages.length - 1].text !== greetingMessages[3]) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        addMessage(
          messageParser({ text: formatMessage(localization.about) }, messages),
        );
        addMessage(messageParser(greetingMessages, messages));
      }, MESSAGE_WAIT);
    }
  }, []);

  return (
    <Content>
      <PageHeader title={`${formatMessage(localization.title)} 💻`}>
        {formatMessage(localization.header)}
      </PageHeader>
      <ProjectList>
        <Title>React</Title>
        <ProjectRow>
          <ProjectCard
            pills={["React", "NextJS", "Redux"]}
            title="portfolio-next"
            url="https://github.com/ThalesLudwig/portfolio-next"
          >
            {formatMessage(localization.projectPortfolio)}
          </ProjectCard>
          <ProjectCard
            pills={["React", "Socket-io", "axios"]}
            title="coffeegram-web"
            url="https://github.com/ThalesLudwig/coffeegram-web"
          >
            {formatMessage(localization.projectCoffegramWeb)}
          </ProjectCard>
        </ProjectRow>
        <Title>React Native</Title>
        <ProjectRow>
          <ProjectCard
            pills={["React Native", "Expo"]}
            title="paguei-rn"
            url="https://github.com/ThalesLudwig/paguei-rn"
          >
            {formatMessage(localization.projectPaguei)}
          </ProjectCard>

          <ProjectCard
            pills={["React Native", "Expo"]}
            title="Paguei"
            url="https://play.google.com/store/apps/details?id=com.valentini.ludwig.thales"
            image="social/playstore.jpeg"
          >
            {formatMessage(localization.projectPagueiApp)}
          </ProjectCard>

          <ProjectCard
            pills={["React Native", "Expo"]}
            title="coffeegram-mobile"
            url="https://github.com/ThalesLudwig/coffeegram-mobile"
          >
            {formatMessage(localization.projectCoffegramMobile)}
          </ProjectCard>
        </ProjectRow>
        <Title>Node</Title>
        <ProjectRow>
          <ProjectCard
            pills={["Node", "Express"]}
            title="aiden"
            url="https://github.com/ThalesLudwig/aiden"
          >
            {formatMessage(localization.projectAiden)}
          </ProjectCard>
          <ProjectCard
            pills={["Node", "Express", "mongoose", "socket"]}
            title="coffeegram-server"
            url="https://github.com/ThalesLudwig/coffeegram-server"
          >
            {formatMessage(localization.projectCoffeegramServer)}
          </ProjectCard>
        </ProjectRow>
        <Title>Angular</Title>
        <ProjectRow>
          <ProjectCard
            pills={["Angular", "i18n", "Ng Universal"]}
            title="Condofy"
            image="icons/lock.svg"
            isClosed
          >
            {formatMessage(localization.projectCondofy)}
          </ProjectCard>
        </ProjectRow>
        <Title>Vue</Title>
        <ProjectRow>
          <ProjectCard
            pills={["VueJS", "Vuex", "Vue Router"]}
            title="swapi-web-vue"
            url="https://github.com/ThalesLudwig/swapi-web-vue"
          >
            {formatMessage(localization.projectSwapi)}
          </ProjectCard>
        </ProjectRow>
      </ProjectList>
    </Content>
  );
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.value,
  };
};

const mapDispatchToProps = {
  addMessage,
  setIsLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
