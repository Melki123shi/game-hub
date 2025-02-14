import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";


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
       templateColumns={{ base: "1fr", lg: "244px 3fr" }}
    >
      <GridItem area="header">
        <NavBar />
      </GridItem>
      <GridItem area="main">
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

export default App;
