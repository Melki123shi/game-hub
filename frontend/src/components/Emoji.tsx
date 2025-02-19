import { Box } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const rate = Math.round(rating);
  if (rate < 3) return null;
  return <Box marginTop={4}>{rate < 4 ? "😐" : rate < 5 ? "👍" : "🎯"}</Box>;
};

export default Emoji;
