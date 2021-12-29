import Modal from "../Modal/Modal";
import { useIntl } from "react-intl";
import localization from "./localization";
import {
  Container,
  Title,
  Subtitle,
  ImagesRow,
  Image,
} from "./PersonalModalStyled";

export const PersonalModal = ({ isOpen, onClose }) => {
  const { formatMessage } = useIntl();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      imageUrl="about/personal/background.png"
    >
      <Container>
        <Title>{formatMessage(localization.title)} 🇧🇷</Title>
        <Title>{formatMessage(localization.subtitle)}</Title>
        <Subtitle>{formatMessage(localization.text)}</Subtitle>
        <ImagesRow>
          <Image url="about/personal/personal_1.png" />
          <Image url="about/personal/personal_2.png" />
          <Image url="about/personal/personal_3.jpeg" />
          <Image url="about/personal/personal_4.jpeg" />
          <Image url="about/personal/personal_5.png" />
          <Image url="about/personal/personal_6.png" />
        </ImagesRow>
      </Container>
    </Modal>
  );
};

export default PersonalModal;
