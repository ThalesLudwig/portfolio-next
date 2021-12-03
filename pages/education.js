import { useEffect } from "react";
import { connect } from "react-redux";
import { addMessage, setIsLoading } from "../config/messagesSlice";
import messageParser from "../helpers/messageParser";
import localization from "../lang/pages/EducationPageLocalization";
import { useIntl } from "react-intl";
import { MESSAGE_WAIT } from "../constants/time";
import PageHeader from "../components/PageHeader";
import EducationCard from "../components/EducationCard";
import { Content, Cards } from "../styles/pages/Education";

function Education({ addMessage, setIsLoading, messages }) {
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
      <Cards>
        <EducationCard
          image="education/education_1.png"
          title={formatMessage(localization.courseDevelopment)}
          status={formatMessage(localization.statusCompleted)}
          subtitle={formatMessage(localization.degreeGraduation)}
          school={formatMessage(localization.schoolTitleQI)}
          location={formatMessage(localization.country)}
          logo="education/qi.png"
          icon="education/check.svg"
        />
        <EducationCard
          image="education/education_2.png"
          title={formatMessage(localization.courseUx)}
          status={formatMessage(localization.statusOngoing)}
          subtitle={formatMessage(localization.degreeSpecialization)}
          school={formatMessage(localization.schoolTitleUniritter)}
          location={formatMessage(localization.country)}
          logo="education/uniritter.png"
          icon="education/clock.svg"
        />
        <EducationCard
          image="education/education_3.png"
          title={formatMessage(localization.courseMobile)}
          status={formatMessage(localization.statusOngoing)}
          subtitle={formatMessage(localization.degreeSpecialization)}
          school={formatMessage(localization.schoolTitleUniritter)}
          location={formatMessage(localization.country)}
          logo="education/uniritter.png"
          icon="education/clock.svg"
        />
      </Cards>
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

export default connect(mapStateToProps, mapDispatchToProps)(Education);
