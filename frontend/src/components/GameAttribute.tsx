import Game  from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DescriptionItem from "./DescriptionItem";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttribute = ({ game }: Props) => {
  return (
    <SimpleGrid gap={4} columns={2} marginY={4}>
      <DescriptionItem item="Platforms">
        {game.platforms.map((platform) => (
          <Text key={platform}> {platform} </Text>
        ))}
      </DescriptionItem>
      <DescriptionItem item="MetaScore">
        <CriticScore score={game.criticScore}></CriticScore>
      </DescriptionItem>
      <DescriptionItem item="Genres">
        {game.genres.map((genre) => (
          <Text key={genre}>{genre}</Text>
        ))}
      </DescriptionItem>
      <DescriptionItem item="Publishers">{game.name}</DescriptionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
