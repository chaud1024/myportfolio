import styled from "@emotion/styled";
import About from "components/templates/About";
import Header from "components/templates/Header";
import Experience from "components/templates/Experience";
import Project from "components/templates/Project";
import Footer from "components/templates/Footer";

export default function AppShellDemo() {
  return (
    <WrapLayout>
      <Header />
      <About />
      <Experience />
      <Project />
      <Footer />
    </WrapLayout>
  );
}

const WrapLayout = styled.div({
  maxWidth: 1280,
  margin: "0 auto",
});
