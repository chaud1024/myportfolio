import { Title } from "@mantine/core";
import Image from "next/image";
import { arsenal } from "types/TextType";

const AboutProfile = () => {
  return (
    <>
      <Title className={arsenal.className}>Im Bora, Front-end Developer</Title>

      <Image
        src="https://images.unsplash.com/photo-1617037448248-6bd7b4a0d038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt="profile shot"
        width={500}
        height={600}
      />
    </>
  );
};

export default AboutProfile;
