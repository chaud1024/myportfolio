import { Box, createStyles } from "@mantine/core";
import {
  IconBrandGithub,
  IconMailForward,
  IconDeviceMobile,
} from "@tabler/icons-react";

const Contact = () => {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.wrap}>
        <Box className={classes.wrapIcon}>
          <a href="tel: +82-10-9019-1865">
            <IconDeviceMobile size={32} stroke={2} />
          </a>
        </Box>
        <Box className={classes.wrapIcon}>
          <a href="mailto: chaud1024@gmail.com">
            <IconMailForward size={32} stroke={2} />
          </a>
        </Box>
        <Box className={classes.wrapIcon}>
          <a
            href="https://github.com/chaud1024"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandGithub size={32} stroke={2} />
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Contact;

const useStyles = createStyles((theme, _params) => ({
  wrap: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.md,
  },
  wrapIcon: {
    padding: "12px 12px 6px",
    borderRadius: theme.spacing.xs,
    ["&:hover"]: {
      background:
        "linear-gradient(61deg, rgba(237,110,160,1) 0%, rgba(255,156,117,1) 79%)",
      ["svg"]: {
        stroke: theme.white,
      },
    },
  },
}));
