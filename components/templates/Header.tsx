import styled from "@emotion/styled";
import { Flex, Title, Text } from "@mantine/core";

const Header = () => {
  return (
    <Wrap>
      <Title>포트폴리오 사이트</Title>
      <Flex
        gap="lg"
        justify="flex-end"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Text>메뉴1</Text>
        <Text>메뉴2</Text>
        <Text>메뉴3</Text>
      </Flex>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "16px",
  borderBottom: "1px solid",
  borderColor: "#ccc",
});
