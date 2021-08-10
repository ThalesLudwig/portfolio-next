import {
  Container,
  ImageBackground,
  Content,
  Dribbble,
  Link,
  Title,
} from "./DesignStyled";

function Design({ image, title, url }) {
  return (
    <Link href={url} target="_blank">
      <Container>
        <ImageBackground src={image} />
        <Content>
          <Dribbble />
          <Title>{title}</Title>
        </Content>
      </Container>
    </Link>
  );
}

export default Design;
