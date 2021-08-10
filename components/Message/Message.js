import React from "react";
import PropTypes from "prop-types";
import MEDIA from "../../constants/media";
import {
  Container,
  Avatar,
  TextArea,
  Image,
  MediaIcon,
  MediaCard,
  MediaTitle,
  MediaText,
  MediaTitleTextWrapper,
  MediaWrapper,
  MediaLink,
} from "./MessageStyled";

const renderIcon = ({ media }) => {
  switch (media) {
    case MEDIA.GITHUB:
      return "social/github.png";
    case MEDIA.TWITTER:
      return "social/twitter.png";
    case MEDIA.LINKEDIN:
      return "social/linkedin.svg";
    case MEDIA.PLAYSTORE:
      return "social/playstore.jpeg";
    default:
      return "ellipsis.svg";
  }
};

const renderMedia = (mediaList) => {
  const medias = [];
  mediaList.forEach((m) => {
    medias.push(
      <MediaLink key={m.id} href={m.url} target="blank">
        <MediaCard>
          <MediaTitleTextWrapper>
            <MediaIcon src={renderIcon(m)} />
            <MediaTitle>{m.name}</MediaTitle>
          </MediaTitleTextWrapper>
          <MediaText>{m.description}</MediaText>
        </MediaCard>
      </MediaLink>,
    );
  });
  return medias;
};

const Message = ({ isPrimary, text, hasAvatar, image, media, isAlt }) => {
  const hasManyMedia = media.length > 1;

  return (
    <Container isPrimary={isPrimary}>
      {hasAvatar && <Avatar isPrimary={isPrimary} />}
      {!image.id && media.length === 0 && (
        <TextArea hasAvatar={hasAvatar} isPrimary={isPrimary} isAlt={isAlt}>
          {text}
        </TextArea>
      )}
      {!!image.id && (
        <Image
          src={image.content}
          hasAvatar={hasAvatar}
          isPrimary={isPrimary}
        />
      )}
      {media.length > 0 && (
        <MediaWrapper hasMany={hasManyMedia} hasAvatar={hasAvatar}>
          {renderMedia(media)}
        </MediaWrapper>
      )}
    </Container>
  );
};

Message.propTypes = {
  isPrimary: PropTypes.bool,
  isAlt: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  hasAvatar: PropTypes.bool,
  media: PropTypes.array,
  image: PropTypes.object,
};

Message.defaultProps = {
  isPrimary: false,
  isAlt: false,
  text: "",
  hasAvatar: false,
  media: [],
  image: {},
};

export default Message;
