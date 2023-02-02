import { useWindowScroll } from "@mantine/hooks";
import {
  Affix,
  Box,
  Button,
  Flex,
  Text,
  Transition,
  createStyles,
} from "@mantine/core";
import { montserrat } from "types/TextType";
import {
  IconBrandGithub,
  IconMailForward,
  IconDeviceMobile,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapFooter}>
      <Box>
        <Box className={classes.wrapThanks}>
          <Text className={montserrat.className}>
            Thanks for visiting My portfolio.
          </Text>
          <Text className={montserrat.className}>
            I am looking forward to hearing from you.
          </Text>
        </Box>
        <Flex gap={"xl"} justify={"end"}>
          <Flex gap={8}>
            <IconDeviceMobile size={24} stroke={1} />
            <Text className={montserrat.className}>
              <a href="tel: +82-10-9019-1865">+82 10 9019 1865</a>
            </Text>
          </Flex>
          <Flex gap={8}>
            <IconMailForward size={24} stroke={1} />
            <Text className={montserrat.className}>
              <a href="mailto: chaud1024@gmail.com">chaud1024@gmail.com</a>
            </Text>
          </Flex>
          <Flex gap={8}>
            <IconBrandGithub size={24} stroke={1} />
            <Text className={montserrat.className}>
              <Link href="https://github.com/chaud1024" target="_blank">
                https://github.com/chaud1024
              </Link>
            </Text>
          </Flex>
        </Flex>
        <Box>
          <Text
            align="right"
            fz={"sm"}
            mt={"lg"}
            className={montserrat.className}
          >
            Copyright @Bora Kim, 2023
          </Text>
        </Box>
      </Box>
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
    </Box>
  );
};

export default Footer;

const useStyles = createStyles((theme, _params) => ({
  wrapFooter: {
    width: "100%",
    padding: "32px",
  },

  wrapThanks: {
    marginBottom: "32px",
    paddingBottom: "32px",
    borderBottom: "1px solid",
    borderColor: theme.colors.dark[0],
  },
}));
