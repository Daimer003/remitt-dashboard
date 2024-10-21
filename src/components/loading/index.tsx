import { Box, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
      zIndex={99}
      bg="var(--bg-loading)"
      top={0}
      left={0}
      position="fixed"
    >
      <Box w="50px" h="50px">
        <Spinner size="xl" color="black" />
      </Box>
    </Box>
  );
};

export default Loading;
