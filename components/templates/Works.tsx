import { Title, Text, Accordion, Box, Group, Badge, List, ThemeIcon } from "@mantine/core";
import { arsenal, ibmKr, montserrat } from "types/TextType";
import { createStyles } from "@mantine/core";
import { expData } from "data/experienceData";
import { useTranslation } from "next-i18next";
import ExperienceItem from "components/organisms/ExperienceItem";
import { IconLink } from "@tabler/icons-react";
import { expDataProps } from "./Experience";


const Work = () => {
  const { classes } = useStyles();

  const { t } = useTranslation("experience");

  // const expDataJson = t<string, expDataProps[]>("experience.items", {returnObjects: true})

  const workList = expData.filter((item: expDataProps, index:number) => {
    return item.sort === 'work'
  })

  const itemList = workList.map((item: expDataProps, index:number) => (
    <Accordion.Item value={item.title} key={index}>
      <Accordion.Control>
        <ExperienceItem {...item}/>
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm" className={ibmKr.className}>{item.content}</Text>
        <List spacing="xs" size="sm" center icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconLink size={16} />
          </ThemeIcon>
        }>
          { item.projectList && item.projectList.length > 0 &&
            item.projectList.map((item, idx) => (
              <List.Item key={idx} className={ibmKr.className} style={{marginTop: '0.5rem'}}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
              </List.Item>
            ))
          }
          {
            item.site &&
              <List.Item className={ibmKr.className} style={{marginTop: '0.5rem'}}>
                  <a href={item.site} target="_blank" rel="noopener noreferrer">Go to the Site</a>
              </List.Item>
          }
        </List>
      </Accordion.Panel>
    </Accordion.Item>
  ));


  return (
    <Box className={classes.wrap} id="works">
      <Box className={classes.wrapExperienceTitle}>
        <Title className={arsenal.className}>What I have worked</Title>
      </Box>
      <Box className={classes.wrapAccordion}>
        <Accordion chevronPosition="right" variant="contained">
          {itemList}
        </Accordion>
      </Box>
    </Box>
  );
};

export default Work;

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
