import { Box, Flex, Icon, createIcon, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import SocialIcons from "../components/home/SocialIcons";

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
            technologies. I have 5 years of making products that solve user
            problems and implementing responsive website
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
          colorScheme="gray"
          _hover={{ backgroundColor: "#292929" }}
        >
          Hire Me
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
