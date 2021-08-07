import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Message from "../Message/Message";
import messageParser from "../../helpers/messageParser";
import loadingMessage from "../../helpers/loadingMessage";
import localization from "../../lang/pages/ChatPageLocalization";
import { useIntl } from "react-intl";
import { addMessage } from "../../config/messagesSlice";
import submitForm from "./submitForm";
import {
  Container,
  Input,
  NativeInput,
  ScrollPanel,
  SendButton,
} from "./ChatStyled";

function Chat({ location, messages, addMessage }) {
  const { formatMessage } = useIntl();
  const scrollPanelRef = useRef(null);
  const router = useRouter();
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
    <Container
      isChatPage={router.asPath === "/chat"}
      onSubmit={(e) =>
        submitForm({
          event: e,
          input,
          messages,
          addMessage,
          setInput,
          setIsLoading,
          location,
        })
      }
    >
      <ScrollPanel ref={scrollPanelRef}>
        {printMessages()}
        {isLoading && <Message {...loadingMessage} />}
      </ScrollPanel>
      <Input>
        <NativeInput
          type="text"
          placeholder={formatMessage(localization.input)}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SendButton
          onClick={() =>
            submitForm({
              input,
              messages,
              addMessage,
              setInput,
              setIsLoading,
              location,
            })
          }
          width="25"
          height="25"
        />
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
