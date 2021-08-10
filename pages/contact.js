import { useEffect } from "react";
import { connect } from "react-redux";
import { addMessage, setIsLoading } from "../config/messagesSlice";
import messageParser from "../helpers/messageParser";
import localization from "../lang/pages/ContactPageLocalization";
import { useIntl } from "react-intl";
import { MESSAGE_WAIT } from "../constants/time";
import PageHeader from "../components/PageHeader";
import ContactComponent from "../components/Contact";
import { Content, SocialList } from "../styles/pages/ContactPage";

function Contact({ addMessage, setIsLoading, messages }) {
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
      <PageHeader title={`${formatMessage(localization.title)} 💬`}>
        {formatMessage(localization.header)}
      </PageHeader>
      <SocialList>
        <ContactComponent
          image="social/github.svg"
          title="Github"
          url="https://github.com/ThalesLudwig/"
        >
          {formatMessage(localization.github)}
        </ContactComponent>
        <ContactComponent
          image="social/linkedin.svg"
          title="Linkedin"
          url="https://www.linkedin.com/in/thalesludwig/"
        >
          {formatMessage(localization.linkedin)}
        </ContactComponent>
        <ContactComponent
          image="social/dribbble.svg"
          title="Dribbble"
          url="https://dribbble.com/thalesludwig"
        >
          {formatMessage(localization.dribbble)}
        </ContactComponent>
        <ContactComponent
          image="social/instagram.png"
          title="Instagram"
          url="https://www.instagram.com/thalesludwig/"
        >
          {formatMessage(localization.instagram)}
        </ContactComponent>
        <ContactComponent
          image="social/twitter.png"
          title="Twitter"
          url="https://twitter.com/ThalesLudwig"
        >
          {formatMessage(localization.twitter)}
        </ContactComponent>
        <ContactComponent
          image="social/coffee.png"
          title="Buy me a Coffee"
          url="https://www.buymeacoffee.com/thalesludwig"
        >
          {formatMessage(localization.coffee)}
        </ContactComponent>
        <ContactComponent
          image="social/facebook.svg"
          title="Facebook"
          url="https://www.facebook.com/thales.ludwig/"
        >
          {formatMessage(localization.facebook)}
        </ContactComponent>
      </SocialList>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
