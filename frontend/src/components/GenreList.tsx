import { UseGenres } from "@/hooks/UseGenres";
import { List, HStack, Image, Text, ListItem } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = UseGenres();
  return (
    <List.Root gap={4} marginTop={14} listStyleType='none'>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack gap={4}>
            <Image src={genre.image_background} width={14} height={14} borderRadius={4}/>
            <Text fontSize={'18px'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
