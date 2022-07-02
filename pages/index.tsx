import { Box, Flex, Button, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Project from "../components/common/ProjectItem";
import SocialIcons from "../components/home/SocialIcons";
import { projects } from "../data";

const Home: NextPage = () => {
  return (
    <Box marginTop={{ base: "7", md: "12" }}>
      <Flex align="center" justify="space-between">
        <Box>
          <Box
            fontSize={{ base: "18", md: "24" }}
            color="rgba(250, 251, 255, 0.65);"
            marginBottom="2"
          >
            Hi 👋🏼, I&apos;m Halim Yusuf
          </Box>
          <Box
            fontSize={{ base: "18", md: "30" }}
            maxW="800px"
            textAlign={"justify"}
          >
            I implement user interface design and solve user problems using web
            technologies. I have 3 years of making products that solve user
            problems and implementing responsive website.
          </Box>
        </Box>
        <Box marginLeft="5">
          <SocialIcons />
        </Box>
      </Flex>

      <Box marginTop="7">
        <Button
          color="#FAFBFF"
          backgroundColor="#292929"
          colorScheme="lightgrey"
          _hover={{ backgroundColor: "#292929" }}
        >
          Hire Me
        </Button>
      </Box>

      {/* projects */}
      <Box marginTop="10">
        <Box borderBottom="1px solid #FAFBFF" paddingBottom={"2"}>
          <Text fontSize={"24"}>Projects</Text>
        </Box>

        <Box marginTop="5">
          {projects.map((project, i) => (
            <Box
              key={project.name}
              paddingBottom="5"
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
