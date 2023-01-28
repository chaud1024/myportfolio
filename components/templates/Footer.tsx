import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Text, Transition } from "@mantine/core";
import styled from "@emotion/styled";
import { montserrat } from "types/TextType";

const Footer = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <WrapFooter>
      <Text align="center">
        Affix is located at the bottom of the screen, scroll to see it
      </Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              className={montserrat.className}
              fw={400}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </WrapFooter>
  );
};

export default Footer;

const WrapFooter = styled.div({
  width: "100%",
  padding: "32px",
});
