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
} from "./JobStyled";

function Job({ title, company, pills, image, url }) {
  const renderPills = () =>
    pills.map((pill, i) => (
      <Pill isFirst={i === 0} key={i}>
        {pill}
      </Pill>
    ));

  return (
    <Link href={url} target="_blank">
      <Container>
        <Header>
          <LogoTitleWrapper>
            <Image src={image} />
            <Title>{title}</Title>
          </LogoTitleWrapper>
          <Text>{company}</Text>
        </Header>
        <Pills>{pills && renderPills()}</Pills>
      </Container>
    </Link>
  );
}

export default Job;
