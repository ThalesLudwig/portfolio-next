import PageHeader from "../components/PageHeader";
import localization from "../lang/pages/AboutPageLocalization";
import { useIntl } from "react-intl";
import Link from "next/link";
import AboutCard from "../components/AboutCard";
import LatestNews from "../components/LatestNews";
import {
  Content,
  HireMe,
  CardWrapper,
  HappeningNow,
  News,
  NewsLine,
} from "../styles/pages/AboutPage";

export default function Home() {
  const { formatMessage } = useIntl();

  return (
    <Content>
      <PageHeader
        title={formatMessage(localization.hello)}
        subtitle={`${formatMessage(localization.name)} 👋`}
      >
        {formatMessage(localization.header)}
      </PageHeader>
      <Link href="/contact">
        <HireMe>👉 {formatMessage(localization.hireMe)}</HireMe>
      </Link>
      <CardWrapper>
        <AboutCard
          title={formatMessage(localization.cardOne)}
          image="about/about_card_1.png"
        />
        <AboutCard
          title={formatMessage(localization.cardTwo)}
          image="about/about_card_2.png"
        />
        <AboutCard
          title={formatMessage(localization.cardThree)}
          image="about/about_card_3.png"
        />
      </CardWrapper>
      <HappeningNow>{formatMessage(localization.happeningNow)}</HappeningNow>
      <News>
        <LatestNews icon="icons/puzzle.svg">
          {formatMessage(localization.latestNewsOne)}
        </LatestNews>
        <NewsLine />
        <LatestNews icon="icons/code.svg">
          {formatMessage(localization.latestNewsTwo)}
        </LatestNews>
        <NewsLine />
        <LatestNews icon="icons/globe.svg">
          {formatMessage(localization.latestNewsThree)}
        </LatestNews>
        <NewsLine />
        <LatestNews icon="icons/mobile.svg">
          {formatMessage(localization.latestNewsFour)}
        </LatestNews>
      </News>
    </Content>
  );
}
