import {
  Box,
  Text,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

const MarqueeBanner = (): JSX.Element => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const marquee = keyframes`
    from { transform: translateX(200%); }
    to { transform: translateX(-320%); }
  `;

  const animation = prefersReducedMotion
    ? undefined
    : `${marquee} infinite 10s linear`;

  return (
    <Box
      w="100%"
      display={"flex"}
      flexDirection={"row"}
      overflow={"clip"}
      justifyContent={"center"}
      transition={"all .4s ease-out"}
      position={"relative"}
      border={"1px solid black"}
    >
      <Text
        _after={{
          content:
            '"This is a banner text that should stretch through the whole screen"',
          position: "absolute",
          left: "120%",
          w: "100%",
          textAlign: "center",
        }}
        animation={animation}
      >
        This is a banner text that should stretch through the whole screen
      </Text>
    </Box>
  );
};

export default MarqueeBanner;
