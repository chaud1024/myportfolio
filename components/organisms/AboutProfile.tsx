import { Box, createStyles, Title } from "@mantine/core";
import Image from "next/image";
import { arsenal } from "types/TextType";
import { useRef } from "react";

const AboutProfile = () => {
  const { classes } = useStyles();
  
  const ref = useRef(null);

  return (
    <Box>
      <Box className={classes.wrapLottieHello}>
          <lottie-player
            ref={ref}
            src="https://assets4.lottiefiles.com/packages/lf20_rbtawnwz.json"
            background="transparent"
            speed="1.5"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></lottie-player>
      </Box>
      <Title className={arsenal.className}>Im Bora, Front-end Developer</Title>
        <Image
          src="/img/Bora_Kim.jpg"
          alt="profile shot"
          width={500}
          height={475}
          sizes="100vw"
          style={{
            width: '80%',
            height: 'auto',
          }}
        />
    </Box>
  );
};

export default AboutProfile;

const useStyles = createStyles((theme, _params, getRef) => ({

  wrapLottieHello: {
   position: "absolute",
   top: "-150px",
   left: "-72px",
  },
  
}));