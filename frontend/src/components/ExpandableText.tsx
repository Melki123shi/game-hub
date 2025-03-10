import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const limit = 321;

  let visibleText;

  if (!children) return null;

  if (children.length < limit) visibleText = children;
  else
    visibleText = isExpanded
      ? children
      : children.slice([].length, limit) + "...";

  return (
    <Text>
      {visibleText}
      <Button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
        marginLeft={4}
        borderRadius={8}
        backgroundColor={"yellow.200"}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
