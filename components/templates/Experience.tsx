import { Title, Text, Accordion, Box } from "@mantine/core";
import { arsenal } from "types/TextType";
import { createStyles } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import ExperienceItem from "components/organisms/ExperienceItem";
import { expData } from "data/experienceData";

const Experience = () => {
  const { classes } = useStyles();

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  const itemList = expData.map((item, index) => (
    <Accordion.Item value={item.title} key={index}>
      <Accordion.Control>
        <ExperienceItem {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
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

const useStyles = createStyles((theme, _params, getRef) => ({
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

  wrapBadge: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  wrapLottieTwinkle: {
    position: "absolute",
    top: "-18px",
    left: "-29px",
    transform: "rotate(-9deg)",
  },
}));
