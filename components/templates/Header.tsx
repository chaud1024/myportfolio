import { createStyles } from "@mantine/core";
import { Flex, Text, Box, Title } from "@mantine/core";
import { Link } from "react-scroll";
import { arsenal } from "types/TextType";

const headersData = [
  {
    label: "About",
    id: "about",
  },
  {
    label: "Experiences",
    id: "experiences",
  },
  {
    label: "Projects",
    id: "projects",
  },
];

const Header = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapHeader}>
      <Title className={arsenal.className}>BORA&apos;s Portfolio</Title>
      <Flex
        gap="lg"
        justify="flex-end"
        align="center"
        direction="row"
        wrap="wrap"
      >
        {headersData.map((item) => (
          <Text key={item.id} className={classes.menu}>
            <Link
              to={item.id}
              spy={true}
              smooth={true}
              className={arsenal.className}
            >
              {item.label}
            </Link>
          </Text>
        ))}
      </Flex>
    </Box>
  );
};

export default Header;

const useStyles = createStyles((theme, _params) => ({
  wrapHeader: {
    width: "1280px",
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing.sm,
    borderBottom: "1px solid",
    borderColor: theme.colors.gray[6],
    position: "fixed",
    top: 0,
    left: "auto",
    backgroundColor: theme.white,
    zIndex: 999,
  },
  menu: {
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    "&:before": {
      content: `""`,
      width: "100%",
      height: "1px",
      backgroundColor: theme.black,
      position: "absolute",
      bottom: 0,
      left: "calc(-100%)",
    },
    "&:hover": {
      "&:before": {
        left: "0",
        transition: "ease-in-out, 0.5s",
      },
    },
  },
}));
