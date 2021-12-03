import { useEffect } from "react";
import { connect } from "react-redux";
import { addMessage, setIsLoading } from "../config/messagesSlice";
import messageParser from "../helpers/messageParser";
import localization from "../lang/pages/CareerPageLocalization";
import { useIntl } from "react-intl";
import { MESSAGE_WAIT } from "../constants/time";
import PageHeader from "../components/PageHeader";
import Job from "../components/Job";
import {
  Content,
  Timeline,
  Line,
  TimeStop,
  TimeWrapper,
  Time,
} from "../styles/pages/CareersPage";

function Career({ addMessage, setIsLoading, messages }) {
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
      <PageHeader title={formatMessage(localization.title)}>
        {formatMessage(localization.header)}
      </PageHeader>
      <Timeline>
        <Line isLast>
          <TimeWrapper isLast>
            <TimeStop isLast />
            <Time isLast>12/2019</Time>
          </TimeWrapper>
        </Line>
        <Job
          title={formatMessage(localization.frontEndEngineer)}
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
          title={formatMessage(localization.seniorFullStack)}
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
          title={formatMessage(localization.seniorFullStack)}
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
          title={formatMessage(localization.devLead)}
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
          title={formatMessage(localization.developer)}
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
          title={formatMessage(localization.juniorDeveloper)}
          company="Dell Technologies"
          pills={["Java", "PL/SQL"]}
          image="careers/dell.jpg"
          url="https://www.linkedin.com/company/delltechnologies/"
        />
      </Timeline>
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

export default connect(mapStateToProps, mapDispatchToProps)(Career);
