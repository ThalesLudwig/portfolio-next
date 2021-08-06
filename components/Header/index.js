import { connect } from "react-redux";
import { useRouter } from "next/router";
import { setDarkTheme, setLightTheme } from "../../config/themeSlice";
import { setEnglish, setPortuguese } from "../../config/locationSlice";
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
  ThemeSwitcher,
} from "./HeaderStyled";

function Header({
  theme,
  location,
  setDarkTheme,
  setLightTheme,
  setEnglish,
  setPortuguese,
}) {
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
          <ThemeSwitcher
            onClick={() => (!!theme ? setDarkTheme() : setLightTheme())}
          />
          <FlagImage
            width={50}
            height={35}
            src="usa_flag.png"
            isActive={location === "en-US"}
            onClick={() => setEnglish()}
          />
          <FlagImage
            width={50}
            height={35}
            src="brazil_flag.png"
            isActive={location === "pt-BR"}
            onClick={() => setPortuguese()}
          />
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

const mapStateToProps = (state) => {
  return {
    theme: state.theme.value,
    location: state.location.value,
  };
};

const mapDispatchToProps = {
  setDarkTheme,
  setLightTheme,
  setEnglish,
  setPortuguese,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
