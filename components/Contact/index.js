import { Container, Logo, Title, ContentWrapper, Text } from "./ContactStyled";

function Contact({ image, title, url, children }) {
  return (
    <a href={url} target="_blank">
      <Container>
        <Logo src={image} />
        <ContentWrapper>
          <Title>{title}</Title>
          <Text>{children}</Text>
        </ContentWrapper>
      </Container>
    </a>
  );
}

export default Contact;
