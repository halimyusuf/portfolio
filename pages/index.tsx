import { Box, Flex, Button, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Project from "../components/common/ProjectItem";
import SocialIcons from "../components/home/SocialIcons";
import { projects } from "../data";

const Home: NextPage = () => {
  return (
    <Box mt={{ base: "7", md: "12" }} maxW="100%">
      <Flex align="center" justify="space-between">
        <Box>
          <Box
            fontSize={{ base: "14", md: "20" }}
            color="rgba(250, 251, 255, 0.65);"
            mb="2"
          >
            Hi 👋🏼, I&apos;m Halim Yusuf
          </Box>
          <Box fontSize={{ base: "18", md: "23" }} maxW="800px">
            I implement user interface design and solve user problems using web
            technologies. I have 3 years of making products that solve user
            problems and implementing responsive website.
          </Box>
        </Box>
        <Box ml="5" display={{ base: "none", lg: "block" }}>
          <SocialIcons />
        </Box>
      </Flex>

      <Box display="flex" justifyContent="space-between" alignItems={"end"}>
        <Box mt="7">
          <Button
            color="#FAFBFF"
            bg="#292929"
            colorScheme="lightgrey"
            _hover={{ bg: "#292929" }}
          >
            Hire Me
          </Button>
        </Box>

        <Box display={{ base: "block", lg: "none" }}>
          <SocialIcons />
        </Box>
      </Box>

      {/* projects */}
      <Box marginTop="10">
        <Box borderBottom="1px solid #FAFBFF" pb={"2"}>
          <Text fontSize={{ base: 22, md: "24" }}>Projects</Text>
        </Box>

        <Box marginTop="5">
          {projects.map((project, i) => (
            <Box
              key={project.name}
              pb="5"
              borderTop={i !== 0 ? "0.5px solid rgba(250, 251, 255, 0.65)" : ""}
            >
              <Project {...project} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
