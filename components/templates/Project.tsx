import styled from "@emotion/styled";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  Box,
} from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { arsenal, ibmKr } from "types/TextType";

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow:
      "2px 0px 4px 0px rgba(17, 0, 0, 0.29),7px -5px 10px -11px rgba(39, 39, 39, 0.79);",
    borderRadius: theme.spacing.md,
  },

  title: {
    fontFamily: `${ibmKr}, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.colors.gray[0],
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
    filter: "drop-shadow(4px 6px 6px rgba(0, 0, 0, 0.66))",
  },

  category: {
    color: theme.colors.gray[0],
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  description: {
    color: theme.white,
    fontWeight: 400,
    filter: "drop-shadow(4px 6px 6px rgba(0, 0, 0, 0.66))",
  },

  wrapInfo: {
    background: "linear-gradient(to top, rgba(0,0,0,0.684), rgba(0,0,0,0.3))",
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
  },
}));

interface CardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

function Card({ image, title, description, category }: CardProps) {
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
        </div>
        <Button variant="white" color="dark" className={classes.button}>
          View the site
        </Button>
      </Box>
    </Paper>
  );
}

const data = [
  {
    image: "/img/devrel.png",
    title: "Dev-rel",
    description: "기업 기술블로그 큐레이션 사이트의 프론트엔드 개발",
    category: "팀 데브렐",
  },
  {
    image: "/img/busanbeachweather.png",
    title: "부산해수욕장날씨",
    description:
      "부산해수욕장 이용객들을 위한 날씨, 수온 등 정보 제공 사이트 디자인 제작 및 프론트엔드 개발",
    category: "DX Sprint",
  },
  {
    image: "/img/technomade_admin.png",
    title: "테크노메이드 어드민 웹사이트",
    description: "주문, 원단, CS관리 등 어드민 사이트 디자인 제작 및 퍼블리싱",
    category: "로앤피플",
  },
  {
    image: "/img/technomade_user.png",
    title: "테크노메이드 웹사이트",
    description:
      "사용자 화면 내 문의, 고객경험, 고객정보 등 게시판 디자인 제작 및 퍼블리싱",
    category: "로앤피플",
  },
  {
    image: "/img/seahan.png",
    title: "상품 상세페이지 및 배너",
    description: "상품판매 촉진을 위한 상품 상세설명 페이지와 이미지 배너 제작",
    category: "새한그레인",
  },
];

const Project = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Wrap>
      <Title className={arsenal.className} sx={{ marginBottom: "64px" }}>
        Projects I participated
      </Title>
      <Carousel
        withIndicators
        height={440}
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
    </Wrap>
  );
};

export default Project;

const Wrap = styled.div({
  width: "100%",
  padding: "64px 32px 72px",
  boxShadow: "0px 11px 44px -22px rgba(99,99,99,1)",
});
