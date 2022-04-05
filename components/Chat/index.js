import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Message from "../Message/Message";
import messageParser from "../../helpers/messageParser";
import loadingMessage from "../../helpers/loadingMessage";
import localization from "../../lang/pages/ChatPageLocalization";
import { useIntl } from "react-intl";
import { addMessage, setIsLoading } from "../../config/messagesSlice";
import submitForm from "./submitForm";
import { Container, Input, NativeInput, ScrollPanel, SendButton, Suggestion, SuggestionArea } from "./ChatStyled";
import SUGGESTIONS from "../../constants/suggestions";

function Chat({ location, messages, addMessage, isLoading, setIsLoading }) {
  const { formatMessage } = useIntl();
  const scrollPanelRef = useRef(null);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(SUGGESTIONS[location]);
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
          isAlt={message.isAlt}
        />,
      );
    });
    return messageList;
  };

  const submit = ({ event, message }) => {
    submitForm({
      event,
      input: message || input,
      messages,
      addMessage,
      setInput,
      setIsLoading,
      location,
    });
  };

  return (
    <Container onSubmit={(e) => submit({ event: e })}>
      <ScrollPanel ref={scrollPanelRef}>
        {printMessages(messages)}
        {isLoading && <Message {...loadingMessage} />}
      </ScrollPanel>
      <SuggestionArea>
        {suggestions.map((suggestion) => (
          <Suggestion onClick={() => submit({ message: suggestion })}>{suggestion}</Suggestion>
        ))}
      </SuggestionArea>
      <Input>
        <NativeInput
          type="text"
          placeholder={formatMessage(localization.input)}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SendButton onClick={submit} width="25" height="25" />
      </Input>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    location: state.location.value,
    messages: state.messages.value,
    isLoading: state.messages.isLoading,
  };
};

const mapDispatchToProps = {
  addMessage,
  setIsLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
