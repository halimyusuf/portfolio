import { Box, Container, Flex, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box padding={{ base: "0.5rem 2rem", md: "1rem 3rem" }}>
      <Flex justifyContent="space-between" align="center">
        <Box>
          <Text fontSize={{ base: "24", md: "24" }} fontWeight="bold">
            HALIM.Y.
          </Text>
        </Box>
        <Flex>
          <Box padding="2">Projects</Box>
          <Box padding="2">About</Box>
        </Flex>
      </Flex>
    </Box>
  );
}
