import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <Card.Root width={300} height={370} borderRadius={13} overflow="hidden">
      <Skeleton height={233} />
      <Card.Body gap={2}>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default LoadingSkeleton;
