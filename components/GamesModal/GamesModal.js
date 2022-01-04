import Modal from "../Modal/Modal";
import { useIntl } from "react-intl";
import localization from "./localization";
import Image from "next/image";
import {
  Container,
  Title,
  Subtitle,
  ImagesRow,
  ImageWrapper,
} from "./GamesModalStyled";

export const GamesModal = ({ isOpen, onClose }) => {
  const { formatMessage } = useIntl();
  const IMAGE_QUALITY = 10;
  const IMAGE_FIT = "cover";

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
          <ImageWrapper>
            <Image
              src="/about/games/acodyssey.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/games/gow.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/games/p5.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/games/rdr2.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/games/alanwake.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/games/uncharted.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
        </ImagesRow>
      </Container>
    </Modal>
  );
};

export default GamesModal;
