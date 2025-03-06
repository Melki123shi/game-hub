import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import useGameQueryStore from "@/store/store";
import { Button, HStack, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


const SortSelector = () => {
  const sortingOptions: { [key: string]: string } = {
    "": "Relevance",
    "-added": "Date Added",
    name: "Name",
    "-released": "Release Date",
    "-criticScore": "Popularity",
    "-rating": "Average Rating",
  };

  const setSortBy = useGameQueryStore((state) => state.setsortGame);
  const sortBy = useGameQueryStore((state) => state.gameQuery.sortBy);
  
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant="subtle"
          marginBottom={9}
          borderColor={"gray.400"}
          borderRadius={4}
        >
          <HStack justifyContent="space-between">
            <Text fontSize={"lg"}>
              OrderBy: {sortBy ? sortingOptions[sortBy] : "Relevance"}
            </Text>
            <BsChevronDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent>
        {Object.entries(sortingOptions).map(([key, option]) => (
          <MenuItem
            value={key}
            cursor={"pointer"}
            key={key}
            onClick={() => setSortBy(key)}
          >
            {option}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
