import ExpandableText from "@/components/ExpandableText";
import GameAttribute from "@/components/GameAttribute";
import { useGameDetail } from "@/hooks/useGame";
import { Heading, Spinner, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);

  if (isLoading)
    return (
      <Flex height="80vh" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Flex>
    );

  if (error || !game) throw error;

  return (
    <>
      <Heading fontWeight={"extrabold"} fontSize={"4xl"} paddingY={4}>
        {game.name}
      </Heading>
      <ExpandableText>{game.description}</ExpandableText>
      <GameAttribute game={game} />
      {/* <video src="https://www.youtube.com/watch?v=rrqfPG4ZcAA"></video> */}
    </>
  );
};

export default GameDetailPage;
