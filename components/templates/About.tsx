import styled from "@emotion/styled";
import { Flex, Title, Text } from "@mantine/core";
import Image from "next/image";
import { arsenal } from "types/TextType";
import { create } from "@lottiefiles/lottie-interactivity";
import { useEffect, useRef } from "react";
import { relative } from "node:path/win32";

const About = () => {
  const containerRef: any = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  useEffect(() => {
    containerRef.current.addEventListener(
      "load",
      (e: React.ChangeEvent<HTMLDivElement>) => {
        // configure the interactivity library
        console.log("load");
        create({
          mode: "scroll",
          player: "#firstLottie",
          actions: [
            {
              visibility: [0, 1],
              type: "seek",
              frames: [0, 120],
            },
          ],
        });
      }
    );

    return () => {};
  }, [containerRef]);
  return (
    <Wrap>
      <Flex
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="column"
        wrap="wrap"
      >
        <Text>Hi there,</Text>
        <Title className={arsenal.className}>
          Im Bora, Front-end Developer
        </Title>
        <Image
          src="https://images.unsplash.com/photo-1617037448248-6bd7b4a0d038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt="profile shot"
          width={500}
          height={600}
        />
      </Flex>

      <div>
        <div>
          현재 포트폴리오는 React, Next.js, Mantine(emotion)으로 제작했습니다.
        </div>
        <LottieWrap>
          <lottie-player
            id="firstLottie"
            ref={containerRef}
            autoplay
            loop
            mode="normal"
            src="https://assets1.lottiefiles.com/packages/lf20_bevi1628.json"
            style={{ width: "450px", height: "450px" }}
          ></lottie-player>
        </LottieWrap>
      </div>
    </Wrap>
  );
};

export default About;

const Wrap = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "64px 16px 72px",
  position: "relative",
});

const LottieWrap = styled.div({
  position: "absolute",
  top: "-52px",
  left: "326px",
});
