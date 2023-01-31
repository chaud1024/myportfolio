import { Box, Flex, Text, Title } from "@mantine/core";
import { arsenal, montserrat } from "types/TextType";
import {
  IconBrandGithub,
  IconMailForward,
  IconPhoneCall,
} from "@tabler/icons-react";

const Contact = () => {
  return (
    <>
      <Title className={arsenal.className}>Contact Me</Title>
      <Box>
        <Flex gap={8}>
          <IconPhoneCall size={24} stroke={2} />
          <Text className={montserrat.className}>+82 10 9019 1865</Text>
        </Flex>
        <Flex gap={8}>
          <IconMailForward size={24} stroke={2} />
          <Text className={montserrat.className}>chaud1024@gmail.com</Text>
        </Flex>
        <Flex gap={8}>
          <IconBrandGithub size={24} stroke={2} />
          <Text className={montserrat.className}>
            https://github.com/chaud1024
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Contact;
