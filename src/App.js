import { Heading, Box, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import User from "./components/User";
import { BsGithub } from "react-icons/bs";

function App() {
  return (
    <Box textAlign={"center"} p="8" bgColor={"black"} minHeight={"100vh"}>
      <HStack justify={"center"} spacing={"6"}>
        <Icon as={BsGithub} boxSize={12} />
        <Heading>Github Repo List</Heading>
      </HStack>
      <User />
    </Box>
  );
}

export default App;
