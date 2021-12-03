import { useEffect } from "react";
import { connect } from "react-redux";
import { addMessage, setIsLoading } from "../config/messagesSlice";
import messageParser from "../helpers/messageParser";
import localization from "../lang/pages/SkillsPageLocalization";
import { useIntl } from "react-intl";
import { MESSAGE_WAIT } from "../constants/time";
import PageHeader from "../components/PageHeader";
import Skill from "../components/Skill";
import {
  Content,
  SkillList,
  SkillListWrapper,
} from "../styles/pages/SkillsPage";

function Skills({ addMessage, setIsLoading, messages }) {
  const { formatMessage } = useIntl();

  useEffect(() => {
    const greetingMessages = [
      formatMessage(localization.firstGreeting),
      formatMessage(localization.secondGreeting),
      formatMessage(localization.thirdGreeting),
    ];
    if (messages[messages.length - 1].text !== greetingMessages[2]) {
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
          <Skill label="Testing" isAlt progress={80} />
        </SkillList>
      </SkillListWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
