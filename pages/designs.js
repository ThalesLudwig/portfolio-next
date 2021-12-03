import { useEffect } from "react";
import { connect } from "react-redux";
import { addMessage, setIsLoading } from "../config/messagesSlice";
import messageParser from "../helpers/messageParser";
import localization from "../lang/pages/DesignsPageLocalization";
import { useIntl } from "react-intl";
import { MESSAGE_WAIT } from "../constants/time";
import PageHeader from "../components/PageHeader";
import { Content, DesignList } from "../styles/pages/DesignsPage";
import DesignCard from "../components/Design";

function Designs({ addMessage, setIsLoading, messages }) {
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

export default connect(mapStateToProps, mapDispatchToProps)(Designs);
