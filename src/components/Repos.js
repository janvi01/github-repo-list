import {
  Box,
  Flex,
  Spinner,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";

function Repos({ repoloading, repoitem, user }) {
  if (repoloading) {
    return (
      <Flex justify={"center"} minHeight={"70vh"} mt="20" mb="10">
        <Spinner thickness="4px" size="xl" />
      </Flex>
    );
  }

  return (
    <Flex justify={"center"}>
      <Card
        width={["100%", "50%"]}
        textAlign={"left"}
        height={"90vh"}
        overflowY={"scroll"}
        variant={"elevated"}
        bgColor={"white"}
        color={"black"}
        m={["0", "8"]}
        borderRadius={"1em"}
      >
        <CardHeader>
          <Heading size="lg">{user}'s Contribution Repositories</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider borderColor={"black"} />} spacing="4">
            {repoitem.map((repo, index) => {
              return (
                <Box key={index}>
                  <Heading size="md" textTransform="uppercase">
                    {repo.name}
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {repo.description}
                  </Text>
                  <Text pt="2" fontSize="sm">
                    <b>Repo URL:</b>{" "}
                    <Link color={"blue"} href={repo.html_url}>
                      {repo.html_url}
                    </Link>
                  </Text>
                </Box>
              );
            })}
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Repos;
