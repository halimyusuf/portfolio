import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box padding={{ base: "0.5rem 1rem", md: "1rem 3rem" }}>
      <Flex justifyContent="space-between" align="center">
        <Box>
          <Text fontSize={{ base: "20", md: "24" }} fontWeight="bold">
            HALIM.Y.
          </Text>
        </Box>
        <Flex>
          <Link href="/projects">
            <Button colorScheme="white" variant="link" p="2">
              Projects
            </Button>
          </Link>
          <Link href="/about">
            <Button colorScheme="white" variant="link" p="2">
              About
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
