import MessageService from "../../services/messageService";
import messageParser from "../../helpers/messageParser";

const submitForm = ({
  event,
  input,
  messages,
  addMessage,
  setInput,
  setIsLoading,
  location,
}) => {
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

export default submitForm;
