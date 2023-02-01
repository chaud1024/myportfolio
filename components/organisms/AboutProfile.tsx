import { Title } from "@mantine/core";
import Image from "next/image";
import { arsenal } from "types/TextType";

const AboutProfile = () => {
  return (
    <>
      <Title className={arsenal.className}>Im Bora, Front-end Developer</Title>

      <Image
        src="/img/Bora_Kim.jpg"
        alt="profile shot"
        width={500}
        height={640}
      />
    </>
  );
};

export default AboutProfile;
