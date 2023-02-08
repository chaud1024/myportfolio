import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { createStyles, Title, useMantineTheme, Box } from "@mantine/core";
import { projectData } from "data/projectData";
import { arsenal } from "types/TextType";
import ProjectCard from "components/organisms/ProjectCard";

import { useTranslation } from "next-i18next";

export interface projectDataProps {
  image: string;
  title: string;
  description: string;
  category: string;
  site: string;
  skill: string[];
}

const Project = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const { t } = useTranslation("project");

  const projectDataJson = t<string, projectDataProps[]>("project.items", {returnObjects: true})

  const slides = projectDataJson.map((item: projectDataProps, index: number) => (
    <Carousel.Slide key={index}>
      <ProjectCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Box id="projects" className={classes.wrapCarousel}>
      <Title className={arsenal.className} sx={{ marginBottom: "32px" }}>
        Projects I participated
      </Title>
      <Carousel
        withIndicators
        height={450}
        slideSize="33.333333%"
        slideGap="md"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        loop
        align="start"
      >
        {slides}
      </Carousel>
    </Box>
  );
};

export default Project;

const useStyles = createStyles({
  wrapCarousel: {
    width: "100%",
    padding: "64px 32px 72px",
    boxShadow: "0px 11px 44px -22px rgba(99,99,99,1)",
  },
});
