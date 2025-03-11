import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.jpeg";
import ColorModeButton from "./ColorModeButton";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack paddingX={4} justify="space-between">
      <Link to={"/"}>
        <Image
          src={logo}
          blockSize={"71px"}
          margin={2}
          padding={1}
          border={32}
          borderRadius={123}
          backgroundColor={"yellow.100"}
        />
      </Link>
      <SearchBar />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
