import { useEffect, useRef } from "react";
import { Text, Box, Flex } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { ibmKr, montserrat } from "types/TextType";

import AboutSkills from "components/organisms/AboutSkills";
import Contact from "components/organisms/Contact";
import AboutProfile from "components/organisms/AboutProfile";
import HandAnimation from "components/atoms/HandAnimation";

const About = () => {
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
            안녕하세요,
          </Text>
          <Text className={ibmKr.className}>
            더 나은 코드, 더 효율적인 개발을 위해 끊임없이 공부하고 노력하는
            프론트엔드 개발자 김보라입니다.
          </Text>
          <Text className={ibmKr.className}>
            다양한 경험에서 비롯된 빠른 적응과 커뮤니케이션 스킬, 그리고
            도전정신이 저의 장점입니다.
          </Text>
        </Flex>
      </Box>

      <Box className={classes.wrapRight}>
        <Text className={ibmKr.className}>
          현재 포트폴리오는
          <span className={montserrat.className}>
            {" "}
            Next.js, TypeScript, Mantine(emotion)
          </span>
          으로 제작했습니다.
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
    width: "66%",
    padding: theme.spacing.xl,
    gap: theme.spacing.xl,
    flexDirection: "column",
    position: "absolute",
    bottom: 0,
    right: 0,
  },

  wrapHandAnimation: {
    position: "absolute",
    left: "-56px",
    top: "-34px",
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
      backgroundColor: "#000",
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
