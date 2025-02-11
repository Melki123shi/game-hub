import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: props) => {
  return (
    <Box borderRadius={13} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
