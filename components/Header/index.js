import { connect } from "react-redux";
import { useRouter } from "next/router";
import { setDarkTheme, setLightTheme } from "../../config/themeSlice";
import { setEnglish, setPortuguese } from "../../config/locationSlice";
import LANG_CONSTANTS from "../../constants/lang";
import Link from "next/link";
import localization from "./localization";
import { useIntl } from "react-intl";
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
  const { formatMessage } = useIntl();

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
            <Title>{formatMessage(localization.jobTitle)}</Title>
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
            isActive={location === LANG_CONSTANTS.EN}
            onClick={() => setEnglish()}
          />
          <FlagImage
            width={50}
            height={35}
            src="brazil_flag.png"
            isActive={location === LANG_CONSTANTS.BR}
            onClick={() => setPortuguese()}
          />
        </FlagWrapper>
      </FlagProfileWrapper>
      <NavigationWrapper>
        <Link href="/">
          <Tab isActive={isActiveRoute("/")}>
            {formatMessage(localization.aboutMe)}
          </Tab>
        </Link>
        <Link href="/skills">
          <Tab isActive={isActiveRoute("/skills")}>
            {formatMessage(localization.skills)}
          </Tab>
        </Link>
        <Link href="/projects">
          <Tab isActive={isActiveRoute("/projects")}>
            {formatMessage(localization.projects)}
          </Tab>
        </Link>
        <Link href="/career">
          <Tab isActive={isActiveRoute("/career")}>
            {formatMessage(localization.career)}
          </Tab>
        </Link>
        <Link href="/education">
          <Tab isActive={isActiveRoute("/education")}>
            {formatMessage(localization.education)}
          </Tab>
        </Link>
        <Link href="/articles">
          <Tab isActive={isActiveRoute("/articles")}>
            {formatMessage(localization.articles)}
          </Tab>
        </Link>
        <Link href="/contact">
          <Tab isActive={isActiveRoute("/contact")}>
            {formatMessage(localization.contact)}
          </Tab>
        </Link>
        <Link href="/designs">
          <Tab isActive={isActiveRoute("/designs")}>
            {formatMessage(localization.designs)}
          </Tab>
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
