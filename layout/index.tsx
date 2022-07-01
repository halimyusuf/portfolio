import Navbar from "./navbar";
import type { AppProps } from "next/app";
import { Box } from "@chakra-ui/react";

export default function Layout({
  children,
}: AppProps & { children?: JSX.Element }) {
  return (
    <Box backgroundColor="#111111" color="#F9FAFB">
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </Box>
  );
}
