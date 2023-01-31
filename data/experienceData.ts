export interface ExpProps {
  title: string;
  where: string;
  from: string;
  to: string;
  description: string;
  content: string;
  site: string | null;
}

export const expData: ExpProps[] = [
  {
    title: "Dev-rel 프론트 개발",
    where: "팀 데브렐",
    from: "2022. 10.",
    to: "2023. 01.",
    description:
      "기업 기술블로그를 큐레이션하는 사이드프로젝트 Dev-rel에서 디자이너/프론트엔드 개발자로 참여했습니다.",
    content:
      "1차 프로토타입 디자이너 및 프론트엔드 개발자로 참가했습니다. 1차때는 emotion을 사용해 모든 컴포넌트의 디자인을 직접 한 반면, 2차 때에는 React component library인 Mantine을 도입해 디자인적으로 훨씬 정돈되고 빠르게 프론트 개발을 진행할 수 있었습니다. 특히 현업 관계자들이 관심을 가질 콘텐츠를 바탕으로 프로젝트에 참가했다는 점에서 자신감과 보람을 느꼈습니다.",
    site: "https://dev-rel.com/develop",
  },
  {
    title: "DX Spirnt 최우수상 수상",
    where: "DX Callange",
    from: "2022. 08.",
    to: "2022. 08.",
    description:
      "2주간 진행된 해커톤 DX Sprint 행사에 디자이너/프론트엔드 개발자로 참가해 최우수상 수상을 했습니다.",
    content:
      "프론트엔드 개발자가 되기 위해 공부하던 중, 해커톤 참가해 다른 개발자들과 협업하여 처음으로 프론트엔드 개발자 역할을 수행해냈습니다. Atomic Design System을 도입해 컴포넌트 단위 개발과 TypeScript에 대한 기초를 공부할 수 있었고, 단시간에 집중도 높은 개발을 해냈다는 값진 경험을 했습니다.",
    site: "https://busanbeachweather.com",
  },
  {
    title: "웹디자이너 & 퍼블리셔",
    where: "로앤피플",
    from: "2021. 09.",
    to: "2022. 05.",
    description:
      "클라이언트의 요구사항을 반영한 웹사이트 디자인 및 퍼블리싱을 하고, 프론트엔드 개발자들과 프로젝트를 진행했습니다.",
    content:
      "기획자, 시니어 디자이너와 함께 클라이언트의 요구사항을 반영한 웹사이트 디자인을 하고, 최종 디자인 결과물에 맞춰 퍼블리싱한 후 프론트엔드 개발자들에게 넘겨주는 업무를 했습니다. 디자이너, 퍼블리셔들과 함께 디자인 협업툴인 Figma사용법을 익혔고, 개발자들과 소통하며 git 사용법을 배웠으며, 무엇보다 프로젝트 어드민 사이트를 주도적으로 디자인, 퍼블리싱하는 큰 경험을 했습니다.",
    site: null,
  },
  {
    title: "웹디자이너 & 자사몰 관리",
    where: "새한그레인",
    from: "2021. 04.",
    to: "2021. 08.",
    description:
      "웹디자이너로서 쇼핑몰의 상품상세화면 제작하고 자사몰의 상품 출고 및 재고 관리를 했습니다.",
    content:
      "photoshop을 사용하여 웹사이트 상품을 소개하기 위한 상품상세페이지를 제작하고, 자사몰과 스마트스토어 등 온라인 판매채널 판매 및 상품재고 관리를 했습니다.",
    site: "https://smartstore.naver.com/orandamarket",
  },
  {
    title: "웹디자인 & 퍼블리셔 교육",
    where: "그린컴퓨터학원 부산본관",
    from: "2020. 11.",
    to: "2021. 03.",
    description:
      "웹사이트 디자인 제작과 기본적인 HTML, CSS, JavaScript를 이해하고 웹사이트의 뼈대를 구현할 수 있습니다.",
    content:
      "오클랜드에서 Covid-19로 인해 카페에서 근무가 불가능했던 기간 동안 코딩을 접했습니다. 그때 IT직군에 대해 관심을 갖게 되었고, 귀국 후 국비지원 교육을 통해 웹사이트 디자인의 이해와 제작 툴 사용법, 그리고 HTML, CSS, JavaScript를 사용해 퍼블리싱을 할 수 있게 되었습니다.",
    site: null,
  },
  {
    title: "어학연수 & 워킹홀리데이",
    where: "Auckland, New Zealand",
    from: "2019. 01.",
    to: "2020. 09.",
    description:
      "어학연수 후 IELTS 6.5 level을 취득하여 현지 로컬 카페인 Columbus Coffee에서 바리스타로 근무했습니다.",
    content:
      "뉴질랜드 오클랜드에서 8개월간의 어학연수 후 IELTS 6.5를 취득하였고, 현지인들로 구성된 뉴질랜드 프랜차이즈 카페인 Columbus Coffee Mt.Wellington 점에서 바리스타로 근무했습니다. 모든 고객, 팀원들과 영어로 자신감있게 제 견해를 표하고 다양한 주제로 커뮤니케이션 할 수 있어 큰 성취감을 얻었습니다.",
    site: null,
  },
];
