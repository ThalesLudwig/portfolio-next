import { Container, Title, Text } from "./PageHeaderStyled";

export default function PageHeader({ children, title, subtitle }) {
  return (
    <Container>
      <Title>{title}</Title>
      {subtitle && <Title>{subtitle}</Title>}
      <Text>{children}</Text>
    </Container>
  );
}
