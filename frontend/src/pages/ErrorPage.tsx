import NavBar from "@/components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let errorMessage;
  if (isRouteErrorResponse(error)) {
    errorMessage = "This page does not exist.";
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = "An unknown error occurred";
  }
  return (
    <>
      <NavBar />
      <Box p={4} marginY={"21px"} fontSize={"xl"}>
        <Heading marginY={2} fontWeight={"extrabold"} fontSize={"4xl"}>
          Oops
        </Heading>
        <Text>{errorMessage}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;
