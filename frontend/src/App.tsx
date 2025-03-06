import {
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `
          "header"
          "main"
        `,
        lg: `
          "header header"
          "aside main"
        `,
      }}
      templateColumns={{ base: "1fr", lg: "233px 3fr" }}
    >
      <GridItem area="header">
        <NavBar
        />
      </GridItem>
      <GridItem
        area="main"
        marginX={{ base: 4, sm: 22, md: 12, lg: 23, xl: 21 }}
      >
          <GameHeading />
        <HStack gap={4} marginBottom={4}>
          <PlatformSelector
  
          />
          <SortSelector
            
          />
        </HStack>
        <GameGrid />
      </GridItem>
      <Show when={isLargeScreen}>
        <GridItem area="aside" paddingLeft={14}>
          <GenreList
            
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
