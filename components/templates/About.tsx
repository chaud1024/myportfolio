import { useEffect, useRef } from "react";
import { Text, Box } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { ibmKr, montserrat } from "types/TextType";
import { create } from "@lottiefiles/lottie-interactivity";

import AboutSkills from "components/organisms/AboutSkills";
import Contact from "components/organisms/Contact";
import AboutProfile from "components/organisms/AboutProfile";

const About = () => {
  const { classes } = useStyles();

  const ref = useRef(null);
  const containerRef: any = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  useEffect(() => {
    containerRef.current.addEventListener(
      "load",
      (e: React.ChangeEvent<HTMLDivElement>) => {
        // configure the interactivity library
        create({
          mode: "scroll",
          player: "#firstLottie",
          actions: [
            {
              visibility: [0, 1],
              type: "seek",
              frames: [0, 120],
            },
          ],
        });
      }
    );

    return () => {};
  }, [containerRef]);

  return (
    <Box className={classes.wrap} id="about">
      <Box className={classes.wrapLeft}>
        <Box>
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
        </Box>

        <Box>
          <Contact />
          <Box className={classes.wrapLottieMail}>
            <lottie-player
              id="firstLottie"
              ref={containerRef}
              autoplay
              loop
              mode="normal"
              src="https://assets1.lottiefiles.com/packages/lf20_mwawjro9.json"
              style={{ width: "300px", height: "300px" }}
            ></lottie-player>
          </Box>
        </Box>
      </Box>

      <Box className={classes.wrapRight}>
        <Text className={ibmKr.className}>
          현재 포트폴리오는
          <span className={montserrat.className}>
            {" "}
            React, Next.js, Mantine(emotion)
          </span>
          으로 제작했습니다.
        </Text>
        <AboutSkills />
      </Box>
    </Box>
  );
};

export default About;

const useStyles = createStyles((theme, _params) => ({
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
