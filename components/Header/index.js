import { useRouter } from "next/router";
import Link from "next/link";
import {
  Container,
  Tab,
  ProfileImage,
  ProfileWrapper,
  NameTitleWrapper,
  Name,
  Title,
  NavigationWrapper,
  FlagImage,
  FlagWrapper,
  FlagProfileWrapper,
} from "./HeaderStyled";

export default function Header() {
  const router = useRouter();

  const isActiveRoute = (route) => {
    return router.asPath === route;
  };

  return (
    <Container isChat={router.asPath === "/chat"}>
      <FlagProfileWrapper>
        <ProfileWrapper>
          <ProfileImage width={60} height={60} src="profile_crop.jpg" />
          <NameTitleWrapper>
            <Name>Thales Ludwig Valentini</Name>
            <Title>Software Engineer</Title>
          </NameTitleWrapper>
        </ProfileWrapper>
        <FlagWrapper>
          <FlagImage width={50} height={35} src="usa_flag.png" isActive />
          <FlagImage width={50} height={35} src="brazil_flag.png" />
        </FlagWrapper>
      </FlagProfileWrapper>
      <NavigationWrapper>
        <Link href="/">
          <Tab isActive={isActiveRoute("/")}>About me</Tab>
        </Link>
        <Link href="/skills">
          <Tab isActive={isActiveRoute("/skills")}>Skills</Tab>
        </Link>
        <Link href="/projects">
          <Tab isActive={isActiveRoute("/projects")}>Projects</Tab>
        </Link>
        <Link href="/career">
          <Tab isActive={isActiveRoute("/career")}>Career</Tab>
        </Link>
        <Link href="/education">
          <Tab isActive={isActiveRoute("/education")}>Education</Tab>
        </Link>
        <Link href="/articles">
          <Tab isActive={isActiveRoute("/articles")}>Articles</Tab>
        </Link>
        <Link href="/contact">
          <Tab isActive={isActiveRoute("/contact")}>Contact</Tab>
        </Link>
        <Link href="/designs">
          <Tab isActive={isActiveRoute("/designs")}>Designs</Tab>
        </Link>
      </NavigationWrapper>
    </Container>
  );
}
