import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import {
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";

function HomePage() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "233px 3fr" }}
    >
      <GridItem
        area="main"
        marginX={{ base: 4, sm: 22, md: 12, lg: 23, xl: 21 }}
      >
        <GameHeading />
        <HStack gap={4} marginBottom={4}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
      <Show when={isLargeScreen}>
        <GridItem area="aside" paddingLeft={14}>
          <GenreList />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default HomePage;
