import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button, HStack, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { usePlatforms } from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store/store";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = useGameQueryStore(
    (state) => state.gameQuery.platform
  );
  const onSelectPlatform = useGameQueryStore(
    (state) => state.setselectPlatform
  );
  const unSelectPlatform = useGameQueryStore(
    (state) => state.setunselectPlatform
  );

  if (error) return null;

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
            <Text fontSize={"lg"}>{selectedPlatform?.name ?? "Platforms"}</Text>
            <BsChevronDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem
          value="none"
          cursor={"pointer"}
          onClick={() => unSelectPlatform()}
        >
          None
        </MenuItem>
        {platforms.map((platform) => (
          <MenuItem
            value={platform.name}
            key={platform._id}
            cursor={"pointer"}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
