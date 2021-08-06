import { useRouter } from "next/router";
import Link from "next/link";
import {
  Container,
  Avatar,
  Label,
  FlagImage,
  FlagWrapper,
  AvatarLabelWrapper,
} from "./FooterStyled";

export default function Footer() {
  const router = useRouter();
  const isChat = router.asPath === "/chat";

  return (
    <Container>
      <AvatarLabelWrapper>
        <Avatar />
        <Link href={isChat ? "/" : "/chat"}>
          <Label isChat={isChat}>
            {isChat ? "Go back" : "Talk to bot-me!"}
          </Label>
        </Link>
      </AvatarLabelWrapper>
      <FlagWrapper>
        <FlagImage width={50} height={35} src="usa_flag.png" isActive />
        <FlagImage width={50} height={35} src="brazil_flag.png" />
      </FlagWrapper>
    </Container>
  );
}
