import {
  Container,
  Avatar,
  Label,
  FlagImage,
  FlagWrapper,
  AvatarLabelWrapper,
} from "./FooterStyled";

export default function Footer() {
  return (
    <Container>
      <AvatarLabelWrapper>
        <Avatar />
        <Label>Talk to bot-me!</Label>
      </AvatarLabelWrapper>
      <FlagWrapper>
        <FlagImage width={50} height={35} src="usa_flag.png" isActive />
        <FlagImage width={50} height={35} src="brazil_flag.png" />
      </FlagWrapper>
    </Container>
  );
}
