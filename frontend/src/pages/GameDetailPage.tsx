import { useGameDetail } from "@/hooks/useGameDetail";
import { Heading, Spinner, Text, Flex } from "@chakra-ui/react";
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
      <Text>{game.description}</Text>
    </>
  );
};

export default GameDetailPage;
