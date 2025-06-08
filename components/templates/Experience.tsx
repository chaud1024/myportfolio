import { Title, Text, Accordion, Box, Group, Badge } from "@mantine/core";
import { arsenal, ibmKr, montserrat } from "types/TextType";
import { createStyles } from "@mantine/core";
import { expData } from "data/experienceData";
import { useTranslation } from "next-i18next";
import ExperienceItem from "components/organisms/ExperienceItem";

interface Project {
  title: string;
  url: string;
}

export interface expDataProps {
  title: string;
  where: string;
  from: string;
  to: string;
  description: string;
  content: string;
  sort: string;
  site: string | null;
  projectList?: Project[]; 
}

const Experience = () => {
  const { classes } = useStyles();

  const { t } = useTranslation("experience");

  // const expDataJson = t<string, expDataProps[]>("experience.items", {returnObjects: true})

  
  const expList = expData.filter((item: expDataProps, index:number) => {
    return item.sort === 'experience'
  })

  const itemList = expList.map((item: expDataProps, index:number) => (
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
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: "column"
   }
  },

  wrapExperienceTitle: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    marginTop: theme.spacing.md,
  },

  wrapAccordion: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "100%"
   }
  },

}));
