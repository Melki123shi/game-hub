import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";


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
          "main aside"
        `,
      }}
    >
      <GridItem area="header">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
      <Show when={isLargeScreen}>

      <GridItem area="aside">
        Aside
      </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
