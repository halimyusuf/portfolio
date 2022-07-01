import Navbar from "./navbar";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }: { children?: JSX.Element }) {
  return (
    <Box backgroundColor="#111111" color="#F9FAFB">
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </Box>
  );
}
