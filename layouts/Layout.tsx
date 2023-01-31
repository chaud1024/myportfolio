import styled from "@emotion/styled";
import Header from "components/templates/Header";
import Footer from "components/templates/Footer";
import Contents from "./Contents";

export default function AppShellDemo() {
  return (
    <WrapLayout>
      <Header />
      <Contents />
      <Footer />
    </WrapLayout>
  );
}

const WrapLayout = styled.div({
  maxWidth: 1280,
  margin: "0 auto",
});
