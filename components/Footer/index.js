import { connect } from "react-redux";
import { useRouter } from "next/router";
import { setDarkTheme, setLightTheme } from "../../config/themeSlice";
import { setEnglish, setPortuguese } from "../../config/locationSlice";
import LANG_CONSTANTS from "../../constants/lang";
import Link from "next/link";
import localization from "./localization";
import { useIntl } from "react-intl";
import { clearMessages } from "../../config/messagesSlice";
import {
  Container,
  Avatar,
  Label,
  FlagImage,
  FlagWrapper,
  AvatarLabelWrapper,
  ThemeSwitcher,
} from "./FooterStyled";

function Footer({
  theme,
  location,
  setDarkTheme,
  setLightTheme,
  setEnglish,
  setPortuguese,
  clearMessages,
}) {
  const { formatMessage } = useIntl();
  const router = useRouter();
  const isChat = router.asPath === "/chat";

  return (
    <Container>
      <AvatarLabelWrapper>
        <Link href={isChat ? "/" : "/chat"}>
          <Avatar />
        </Link>
        <Link href={isChat ? "/" : "/chat"}>
          <Label isChat={isChat}>
            {formatMessage(isChat ? localization.back : localization.talkToMe)}
          </Label>
        </Link>
      </AvatarLabelWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
