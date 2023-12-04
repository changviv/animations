import { Button, Text, keyframes } from "@chakra-ui/react";
import { useState } from "react";
// import "./MarqueeButton.css";

const MarqueeButton = (): JSX.Element => {
  const [onHover, setOnHover] = useState(false);
  const marquee = keyframes`
    from { transform: translateX(0%); }
    to { transform: translateX(-120%); }
  `;

  const animation = onHover ? `${marquee} infinite 2s linear` : undefined;

  return (
    <Button
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      overflowX="hidden"
      transition={"all .4s ease-out"}
      position={"relative"}
    >
      <Text
        _after={{
          position: "absolute",
          left: " 130%",
          width: "100%",
          textAlign: "center",
        }}
        animation={animation}
      >
        {onHover ? "Add to cart" : "Buy Now"}
      </Text>
      <Text
        position={"absolute"}
        left="120%"
        w="100%"
        textAlign={"center"}
        animation={animation}
      >
        {onHover ? "Add to cart" : "Buy Now"}
      </Text>
    </Button>
  );
};

export default MarqueeButton;
