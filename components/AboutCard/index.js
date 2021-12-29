import { Container, ImageBackground, Title } from "./AboutCardStyled";

function AboutCard({ image, title, onClick }) {
  return (
    <Container onClick={onClick}>
      <ImageBackground src={image} />
      <Title>{title}</Title>
    </Container>
  );
}

export default AboutCard;
