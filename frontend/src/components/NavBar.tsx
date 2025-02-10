import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.jpeg";
import ColorModeButton from "./ColorModeButton";

const NavBar = () => {
  return (
    <HStack paddingX={4} justify="space-between">
      <Image
        src={logo}
        blockSize={'71px'}
        margin={2}
        padding={1}
        border={32}
        borderRadius={123}
        backgroundColor={"yellow.100"}
      />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
