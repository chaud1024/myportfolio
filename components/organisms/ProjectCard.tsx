import {
  Badge,
  Box,
  Button,
  Paper,
  Text,
  Title,
  createStyles,
} from "@mantine/core";
import { ProjectProps } from "data/projectData";

const ProjectCard = ({
  image,
  title,
  description,
  category,
  site,
  skill,
}: ProjectProps) => {
  const { classes } = useStyles();
  return (
    <Paper sx={{ backgroundImage: `url(${image})` }} className={classes.card}>
      <Box className={classes.wrapInfo}>
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
          <Text className={classes.description}>{description}</Text>
          <div>
            {skill.map((item, index) => (
              <Badge key={index} mr={"xs"} className={classes.badge}>
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <Button
          variant="white"
          color="dark"
          className={classes.button}
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={site}
        >
          View the site
        </Button>
      </Box>
    </Paper>
  );
};

export default ProjectCard;

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: theme.shadows.sm,
    borderRadius: theme.spacing.md,
  },

  title: {
    fontFamily: "'IBM Plex Sans KR', sans-serif",
    fontWeight: 900,
    color: theme.colors.gray[0],
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
    filter: theme.shadows.lg,
  },

  category: {
    color: theme.colors.gray[1],
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  description: {
    color: theme.white,
    fontWeight: 400,
    filter: theme.shadows.lg,
  },

  badge: {
    color: theme.colors.cyan[0],
    backgroundColor: theme.colors.cyan[9],
    fontWeight: 400,
  },

  wrapInfo: {
    background: theme.shadows.xl,
    padding: "24px",
    boxSizing: "border-box",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: theme.spacing.sm,
  },

  button: {
    width: "fit-content",
    marginBottom: theme.spacing.xs,
    fontFamily: "'Arsenal', sans-serif",
  },
}));
