import { Container, Title, Text } from "./PageHeaderStyled";

export default function PageHeader({ children, title, subtitle, icon }) {
  return (
    <Container>
      <Title>
        {icon} {title}
      </Title>
      {subtitle && <Title>{subtitle}</Title>}
      <Text>{children}</Text>
    </Container>
  );
}
