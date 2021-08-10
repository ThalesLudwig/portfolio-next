import {
  Container,
  ImageBackground,
  Title,
  Time,
  Medium,
  Link,
} from "./ArticleStyled";

function Article({ image, title, time, url }) {
  return (
    <Link href={url} target="_blank">
      <Container>
        <ImageBackground src={image}>
          <Medium />
          <Time>{time} min</Time>
        </ImageBackground>
        <Title>{title}</Title>
      </Container>
    </Link>
  );
}

export default Article;
