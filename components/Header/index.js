import { connect } from "react-redux";
import { useRouter } from "next/router";
import { setDarkTheme, setLightTheme } from "../../config/themeSlice";
import { setEnglish, setPortuguese } from "../../config/locationSlice";
import LANG_CONSTANTS from "../../constants/lang";
import localization from "./localization";
import { useIntl } from "react-intl";
import { clearMessages } from "../../config/messagesSlice";
import {
  Container,
  ProfileImage,
  ProfileWrapper,
  NameTitleWrapper,
  Name,
  Title,
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
  clearMessages,
}) {
  const router = useRouter();
  const { formatMessage } = useIntl();

  return (
    <Container isChat={router.asPath === "/chat"}>
      <FlagProfileWrapper>
        <ProfileWrapper>
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
            onClick={() => {
              if (location !== LANG_CONSTANTS.EN) {
                clearMessages();
                setEnglish();
              }
            }}
          />
          <FlagImage
            width={50}
            height={35}
            src="brazil_flag.png"
            isActive={location === LANG_CONSTANTS.BR}
            onClick={() => {
              if (location !== LANG_CONSTANTS.BR) {
                clearMessages();
                setPortuguese();
              }
            }}
          />
        </FlagWrapper>
      </FlagProfileWrapper>
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
  clearMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
