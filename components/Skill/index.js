import {
  Container,
  Label,
  ProgressBar,
  ProgressBackground,
} from "./SkillStyled";

function Skill({ label, progress, isAlt }) {
  return (
    <Container>
      <Label>{label}</Label>
      <ProgressBackground>
        <ProgressBar isAlt={isAlt} progress={progress || "100"} />
      </ProgressBackground>
    </Container>
  );
}

export default Skill;
