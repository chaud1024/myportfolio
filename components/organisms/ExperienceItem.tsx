import { Badge, Box, Group, Text } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { ibmKr, montserrat } from "types/TextType";

import { expDataProps } from "components/templates/Experience";

const ExperienceItem = ({
  title,
  where,
  from,
  to,
  description,
  site,
}: expDataProps) => {

  const { classes } = useStyles();

  return (
    <Group noWrap>
      <Box className={classes.wrapItemTitle}>
        <Badge color="indigo" radius="sm" className={ibmKr.className}>
          {where}
        </Badge>
        
        <Text fz="lg" fw={600} sx={{ paddingTop: "4px" }} className={ibmKr.className}>
          {title}
        </Text>
      </Box>
      <Box sx={{ width: "54%" }}>
        <Box className={classes.wrapItemContent}>
          <Text className={montserrat.className} size={12}>
            {from} ~ {to}
          </Text>
          {site ? (
            <Box className={classes.wrapBadge}>
              <div className={classes.wrapLottieTwinkle}>
                <lottie-player
                  id="secondLottie"
                  autoplay
                  loop
                  mode="normal"
                  src="https://assets5.lottiefiles.com/packages/lf20_mdsD1ta4jU.json"
                  style={{ width: "40px", height: "40px" }}
                ></lottie-player>
              </div>
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
            </Box>
          ) : null}
        </Box>
        <Text size="sm" color="dimmed" fw={400} className={ibmKr.className}>
          {description}
        </Text>
      </Box>
    
    </Group>
  );
};

export default ExperienceItem;

const useStyles = createStyles((theme, _params) => ({
  wrapItemTitle: {
    textAlign: "left",
    padding: theme.spacing.xs,
    borderRadius: theme.radius.md,
    cursor: "pointer",
    width: "44%",
  },

  wrapItemContent: {
    fontSize: theme.fontSizes.sm,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,
  },

  wrapBadge: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  wrapLottieTwinkle: {
    position: "absolute",
    top: "-18px",
    left: "-29px",
    transform: "rotate(-9deg)",
  },
}));
