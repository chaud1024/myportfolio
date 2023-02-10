import styled from "@emotion/styled";
import About from "components/templates/About";
import Experience from "components/templates/Experience";
import Project from "components/templates/Project";

const Contents = () => {
  return (
    <WrapContent>
      <About />
      <Experience />
      <Project />
    </WrapContent>
  );
};

export default Contents;

const WrapContent = styled.div({
  marginLeft: "60px"
});
