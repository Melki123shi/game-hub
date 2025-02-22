import { Game } from "@/hooks/UseGames";
import { Card, Image, HStack } from "@chakra-ui/react";
import CriticScore from "@/components/CriticScore";
import PlatformIconList from "./PlatformIconList";
import Emoji from "./Emoji";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card.Root borderRadius={13} overflow="hidden">
      <Image src={game.background_image} height={233}></Image>
      <Card.Body gap={2}>
        <HStack justify="space-between">
          <PlatformIconList platforms={game.platforms} />
          <CriticScore score={game.criticScore} />
        </HStack>
        <Card.Title fontSize={"2xl"}>
          {game.name}<Emoji rating={game.rating} />
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
