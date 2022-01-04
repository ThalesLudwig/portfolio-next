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
} from "./PersonalModalStyled";

export const PersonalModal = ({ isOpen, onClose }) => {
  const { formatMessage } = useIntl();
  const IMAGE_QUALITY = 10;
  const IMAGE_FIT = "cover";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      imageUrl="about/personal/background.png"
    >
      <Container>
        <Title>{formatMessage(localization.title)}</Title>
        <Title>{formatMessage(localization.subtitle)}</Title>
        <Subtitle>{formatMessage(localization.text)}</Subtitle>
        <ImagesRow>
          <ImageWrapper>
            <Image
              src="/about/personal/personal_1.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/personal/personal_2.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/personal/personal_3.jpeg"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/personal/personal_4.jpeg"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/personal/personal_5.png"
              layout="fill"
              objectFit={IMAGE_FIT}
              quality={IMAGE_QUALITY}
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/about/personal/personal_6.png"
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

export default PersonalModal;
