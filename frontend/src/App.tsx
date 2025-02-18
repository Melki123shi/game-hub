import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/UsePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
      <GridItem
        area="main"
        marginX={{ base: 4, sm: 24, md: 12, lg: 23, xl: 24 }}
      >
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
          unSelectPlatform={() => setGameQuery({...gameQuery, platform: null})}
        />
        <GameGrid
          gameQuery={gameQuery}
        />
      </GridItem>
      <Show when={isLargeScreen}>
        <GridItem area="aside" paddingLeft={14}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
