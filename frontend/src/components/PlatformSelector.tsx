import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Platform, UsePlatforms } from "@/hooks/UsePlatforms";
import { Button, HStack, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
  unSelectPlatform: () => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform, unSelectPlatform }: Props) => {
  const { data, error } = UsePlatforms();

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
        {data.map((platform) => (
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
