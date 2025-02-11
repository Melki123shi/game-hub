import { Game } from "@/hooks/UseGames";
import { Card, Image, HStack } from "@chakra-ui/react";
import CriticScore from "@/components/CriticScore";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card.Root borderRadius={13} overflow="hidden">
      <Image src={game.background_image} height={233}></Image>
      <Card.Body gap={2}>
        <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
        <HStack justify='space-between'>
          <PlatformIconList platforms={game.platforms} />
          <CriticScore score={game.criticScore} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
