import { Button, createStyles, useMantineColorScheme } from "@mantine/core";
import { Flex, Text, Box, Title } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { Link } from "react-scroll";
import { arsenal } from "types/TextType";
import LinkLocale from "next/link";
import { useTranslation } from "next-i18next";

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
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const router = useRouter()
  const { t } = useTranslation("home");

  return (
    <Box className={classes.wrapHeader} bg={dark ? "#1A1B1E" : "white"}>
      <Title className={arsenal.className}>BORA&apos;s Portfolio</Title>
      <Flex
        gap="lg"
        justify="flex-end"
        align="center"
        direction="row"
        wrap="wrap"
      >

      <LinkLocale
        href={router.pathname}
        locale={router.locale === "en" ? "ko-KR" : "en"}
        passHref
        className={classes.lang}
      >
        <span className={arsenal.className}>
          {t("lang.title")}
        </span>
      </LinkLocale>
        
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

        <ActionIcon
          variant="filled"
          color={dark ? "pink.4" : "violet.3"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
      </Flex>
    </Box>
  );
};

export default Header;

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapHeader: {
    width: "100%",
    maxWidth: "1280px",
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing.sm,
    borderBottom: "1px solid",
    borderColor: theme.colors.gray[6],
    position: "fixed",
    top: 0,
    left: "auto",
    zIndex: 999,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      [`.${getRef("menu")}`] : {
        display : "none"
      }
    }
  },
  menu: {
    ref: getRef("menu"),
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    "&:before": {
      content: `""`,
      width: "100%",
      height: "1px",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.dark[9],
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
  lang: {
    cursor: "pointer",
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
    color: theme.colorScheme == "dark"
    ? theme.colors.gray[1]
    : theme.black,
    backgroundColor:
      theme.colorScheme == "dark"
        ? theme.colors.pink[4]
        : theme.colors.pink[2],
    "&:hover": {
      backgroundColor: theme.colorScheme == "dark"
      ? theme.colors.pink[6]
      : theme.colors.pink[4],
    }
  }
}));
