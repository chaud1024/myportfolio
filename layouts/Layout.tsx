import styled from "@emotion/styled";
import About from "../components/templates/About";

export default function AppShellDemo() {
  return (
    <WrapLayout>
      <About />
    </WrapLayout>
  );
}

const WrapLayout = styled.div({
  maxWidth: 1280,
  margin: "0 auto",
});
