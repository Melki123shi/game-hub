import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button, HStack, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelect: (value: string) => void;
  sortBy: string | null;
}

const SortSelector = ({ onSelect, sortBy }: Props) => {
  const sortingOptions: { [key: string]: string } = {
    "": "Relevance",
    "-added": "Date Added",
    name: "Name",
    "-released": "Release Date",
    "-criticScore": "Popularity",
    "-rating": "Average Rating",
  };
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
            onClick={() => onSelect(key)}
          >
            {option}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
