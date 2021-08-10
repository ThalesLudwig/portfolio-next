import {
  Container,
  Logo,
  Title,
  ContentWrapper,
  Text,
  Chevron,
  LogoContentWrapper,
} from "./ContactStyled";

function Contact({ image, title, url, children }) {
  return (
    <a href={url} target="_blank">
      <Container>
        <LogoContentWrapper>
          <Logo src={image} />
          <ContentWrapper>
            <Title>{title}</Title>
            <Text>{children}</Text>
          </ContentWrapper>
        </LogoContentWrapper>
        <Chevron />
      </Container>
    </a>
  );
}

export default Contact;