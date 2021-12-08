import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { Content, Tab, Text, MobileOnly } from "./SidenavStyled";
import localization from "./localization";
import Link from "next/link";

export default function Sidenav() {
  const { formatMessage } = useIntl();
  const router = useRouter();

  const isActiveRoute = (route) => {
    return router.asPath === route;
  };

  return (
    <Content>
      <Link href="/">
        <Tab isActive={isActiveRoute("/")}>
          👋 <Text>{formatMessage(localization.aboutMe)}</Text>
        </Tab>
      </Link>
      <Link href="/contact">
        <Tab isActive={isActiveRoute("/contact")}>
          💬 <Text>{formatMessage(localization.contact)}</Text>
        </Tab>
      </Link>
      <Link href="/skills">
        <Tab isActive={isActiveRoute("/skills")}>
          🛠️ <Text>{formatMessage(localization.skills)}</Text>
        </Tab>
      </Link>
      <Link href="/projects">
        <Tab isActive={isActiveRoute("/projects")}>
          💻 <Text>{formatMessage(localization.projects)}</Text>
        </Tab>
      </Link>
      <Link href="/career">
        <Tab isActive={isActiveRoute("/career")}>
          💼 <Text>{formatMessage(localization.career)}</Text>
        </Tab>
      </Link>
      <Link href="/education">
        <Tab isActive={isActiveRoute("/education")}>
          📚 <Text>{formatMessage(localization.education)}</Text>
        </Tab>
      </Link>
      <Link href="/articles">
        <Tab isActive={isActiveRoute("/articles")}>
          📰 <Text>{formatMessage(localization.articles)}</Text>
        </Tab>
      </Link>
      <Link href="/designs">
        <Tab isActive={isActiveRoute("/designs")}>
          ✍️ <Text>{formatMessage(localization.designs)}</Text>
        </Tab>
      </Link>
      <MobileOnly>
        <Link href="/chat">
          <Tab isActive={isActiveRoute("/chat")}>
            🤖 <Text>{formatMessage(localization.bot)}</Text>
          </Tab>
        </Link>
        <Link href="/settings">
          <Tab isActive={isActiveRoute("/settings")}>
            ⚙️ <Text>{formatMessage(localization.settings)}</Text>
          </Tab>
        </Link>
      </MobileOnly>
    </Content>
  );
}
