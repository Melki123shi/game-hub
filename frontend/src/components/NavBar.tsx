import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.jpg";
import ColorModeButton from "./ColorModeButton";

const NavBar = () => {
  return (
    <HStack justify="space-between">
      <Image
        src={logo}
        blockSize={12}
        padding={1}
        border={32}
        borderRadius={123}
      />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
