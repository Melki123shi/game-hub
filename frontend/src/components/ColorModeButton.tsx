import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";

const ColorModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="outline"
        size="sm"
        aria-label="Toggle color mode"
        margin={4}
        borderColor={"border.emphasized"}
      >
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
  );
};

export default ColorModeButton;
