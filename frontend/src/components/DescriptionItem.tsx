import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  item: string;
  children: ReactNode | ReactNode[];
}
const DescriptionItem = ({ item, children }: Props) => {
  return (
    <Box>
      <Heading as="dt" fontSize={"lg"} color={"gray.600"}>
        {item}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DescriptionItem;
