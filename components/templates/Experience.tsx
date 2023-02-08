import { Title, Text, Accordion, Box, Group, Badge } from "@mantine/core";
import { arsenal, ibmKr, montserrat } from "types/TextType";
import { createStyles } from "@mantine/core";
import { useEffect, useRef } from "react";

import { useTranslation } from "next-i18next";
import ExperienceItem from "components/organisms/ExperienceItem";

export interface expDataProps {
  title: string;
  where: string;
  from: string;
  to: string;
  description: string;
  content: string;
  site: string | null;
}

const Experience = () => {
  const { classes } = useStyles();

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  const { t } = useTranslation("experience");

  const expDataJson = t<string, expDataProps[]>("experience.items", {returnObjects: true})

  const itemList = expDataJson.map((item: expDataProps, index:number) => (
    <Accordion.Item value={item.title} key={index}>
      <Accordion.Control>
        <ExperienceItem {...item}/>
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm" className={ibmKr.className}>{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));



  return (
    <Box className={classes.wrap} id="experiences">
      <Box className={classes.wrapExperienceTitle}>
        <Title className={arsenal.className}>What I have done</Title>
        <Box className={classes.wrapLottieProject}>
          <lottie-player
            ref={ref}
            src="https://assets8.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json"
            background="transparent"
            speed="1.5"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></lottie-player>
        </Box>

      </Box>
      <Box className={classes.wrapAccordion}>
        <Accordion chevronPosition="right" variant="contained">
          {itemList}
        </Accordion>
      </Box>
    </Box>
  );
};

export default Experience;

const useStyles = createStyles((theme, _params) => ({
  wrap: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "64px 16px 72px",
  },

  wrapExperienceTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    marginTop: theme.spacing.md,
  },

  wrapLottieProject: {
    position: "absolute",
    top: "200px",
    left: "0",
  },

  wrapAccordion: {
    width: "66%",
    display: "flex",
    flexDirection: "column",
  },

}));
