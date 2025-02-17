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
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre }: Props) => {

  const hoverColor = useColorModeValue("yellow.500", "yellow.300");
  const selectedColor = useColorModeValue("yellow.600", "yellow.400");
  const textColor = useColorModeValue("black", "white");

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
              fontWeight={selectedGenre === genre ? "bold" : "normal"}
              color={selectedGenre === genre ? selectedColor : textColor}
              _hover={{ color: hoverColor, cursor: "pointer" }}
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
