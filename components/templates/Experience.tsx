import styled from "@emotion/styled";
import { Title, Text, Group, Accordion, Box, Badge } from "@mantine/core";
import { arsenal, ibmKr, montserrat } from "types/TextType";
import { createStyles } from "@mantine/core";

const Experience = () => {
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
    <Wrap>
      <Title className={arsenal.className}>What I have done</Title>
      <WrapAccordion>
        <Accordion chevronPosition="right" variant="contained">
          {itemList}
        </Accordion>
      </WrapAccordion>
    </Wrap>
  );
};

export default Experience;

const Wrap = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "64px 16px 72px",
});

const WrapAccordion = styled.div({
  width: "66%",
  display: "flex",
  flexDirection: "column",
});

// Experiences data
const expData: ExpProps[] = [
  {
    title: "어학연수 & 워킹홀리데이",
    where: "Auckland, New Zealand",
    from: "2019. 01.",
    to: "2020. 09.",
    description:
      "어학연수 후 IELTS 6.5 level을 취득하여 현지 로컬 카페인 Columbus Coffee에서 바리스타로 근무했습니다.",
    content:
      "뉴질랜드 오클랜드에서 인생 첫 독립을 했습니다. 8개월간의 어학연수 후 IELTS 6.5를 취득하였고, 현지인들로 구성된 뉴질랜드 프랜차이즈 카페인 Columbus Coffee Mt.Wellington 점에서 바리스타로 근무했습니다. 처음에는 모든 고객, 팀원들과 영어로만 대화하기 두려웠지만, 곧 자신감있게 제 견해를 표하고 다양한 주제로 커뮤니케이션 할 수 있게 되어 큰 성취감을 얻었습니다.",
    site: null,
  },
  {
    title: "웹디자인 & 퍼블리셔 교육",
    where: "그린컴퓨터학원 부산본관",
    from: "2020. 11.",
    to: "2021. 03.",
    description:
      "웹사이트 디자인 제작과 기본적인 HTML, CSS, JavaScript를 이해하고 웹사이트의 뼈대를 구현할 수 있습니다.",
    content:
      "오클랜드에서 Covid-19로 인해 카페에서 근무가 불가능했던 기간 동안 생활코딩을 접했습니다. 그때 IT직군에 대해 관심을 갖게 되었고, 귀국 후 국비지원 교육을 통해 웹사이트 디자인의 이해와 제작 툴 사용법, 그리고 HTML, CSS, JavaScript의 기초에 대해 배우고, 웹디자이너/퍼블리셔로서의 커리어를 쌓는 시작점이 되었습니다",
    site: null,
  },
  {
    title: "웹디자이너 & 자사몰 관리",
    where: "새한그레인",
    from: "2021. 04.",
    to: "2021. 08.",
    description:
      "웹디자이너로서 쇼핑몰의 상품상세화면 제작하고 자사몰의 상품 출고 및 재고 관리를 했습니다.",
    content: ".",
    site: "https://smartstore.naver.com/orandamarket",
  },
  {
    title: "웹디자이너 & 퍼블리셔",
    where: "로앤피플",
    from: "2021. 09.",
    to: "2022. 05.",
    description:
      "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다.",
    content:
      "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.",
    site: null,
  },
  {
    title: "DX Spirnt 최우수상 수상",
    where: "DX Callange",
    from: "2022. 08.",
    to: "2022. 08.",
    description:
      "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다.",
    content:
      "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.",
    site: "https://busanbeachweather.com",
  },
  {
    title: "Devrel 프론트 개발",
    where: "팀 데브렐",
    from: "2022. 10.",
    to: "2023. 01.",
    description:
      "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다.",
    content:
      "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.",
    site: "https://dev-rel.com/develop",
  },
];

interface ExpProps {
  title: string;
  where: string;
  from: string;
  to: string;
  description: string;
  content: string;
  site: string | null;
}

const ExperienceItem = ({
  title,
  where,
  from,
  to,
  description,
  site,
}: ExpProps) => {
  const { classes } = useStyles();
  return (
    <Group noWrap>
      <Box
        sx={(theme) => ({
          textAlign: "left",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.md,
          cursor: "pointer",
          width: "44%",
        })}
      >
        <Badge color="indigo" radius="sm" className={ibmKr.className}>
          {where}
        </Badge>
        <Text fz="lg" fw={600} sx={{ paddingTop: "4px" }}>
          {title}
        </Text>
      </Box>
      <Box sx={{ width: "54%" }}>
        <Box
          sx={(theme) => ({
            fontSize: theme.fontSizes.sm,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            paddingTop: theme.spacing.xs,
            paddingBottom: theme.spacing.xs,
          })}
        >
          <Text className={montserrat.className} size={12}>
            {from} ~ {to}
          </Text>
          {site ? (
            <Box className={classes.wrapBadge}>
              <div className={classes.wrapLottieTwinkle}>
                <lottie-player
                  id="secondLottie"
                  autoplay
                  loop
                  mode="normal"
                  src="https://assets5.lottiefiles.com/packages/lf20_mdsD1ta4jU.json"
                  style={{ width: "40px", height: "40px" }}
                ></lottie-player>
              </div>
              <Badge
                radius="sm"
                variant="gradient"
                gradient={{ from: "#ed6ea0", to: "#ff9c75", deg: 35 }}
                component="a"
                href={site}
                target="_blank"
                className={montserrat.className}
                fw={400}
              >
                site
              </Badge>
            </Box>
          ) : null}
        </Box>
        <Text size="sm" color="dimmed" fw={400} className={ibmKr.className}>
          {description}
        </Text>
      </Box>
    </Group>
  );
};

const useStyles = createStyles((theme, _params, getRef) => ({
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
