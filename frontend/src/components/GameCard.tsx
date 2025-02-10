import { Game } from "@/hooks/UseGames";
import {Card, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({game}: {game: Game}) => {
  return (
    <Card.Root borderRadius={13} overflow='hidden'>
        <Image src={game.background_image}></Image>
      <Card.Body gap={2}>
        <Card.Title fontSize={'2xl'}>{game.name}</Card.Title>
        <PlatformIconList platforms={game.platforms} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;