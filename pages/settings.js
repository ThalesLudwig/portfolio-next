import { connect } from "react-redux";
import { setDarkTheme, setLightTheme } from "../config/themeSlice";
import { setEnglish, setPortuguese } from "../config/locationSlice";
import { clearMessages } from "../config/messagesSlice";
import LANG_CONSTANTS from "../constants/lang";
import localization from "../lang/pages/SettingsPageLocalization";
import { useIntl } from "react-intl";
import PageHeader from "../components/PageHeader";
import {
  Content,
  ThemeSwitcher,
  FlagImage,
  Label,
  FlagRow,
} from "../styles/pages/SettingsPage";

function Settings({
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
    <>
      <PageHeader title={formatMessage(localization.title)} />
      <Content>
        <Label>{formatMessage(localization.switchTheme)}</Label>
        <ThemeSwitcher
          onClick={() => (!!theme ? setDarkTheme() : setLightTheme())}
        />
        <Label>{formatMessage(localization.switchLang)}</Label>
        <FlagRow>
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
        </FlagRow>
      </Content>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
