import Modal from "../Modal/Modal";
import { useIntl } from "react-intl";
import localization from "./localization";
import {
  Container,
  Title,
  Subtitle,
  ImagesRow,
  Image,
} from "./RemoteModalStyled";

export const RemoteModal = ({ isOpen, onClose }) => {
  const { formatMessage } = useIntl();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      imageUrl="about/remote/background.png"
    >
      <Container>
        <Title>{formatMessage(localization.title)} 🌎</Title>
        <Subtitle>{formatMessage(localization.text)}</Subtitle>
        <ImagesRow>
          <Image url="about/remote/paris_1.png" />
          <Image url="about/remote/paris_2.png" />
          <Image url="about/remote/rome_1.png" />
          <Image url="about/remote/rome_2.png" />
          <Image url="about/remote/dublin_1.png" />
          <Image url="about/remote/dublin_2.png" />
        </ImagesRow>
      </Container>
    </Modal>
  );
};

export default RemoteModal;
