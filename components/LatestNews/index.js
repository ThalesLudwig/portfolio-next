import { Container, IconWrapper, Title, Icon } from "./LatestNewsStyled";

function LatestNews({ children, icon }) {
  return (
    <Container>
      <IconWrapper>
        <Icon src={icon} />
      </IconWrapper>
      <Title>{children}</Title>
    </Container>
  );
}

export default LatestNews;
