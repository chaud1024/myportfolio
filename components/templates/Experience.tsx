import styled from "@emotion/styled";
import { Title, Text, Group, Accordion, Box, Badge } from "@mantine/core";
import { arsenal, ibmKr, montserrat } from "types/TextType";

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
      "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다.",
    content:
      "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.",
    site: null,
  },
  {
    title: "웹디자인 & 퍼블리셔 교육",
    where: "그린컴퓨터학원 부산본점",
    from: "2020. 11.",
    to: "2021. 03.",
    description:
      "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다.",
    content:
      "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.",
    site: null,
  },
  {
    title: "웹디자이너 & 자사몰 관리",
    where: "새한그레인",
    from: "2021. 04.",
    to: "2021. 08.",
    description:
      "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다.",
    content:
      "지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.",
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
  return (
    <Group noWrap>
      <Box
        sx={(theme) => ({
          textAlign: "left",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.md,
          cursor: "pointer",
          width: "66%",
        })}
      >
        <Badge color="indigo" radius="sm" className={ibmKr.className}>
          {where}
        </Badge>
        <Text fz="lg" fw={600}>
          {title}
        </Text>
      </Box>
      <div>
        <Box
          sx={(theme) => ({
            fontSize: theme.fontSizes.sm,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: 6,
          })}
        >
          <Text className={montserrat.className} size={12}>
            {from} ~ {to}
          </Text>
          {site ? (
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
          ) : null}
        </Box>
        <Text size="sm" color="dimmed" fw={400} className={ibmKr.className}>
          {description}
        </Text>
      </div>
    </Group>
  );
};