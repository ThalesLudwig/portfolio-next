import PageHeader from "../components/PageHeader";
import localization from "../lang/pages/AboutPageLocalization";
import { useIntl } from "react-intl";

export default function Home() {
  const { formatMessage } = useIntl();

  return (
    <div>
      <PageHeader title="Hello!" subtitle="I'm Thales Ludwig. 👋">
        {formatMessage(localization.header)}
        lacus nec dui.
      </PageHeader>
      About me
    </div>
  );
}
