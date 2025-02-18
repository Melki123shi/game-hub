import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button, HStack, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
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
            <Text fontSize={"lg"}>OrderBy: Relevance</Text>
            <BsChevronDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent>
        {/* <MenuItem
              value="none"
              cursor={"pointer"}
              onClick={() => unSelectPlatform()}
            >
              None
            </MenuItem> */}
        <MenuItem value="Relevance" cursor={"pointer"}>
          Relevance
        </MenuItem>
        <MenuItem value="Date Added" cursor={"pointer"}>
          Date Added
        </MenuItem>
        <MenuItem value="Name" cursor={"pointer"}>
          Name
        </MenuItem>
        <MenuItem value="Release Date" cursor={"pointer"}>
          Release Date
        </MenuItem>
        <MenuItem value="Popularity" cursor={"pointer"}>
          Popularity
        </MenuItem>
        <MenuItem value="Average Rating" cursor={"pointer"}>
          Average Rating
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
