import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Tab } from "./HeaderStyled";

export default function Header() {
  const router = useRouter();

  const isActiveRoute = (route) => {
    return router.asPath === route;
  };

  return (
    <Container>
      <Link href="/">
        <Tab className="tab" isActive={isActiveRoute("/")}>
          About me
        </Tab>
      </Link>
      <Link href="/skills">
        <Tab className="tab" isActive={isActiveRoute("/skills")}>
          Skills
        </Tab>
      </Link>
      <Link href="/projects">
        <Tab className="tab" isActive={isActiveRoute("/projects")}>
          Projects
        </Tab>
      </Link>
      <Link href="/career">
        <Tab className="tab" isActive={isActiveRoute("/career")}>
          Career
        </Tab>
      </Link>
      <Link href="/education">
        <Tab className="tab" isActive={isActiveRoute("/education")}>
          Education
        </Tab>
      </Link>
      <Link href="/articles">
        <Tab className="tab" isActive={isActiveRoute("/articles")}>
          Articles
        </Tab>
      </Link>
      <Link href="/contact">
        <Tab className="tab" isActive={isActiveRoute("/contact")}>
          Contact
        </Tab>
      </Link>
      <Link href="/designs">
        <Tab className="tab" isActive={isActiveRoute("/designs")}>
          Designs
        </Tab>
      </Link>
    </Container>
  );
}
