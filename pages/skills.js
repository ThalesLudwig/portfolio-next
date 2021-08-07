import { useEffect } from "react";
import { connect } from "react-redux";
import { addMessage } from "../config/messagesSlice";
import messageParser from "../helpers/messageParser";
import localization from "../lang/pages/SkillsPageLocalization";
import { useIntl } from "react-intl";

function Skills({ addMessage, messages }) {
  const { formatMessage } = useIntl();

  useEffect(() => {
    const greetingMessages = [
      formatMessage(localization.firstGreeting),
      formatMessage(localization.secondGreeting),
      formatMessage(localization.thirdGreeting),
    ];
    addMessage(messageParser(greetingMessages, messages));
  }, []);

  return <div>Skills</div>;
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.value,
  };
};

const mapDispatchToProps = {
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
