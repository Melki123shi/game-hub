import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/images/logo.jpg";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <HStack justify="space-between">
        <HStack>
          <Image
            src={logo}
            blockSize={12}
            padding={1}
            border={32}
            borderRadius={123}
          />
          <Text>Nav Bar</Text>
        </HStack>
        <IconButton
          onClick={toggleColorMode}
          variant="outline"
          size="sm"
          aria-label="Toggle color mode"
          margin={4}
        >
          {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
      </HStack>
    </ClientOnly>
  );
};

export default NavBar;
