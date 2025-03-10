import { Game } from "@/entities/Game";
import { Card, Image, HStack } from "@chakra-ui/react";
import CriticScore from "@/components/CriticScore";
import PlatformIconList from "./PlatformIconList";
import Emoji from "./Emoji";
import { useNavigate } from "react-router-dom";

const GameCard = ({ game }: { game: Game }) => {
  const navigate = useNavigate();
  return (
    <Card.Root
      borderRadius={13}
      overflow="hidden"
      onClick={() => navigate(`/games/${game.slug}`)}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.05)",
        transition: "transform .19s ease-in",
      }}
    >
      <Image src={game.background_image} height={233}></Image>
      <Card.Body gap={2}>
        <HStack justify="space-between">
          <PlatformIconList platforms={game.platforms} />
          <CriticScore score={game.criticScore} />
        </HStack>
        <Card.Title fontSize={"2xl"}>
          {game.name}
          <Emoji rating={game.rating} />
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
