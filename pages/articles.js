import { useEffect } from "react";
import { connect } from "react-redux";
import { addMessage, setIsLoading } from "../config/messagesSlice";
import messageParser from "../helpers/messageParser";
import localization from "../lang/pages/ArticlesPageLocalization";
import { useIntl } from "react-intl";
import { MESSAGE_WAIT } from "../constants/time";
import PageHeader from "../components/PageHeader";
import Article from "../components/Article";
import { Content, ArticlesList } from "../styles/pages/ArticlesPage";

function Articles({ addMessage, setIsLoading, messages }) {
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

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
