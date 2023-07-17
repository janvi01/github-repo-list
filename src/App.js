import { Heading, Box } from "@chakra-ui/react";
import React from "react";
import User from "./components/User";

function App() {
  return (
    <Box textAlign={"center"}>
      <Heading>Github Repo List</Heading>
      <User />
    </Box>
  );
}

export default App;
