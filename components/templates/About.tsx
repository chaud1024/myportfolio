import { useEffect, useRef } from "react";
import { Text, Box, Flex } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { ibmKr } from "types/TextType";

import AboutSkills from "components/organisms/AboutSkills";
import Contact from "components/organisms/Contact";
import AboutProfile from "components/organisms/AboutProfile";
import HandAnimation from "components/atoms/HandAnimation";

import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation(); 
  const { classes } = useStyles();

  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <Box className={classes.wrap} id="about">
      <Box className={classes.wrapLeft}>
        <AboutProfile />
        <Box className={classes.wrapLottieHello}>
          <lottie-player
            ref={ref}
            src="https://assets4.lottiefiles.com/packages/lf20_rbtawnwz.json"
            background="transparent"
            speed="1.5"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></lottie-player>
        </Box>
        <Box className={classes.wrapContact}>
          <Contact />
        </Box>
        <Flex className={classes.wrapDesc}>
          <Text className={ibmKr.className}>
            <Box className={classes.wrapHandAnimation}>
              <HandAnimation symbol="👋" label="sheep" />
            </Box>
            {t("home:hello")}
          </Text>
          <Text className={ibmKr.className}>
            {t('home:me')}
          </Text>
          <Text className={ibmKr.className}>
            {t('home:strength')}
          </Text>
        </Flex>
      </Box>

      <Box className={classes.wrapRight}>
        <Text className={ibmKr.className}>
          {t('home:current_project')}
        </Text>
        <AboutSkills />
      </Box>
    </Box>
  );
};

export default About;

const useStyles = createStyles((theme, _params, getRef) => ({
  wrap: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "128px 16px 72px",
  },

  wrapLeft: {
    width: "48%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing.md,
    position: "relative",
    paddingTop: theme.spacing.lg,

    [`.${getRef("wrapContact")}`]: {
      position: "fixed",
      margin: "0 auto",
      transform: "translateX(-72px)",
      bottom: "120px",
    },
  },

  wrapDesc: {
    width: "94%",
    padding: theme.spacing.xl,
    gap: theme.spacing.xl,
    flexDirection: "column",
    position: "relative",
    [`.${getRef("wrapHandAnimation")}`] : {
      left: "100px",
      top: "-16px",
    }
  },

  wrapHandAnimation: {
    ref: getRef("wrapHandAnimation"),
    position: "absolute",
  },

  descIcon: {
    fontSize: theme.fontSizes.xl,
  },

  wrapContact: {
    ref: getRef("wrapContact"),
    ["&:before"]: {
      content: `""`,
      width: "1px",
      height: "114px",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.dark[9],
      position: "absolute",
      bottom: "-58%",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },

  wrapRight: {
    width: "48%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing.md,
    marginTop: "64px",
  },

  wrapLottieHello: {
    position: "absolute",
    top: "-150px",
    left: "-72px",
  },

  wrapLottieMail: {
    position: "absolute",
    bottom: "-64px",
    right: "0",
  },
}));
