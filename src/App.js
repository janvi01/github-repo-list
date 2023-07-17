import { Heading, Box } from "@chakra-ui/react";
import React from "react";
import User from "./components/User";

function App() {
  return (
    <Box textAlign={"center"} p="8" bgColor={"black"} minHeight={"100vh"}>
      <Heading>Github Repo List</Heading>
      <User />
    </Box>
  );
}

export default App;
