import { Box, ChakraProvider, Grid, VStack, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import MarqueeBannerWithImg from "./MarqueBannerWithImg";
import MarqueeButton from "./MarqueeButton";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          {/* <MarqueeBanner /> */}
          <MarqueeBannerWithImg />
          <MarqueeButton />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
