import { Box, Divider, Text, Title } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { SkillCode, SkillDesign, SkillGit } from "data/skillData";
import Image from "next/image";
import { arsenal, montserrat } from "types/TextType";

const AboutSkills = () => {
  const { classes } = useStyles();

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
    <>
      <Box mt={"lg"} className={classes.wrapSkillBox}>
        <Divider
          my="xs"
          label={
            <Title className={classes.skillTitle}>
              <span className={arsenal.className}>Front-end Skills</span>
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
              <span className={arsenal.className}>Git Tools</span>
            </Title>
          }
          fz={"lg"}
          className={arsenal.className}
        />
        <Box className={classes.wrapSkill}>{skillGitList}</Box>
      </Box>
    </>
  );
};

export default AboutSkills;

const useStyles = createStyles((theme, _params, getRef) => ({
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
      width: "14px",
      height: "10px",
      clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
      backgroundColor: "#ed6ea0",
      position: "absolute",
      top: "50%",
      left: "-16px",
      transform: "translateY(-50%)",
    },
  },
}));
