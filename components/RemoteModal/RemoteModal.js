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
} from "./RemoteModalStyled";

export const RemoteModal = ({ isOpen, onClose }) => {
  const { formatMessage } = useIntl();
  const IMAGE_QUALITY = 10;
  const IMAGE_FIT = "cover";

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
          <ImageWrapper>
            <Image
              src="/about/remote/paris_1.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/remote/paris_2.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/remote/rome_1.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/remote/rome_2.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/remote/dublin_1.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/remote/dublin_2.png"
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

export default RemoteModal;
