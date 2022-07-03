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
        <Box width="500px" maxW="100%" pb="2">
          <Box pt="5">{props.date}</Box>
          <Box mt={{ base: "3", md: "7" }}>
            <Text fontSize={{ base: 16, md: 20 }}>{props.name}</Text>
          </Box>
          <Box mt={{ base: 1, md: "3" }} color="rgba(250, 251, 255, 0.65);">
            <Text fontSize={16}>{props.description}</Text>
          </Box>
          <Box mt={{ base: 2, md: "5" }}>
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
              <Box
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace={"nowrap"}
              >
                <a href={props.url} target="_blank" rel="noreferrer">
                  <Button colorScheme="white" variant="link">
                    <Text fontSize={12} pr="2">
                      {props.url}
                    </Text>
                  </Button>
                </a>
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
            overflow="hidden"
          > */}
          <Box pt={8}>
            <a
              href={props.url}
              style={{
                border: "1px solid gba(250, 251, 255, 0.65)",
              }}
            >
              <Image
                width={"600"}
                height="300"
                src={props.cover}
                objectFit="cover"
                alt="Image"
                style={{
                  borderRadius: "5px",
                }}
              />
            </a>
          </Box>
          {/* </AspectRatio> */}
        </Box>
      </Flex>
    </Box>
  );
}
