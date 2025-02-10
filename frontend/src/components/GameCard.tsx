import { Game } from "@/hooks/UseGames";
import {Card, Image } from "@chakra-ui/react";

const GameCard = ({game}: {game: Game}) => {
  return (
    <Card.Root borderRadius={13} overflow='hidden'>
        <Image src={game.background_image}></Image>
      <Card.Body gap={2}>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;