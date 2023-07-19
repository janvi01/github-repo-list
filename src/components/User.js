import React, { useState, useEffect } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Repos from "./Repos";

function User() {
  // setting user initially to my github account i.e. janvi01
  const [user, setUser] = useState("janvi01");
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // call the fetch method,
        // passing in the `user` arg to the request
        const res = await fetch(`https://api.github.com/users/${user}/repos`);
        const data = await res.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };

    fetchRepos();
  }, [user]);

  return (
    <>
      <Flex justify={"center"} m="8">
        <InputGroup width={["100%", "50%"]}>
          <Input
            placeholder="Enter Github username"
            color={"white"}
            onChange={(e) => setValue(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              colorScheme="blue"
              onClick={() => {
                setUser(value);
                setLoading(!loading);
              }}
            >
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      {items.message === "Not Found" ? (
        <Heading>No such user exist</Heading>
      ) : (
        <Repos repoloading={loading} repoitem={items} user={user} />
      )}
    </>
  );
}

export default User;
