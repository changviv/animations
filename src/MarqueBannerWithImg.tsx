import {
  Box,
  Center,
  Image,
  ListItem,
  Text,
  UnorderedList,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

import matchaCake from "./assets/cake1.png";
import matchaIceCream from "./assets/ice-cream.png";
import matchaIceTea from "./assets/matcha-ice-tea.png";
import matchaHotTea from "./assets/matcha-tea.png";

const gap = "1rem";

const MarqueeBannerWithImg = (): JSX.Element => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const marquee = keyframes`
      from { transform: translateX(0); }
      to { transform: translateX(calc(-100% - 2rem)); }
    `;

  const animation = prefersReducedMotion
    ? undefined
    : `${marquee} infinite 10s linear 1s`;

  return (
    <Box
      className="marquee"
      w="100%"
      display={"flex"}
      overflow={"hidden"}
      position={"relative"}
      border={"1px solid black"}
      gap={gap}
      userSelect={"none"}
    >
      <UnorderedList
        listStyleType={"none"}
        flexShrink={0}
        display={"flex"}
        justifyContent={"space-around"}
        gap={gap}
        minW="100%"
        animation={animation}
      >
        <ListItem textDecoration={"none"}>
          <Center justifyContent={"flex-start"}>
            <Image src={matchaIceTea} boxSize={8} />
            <Text margin={2}> Matcha Ice tea</Text>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"flex-start"}>
            <Image src={matchaCake} boxSize={8} />
            <Text margin={2}> Matcha cake</Text>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"flex-start"}>
            <Image src={matchaHotTea} boxSize={8} />
            <Text margin={2}> Matcha hot tea</Text>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"flex-start"}>
            <Image src={matchaIceCream} boxSize={8} />
            <Text margin={2}> Matcha icecream </Text>
          </Center>
        </ListItem>
      </UnorderedList>

      <UnorderedList
        listStyleType={"none"}
        flexShrink={0}
        display={"flex"}
        justifyContent={"space-around"}
        gap={"1rem"}
        minW="100%"
        aria-hidden="true"
        animation={animation}
      >
        <ListItem textDecoration={"none"}>
          <Center justifyContent={"flex-start"}>
            <Image src={matchaIceTea} boxSize={8} />
            <Text margin={2}> Matcha Ice tea</Text>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"flex-start"}>
            <Image src={matchaCake} boxSize={8} />
            <Text margin={2}> Matcha cake</Text>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"flex-start"}>
            <Image src={matchaHotTea} boxSize={8} />
            <Text margin={2}> Matcha hot tea</Text>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"flex-start"}>
            <Image src={matchaIceCream} boxSize={8} />
            <Text margin={2}> Matcha icecream </Text>
          </Center>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default MarqueeBannerWithImg;
