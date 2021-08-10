import {
  Container,
  Title,
  Image,
  Link,
  Text,
  LogoTitleWrapper,
  Pill,
  Pills,
  Header,
} from "./ProjectStyled";

function Project({ title, children, url, pills, image, isClosed }) {
  const renderPills = () =>
    pills.map((pill, i) => (
      <Pill isFirst={i === 0} key={i}>
        {pill}
      </Pill>
    ));

  return (
    <Link href={url} target="_blank" isClosed={isClosed}>
      <Container>
        <Header>
          <LogoTitleWrapper>
            <Image src={image ? image : "social/github.png"} />
            <Title>{title}</Title>
          </LogoTitleWrapper>
          <Text>{children}</Text>
        </Header>
        <Pills>{pills && renderPills()}</Pills>
      </Container>
    </Link>
  );
}

export default Project;
