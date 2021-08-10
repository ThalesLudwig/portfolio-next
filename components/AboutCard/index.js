import { Container, ImageBackground, Title } from "./AboutCardStyled";

function AboutCard({ image, title }) {
  return (
    <Container>
      <ImageBackground src={image} />
      <Title>{title}</Title>
    </Container>
  );
}

export default AboutCard;
