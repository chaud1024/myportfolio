type SkillDetailProps = {
  title: string;
  imgsrc: string | null;
};

type SkillProps = {
  [key: string]: Array<SkillDetailProps>;
};

const skillData: SkillProps = {
  code: [
    {
      title: "HTML",
      imgsrc: "/logo/html.png",
    },
    {
      title: "CSS",
      imgsrc: "/logo/css.png",
    },
    {
      title: "styled-component",
      imgsrc: "/logo/styled-component.png",
    },
    {
      title: "emotion",
      imgsrc: "/logo/emotion.png",
    },
    {
      title: "TailwindCSS",
      imgsrc: "/logo/tailwind.png",
    },
    {
      title: "JavaScript",
      imgsrc: "/logo/js.png",
    },
    {
      title: "TypeScript",
      imgsrc: "/logo/ts.png",
    },
    {
      title: "React",
      imgsrc: "/logo/react.png",
    },
    {
      title: "Next.js",
      imgsrc: "/logo/nextjs.png",
    },
    {
      title: "Vue3.js",
      imgsrc: "/logo/vue3.png",
    },
  ],
  design: [
    {
      title: "photoshop",
      imgsrc: "/logo/photoshop.png",
    },
    {
      title: "illustrator",
      imgsrc: "/logo/illustrator.png",
    },
    {
      title: "Figma",
      imgsrc: "/logo/figma.png",
    },
  ],
  git: [
    {
      title: "GitHub",
      imgsrc: "/logo/github.png",
    },
  ],
};

export const SkillCode = skillData.code;
export const SkillDesign = skillData.design;
export const SkillGit = skillData.git;
