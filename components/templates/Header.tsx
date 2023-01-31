import { createStyles } from "@mantine/core";
import { Flex, Title, Text, Box } from "@mantine/core";
import { Link } from "react-scroll";

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
      <Title>포트폴리오 사이트</Title>
      <Flex
        gap="lg"
        justify="flex-end"
        align="center"
        direction="row"
        wrap="wrap"
      >
        {headersData.map((item) => (
          <Text key={item.id}>
            <Link to={item.id} spy={true} smooth={true}>
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
    padding: theme.spacing.md,
    borderBottom: "1px solid",
    borderColor: "#ccc",
    position: "fixed",
    top: 0,
    left: "auto",
    backgroundColor: theme.white,
    zIndex: 999,
  },
}));
