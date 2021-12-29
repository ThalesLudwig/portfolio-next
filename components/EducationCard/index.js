import {
  ImageBackground,
  Title,
  Status,
  Card,
  Subtitle,
  SchoolWrapper,
  School,
  Location,
  SchoolLocationWrapper,
  Logo,
  ContentWrapper,
  StatusWrapper,
  StatusIcon,
} from "./EducationCardStyled";

function EducationCard({
  image,
  title,
  subtitle,
  status,
  school,
  logo,
  location,
  icon,
}) {
  return (
    <Card>
      <ImageBackground src={image} />
      <ContentWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <SchoolWrapper>
          <Logo src={logo} />
          <SchoolLocationWrapper>
            <School>{school}</School>
            <Location>{location}</Location>
          </SchoolLocationWrapper>
        </SchoolWrapper>
        <StatusWrapper>
          <StatusIcon src={icon} />
          <Status>{status}</Status>
        </StatusWrapper>
      </ContentWrapper>
    </Card>
  );
}

export default EducationCard;
