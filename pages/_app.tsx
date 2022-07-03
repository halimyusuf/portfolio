import { Box, ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Box padding={{ base: "0.5rem 1rem", md: "1rem 3rem" }}>
          <Component {...pageProps} />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
