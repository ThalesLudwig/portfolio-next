import { connect } from "react-redux";
import { setDarkTheme, setLightTheme } from "../../config/themeSlice";
import { setEnglish, setPortuguese } from "../../config/locationSlice";
import LANG_CONSTANTS from "../../constants/lang";
import { clearMessages } from "../../config/messagesSlice";
import localization from "../../lang/pages/MainLocalization";
import { useIntl } from "react-intl";
import {
  Container,
  FlagImage,
  ThemeSwitcher,
  FlagWrapper,
  SwitchWrapper,
  SwitchLabel,
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
  const { formatMessage } = useIntl();

  return (
    <Container>
      <SwitchWrapper
        onClick={() => (!!theme ? setDarkTheme() : setLightTheme())}
      >
        <ThemeSwitcher />
        <SwitchLabel>
          {formatMessage(
            !!theme ? localization.darkMode : localization.lightMode,
          )}
        </SwitchLabel>
      </SwitchWrapper>
      <FlagWrapper>
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
