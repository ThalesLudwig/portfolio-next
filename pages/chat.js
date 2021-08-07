import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Message from "../components/Message/Message";
import MessageService from "../services/messageService";
import messageParser from "../helpers/messageParser";
import loadingMessage from "../helpers/loadingMessage";
import localization from "../lang/pages/ChatPageLocalization";
import { useIntl } from "react-intl";
import { addMessage } from "../config/messagesSlice";
import {
  Container,
  Input,
  NativeInput,
  ScrollPanel,
  SendButton,
} from "../styles/pages/ChatPage";

function Chat({ location, messages, addMessage }) {
  const { formatMessage } = useIntl();
  const scrollPanelRef = useRef(null);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (messages.length === 0) {
      addMessage(
        messageParser([
          formatMessage(localization.firstGreeting),
          formatMessage(localization.secondGreeting),
          formatMessage(localization.thirdGreeting),
        ]),
      );
    }
  }, [location]);

  useEffect(() => {
    if (scrollPanelRef) {
      scrollPanelRef.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  const submitForm = (event) => {
    event && event.preventDefault();
    if (input.trim().length > 0) {
      const lastMessage = messages[messages.length - 1];
      const inputMessage = {
        id: new Date().getTime(),
        text: input.trim(),
        isPrimary: false,
        hasAvatar: lastMessage.isPrimary,
      };
      addMessage(inputMessage);
      setInput("");
      setIsLoading(true);
      MessageService.get(input, location)
        .then((res) => {
          const newMessages = messageParser(res.data);
          addMessage(newMessages);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  };

  const printMessages = () => {
    const messageList = [];
    messages.forEach((message) => {
      messageList.push(
        <Message
          key={message.id}
          isPrimary={message.isPrimary}
          hasAvatar={message.hasAvatar}
          text={message.text}
          media={message.media}
          image={message.image}
        />,
      );
    });
    return messageList;
  };

  return (
    <Container onSubmit={(e) => submitForm(e)}>
      <ScrollPanel ref={scrollPanelRef}>
        {printMessages(messages)}
        {isLoading && <Message {...loadingMessage} />}
      </ScrollPanel>
      <Input>
        <NativeInput
          type="text"
          placeholder={formatMessage(localization.input)}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SendButton onClick={submitForm} width="25" height="25" />
      </Input>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    location: state.location.value,
    messages: state.messages.value,
  };
};

const mapDispatchToProps = {
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
