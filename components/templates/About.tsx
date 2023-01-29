import Image from "next/image";
import { useEffect, useRef } from "react";
import { Title, Text, Box, Divider } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { arsenal, ibmKr, montserrat } from "types/TextType";
import { create } from "@lottiefiles/lottie-interactivity";

const About = () => {
  const { classes } = useStyles();

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

  const skillCodeList = SkillCode.map((item, index) => (
    <Box key={index} className={classes.skillItem}>
      {item.imgsrc ? (
        <Image src={item.imgsrc} width={80} height={80} alt={item.title} />
      ) : null}
      <Text className={montserrat.className} fz={"sm"}>
        {item.title}
      </Text>
    </Box>
  ));

  const skillDesignList = SkillDesign.map((item, index) => (
    <Box key={index} className={classes.skillItem}>
      {item.imgsrc ? (
        <Image src={item.imgsrc} width={80} height={80} alt={item.title} />
      ) : null}
      <Text className={montserrat.className} fz={"sm"}>
        {item.title}
      </Text>
    </Box>
  ));

  const skillGitList = SkillGit.map((item, index) => (
    <Box key={index} className={classes.skillItem}>
      {item.imgsrc ? (
        <Image src={item.imgsrc} width={80} height={80} alt={item.title} />
      ) : null}
      <Text className={montserrat.className} fz={"sm"}>
        {item.title}
      </Text>
    </Box>
  ));

  return (
    <Box className={classes.wrap}>
      <Box className={classes.wrapLeft}>
        <Text className={montserrat.className}>Hi there,</Text>
        <Title className={arsenal.className}>
          Im Bora, Front-end Developer
        </Title>
        <Image
          src="https://images.unsplash.com/photo-1617037448248-6bd7b4a0d038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt="profile shot"
          width={500}
          height={600}
        />
        <Box className={classes.wrapLottie}>
          <lottie-player
            id="firstLottie"
            ref={containerRef}
            autoplay
            loop
            mode="normal"
            src="https://assets1.lottiefiles.com/packages/lf20_bevi1628.json"
            style={{ width: "450px", height: "450px" }}
          ></lottie-player>
        </Box>
      </Box>

      <Box className={classes.wrapRight}>
        <Text className={ibmKr.className}>
          현재 포트폴리오는
          <span className={montserrat.className}>
            {" "}
            React, Next.js, Mantine(emotion){" "}
          </span>
          으로 제작했습니다.
        </Text>

        <Box mt={"lg"} className={classes.wrapSkillBox}>
          <Divider
            my="xs"
            label={
              <Title className={classes.skillTitle}>
                <span className={arsenal.className}>Front-end skills</span>
              </Title>
            }
            fz={"lg"}
            className={arsenal.className}
          />
          <Box className={classes.wrapSkill}>{skillCodeList}</Box>
        </Box>
        <Box className={classes.wrapSkillBox}>
          <Divider
            my="xs"
            label={
              <Title className={classes.skillTitle}>
                <span className={arsenal.className}>Design Tools</span>
              </Title>
            }
            fz={"lg"}
            className={arsenal.className}
          />
          <Box className={classes.wrapSkill}>{skillDesignList}</Box>
        </Box>
        <Box className={classes.wrapSkillBox}>
          <Divider
            my="xs"
            label={
              <Title className={classes.skillTitle}>
                <span className={arsenal.className}>Romote Repository</span>
              </Title>
            }
            fz={"lg"}
            className={arsenal.className}
          />

          <Box className={classes.wrapSkill}>{skillGitList}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

const skillData: SkillProps = {
  code: [
    {
      title: "HTML",
      imgsrc: "/logo/html.png",
    },
    {
      title: "CSS",
      imgsrc: "/logo/css.png",
    },
    {
      title: "styled-component",
      imgsrc: "/logo/styled-component.png",
    },
    {
      title: "emotion",
      imgsrc: "/logo/emotion.png",
    },
    {
      title: "JavaScript",
      imgsrc: "/logo/js.png",
    },
    {
      title: "TypeScript",
      imgsrc: "/logo/ts.png",
    },
    {
      title: "React",
      imgsrc: "/logo/react.png",
    },
    {
      title: "Next.js",
      imgsrc: "/logo/nextjs.png",
    },
  ],
  design: [
    {
      title: "photoshop",
      imgsrc: "/logo/photoshop.png",
    },
    {
      title: "Figma",
      imgsrc: "/logo/figma.png",
    },
  ],
  git: [
    {
      title: "GitHub",
      imgsrc: "/logo/github.png",
    },
    {
      title: "git-fork",
      imgsrc: "/logo/gitfork.png",
    },
  ],
};

type SkillDetailProps = {
  title: string;
  imgsrc: string | null;
};

type SkillProps = {
  [key: string]: Array<SkillDetailProps>;
};

const SkillCode = skillData.code;
const SkillDesign = skillData.design;
const SkillGit = skillData.git;

const useStyles = createStyles((theme, _params, getRef) => ({
  wrap: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "64px 16px 72px",
  },

  wrapLeft: {
    width: "48%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing.md,
    position: "relative",
  },

  wrapRight: {
    width: "48%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing.md,
    marginTop: "64px",
  },

  wrapLottie: {
    position: "absolute",
    top: "-110px",
    left: "284px",
  },

  wrapSkillBox: {
    width: "100%",
  },

  wrapSkill: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },

  skillItem: {
    width: "182px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing.md,
    boxSizing: "border-box",
    gap: theme.spacing.xs,
  },

  skillTitle: {
    fontSize: theme.fontSizes.md,
    marginLeft: theme.spacing.xl,
    position: "relative",
    "&::before": {
      content: `""`,
      width: "10px",
      height: "10px",
      clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
      backgroundColor: "#ed6ea0",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: "-16px",
    },
  },
}));
