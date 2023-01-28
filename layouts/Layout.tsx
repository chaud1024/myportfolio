import styled from "@emotion/styled";
import About from "components/templates/About";
import Experience from "components/templates/Experience";
import Header from "components/templates/Header";

export default function AppShellDemo() {
  return (
    <WrapLayout>
      <Header />
      <About />
      <Experience />
    </WrapLayout>
  );
}

const WrapLayout = styled.div({
  maxWidth: 1280,
  margin: "0 auto",
});
