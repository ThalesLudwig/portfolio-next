import Modal from "../Modal/Modal";
import { useIntl } from "react-intl";
import localization from "./localization";
import {
  Container,
  Title,
  Subtitle,
  ImagesRow,
  Image,
} from "./GamesModalStyled";

export const GamesModal = ({ isOpen, onClose }) => {
  const { formatMessage } = useIntl();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      imageUrl="about/games/gamesmodal.png"
    >
      <Container>
        <Title>{formatMessage(localization.title)} 🎮</Title>
        <Title>{formatMessage(localization.text)}</Title>
        <Subtitle>{formatMessage(localization.favorites)}</Subtitle>
        <ImagesRow>
          <Image url="about/games/acodyssey.png" />
          <Image url="about/games/gow.png" />
          <Image url="about/games/p5.png" />
          <Image url="about/games/rdr2.png" />
          <Image url="about/games/alanwake.png" />
          <Image url="about/games/uncharted.png" />
        </ImagesRow>
      </Container>
    </Modal>
  );
};

export default GamesModal;
