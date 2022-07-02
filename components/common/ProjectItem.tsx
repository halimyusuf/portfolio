import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Icon,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import type { project } from "../../data";

export default function Project(props: project) {
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        flexWrap={"wrap-reverse"}
        align="end"
      >
        <Box width="500px" pb="2">
          <Box pt="5">{props.date}</Box>
          <Box mt={{ base: "3", md: "7" }}>
            <Text fontSize={24}>{props.name}</Text>
          </Box>
          <Box marginTop="3" color="rgba(250, 251, 255, 0.65);">
            <Text fontSize={16}>{props.description}</Text>
          </Box>
          <Box marginTop="5">
            <Flex align="center">
              <Box marginX="3">
                <Icon viewBox="0 0 24 24">
                  <path
                    stroke="#6C6C6C"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </Icon>
              </Box>
              <Box>
                <Button colorScheme="white" variant="link">
                  <Text fontSize={12}> {props.url}</Text>
                </Button>
              </Box>
            </Flex>
          </Box>

          <Box mt="5">
            <Stack direction="row" spacing={2} align="center">
              {props.stacks.map((stack) => (
                <Tag key={stack} color="#fff" background="#181818">
                  <Text fontSize={"12"}>{stack}</Text>
                </Tag>
              ))}
            </Stack>
          </Box>
        </Box>

        <Box>
          {/* <AspectRatio
            style={{ width: "400px", maxWidth: "80%" }}
            ratio={4 / 3}
          > */}

          <Box pt={8}>
            <Image
              style={{ borderRadius: "5px" }}
              width={"400"}
              height="240"
              src={props.cover}
              alt="Cover"
            />
          </Box>
          {/* </AspectRatio> */}
        </Box>
      </Flex>
    </Box>
  );
}
