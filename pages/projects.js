import { useEffect } from "react";
import { connect } from "react-redux";
import { addMessage } from "../config/messagesSlice";
import messageParser from "../helpers/messageParser";
import localization from "../lang/pages/ProjectsPageLocalization";
import { useIntl } from "react-intl";

function Projects({ addMessage, messages }) {
  const { formatMessage } = useIntl();

  useEffect(() => {
    const greetingMessages = [
      formatMessage(localization.firstGreeting),
      formatMessage(localization.secondGreeting),
      formatMessage(localization.thirdGreeting),
      formatMessage(localization.fourthGreeting),
    ];
    if (messages[messages.length - 1].text !== greetingMessages[3]) {
      addMessage(messageParser(greetingMessages, messages));
    }
  }, []);

  return <div>Projects</div>;
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.value,
  };
};

const mapDispatchToProps = {
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
