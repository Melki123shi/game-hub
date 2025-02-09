import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";


function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `
          "header"
          "main"
          "footer"
        `,
        lg: `
          "header header"
          "main aside"
          "footer footer"
        `,
      }}
    >
      <GridItem area="header">
        <NavBar />
      </GridItem>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
      <Show when={isLargeScreen}>

      <GridItem area="aside" bg="green">
        Aside
      </GridItem>
      </Show>
      <GridItem area="footer" bg="purple">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
