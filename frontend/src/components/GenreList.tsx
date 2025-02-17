import { Genre, UseGenres } from "@/hooks/UseGenres";
import {
  List,
  HStack,
  Image,
  Flex,
  ListItem,
  Spinner,
  Link,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = UseGenres();

  if (isLoading)
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner boxSize={14} color={"yellow.200"} />
      </Flex>
    );
  if (error) return null;
  return (
    <List.Root gap={4} marginTop={11} listStyleType="none">
      {data.map((genre) => (
        <ListItem key={genre._id}>
          <HStack gap={4}>
            <Image src={genre.image_background} boxSize={9} borderRadius={4} />
            <Link
              onClick={() => onSelectGenre(genre)}
              fontSize={"lg"}
              _hover={{ color: "yellow.200", cursor: "pointer" }}
            >
              {genre.name}
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
