export interface ProjectProps {
  image: string;
  title: string;
  description: string;
  category: string;
  site: string;
  skill: string[];
}

export const projectData: ProjectProps[] = [
  {
    image: "/img/devrel.png",
    title: "Dev-rel",
    description: "기업 기술블로그 큐레이션 사이트의 프론트엔드 개발",
    category: "팀 데브렐",
    site: "https://dev-rel.com/",
    skill: ["Next.js", "TypeScript", "mantine"],
  },
  {
    image: "/img/busanbeachweather.png",
    title: "부산해수욕장날씨",
    description:
      "부산해수욕장 이용객들을 위한 날씨, 수온 등 정보 제공 사이트 디자인 제작 및 프론트엔드 개발",
    category: "DX Sprint",
    site: "https://busanbeachweather.com/",
    skill: ["Next.js", "TypeScript", "emotion", "illustrator", "Figma"],
  },
  {
    image: "/img/technomade_admin.png",
    title: "테크노메이드 어드민 웹 사이트",
    description: "주문, 원단, CS관리 등 어드민 사이트 디자인 제작 및 퍼블리싱",
    category: "로앤피플",
    site: "/project/technomade_admin/index.html",
    skill: ["html", "css", "js"],
  },
  {
    image: "/img/technomade_user.png",
    title: "테크노메이드 유저 웹 사이트",
    description:
      "문의하기, 고객경험, 마이페이지 콘텐츠 디자인 제작 및 퍼블리싱",
    category: "로앤피플",
    site: "/project/technomade/index.html",
    skill: ["html", "css", "js"],
  },
  {
    image: "/img/seahan.png",
    title: "상품 상세페이지 및 배너",
    description: "상품판매 촉진을 위한 상품 상세설명 페이지와 이미지 배너 제작",
    category: "새한그레인",
    site: "https://smartstore.naver.com/orandamarket",
    skill: ["photoshop"],
  },
];
