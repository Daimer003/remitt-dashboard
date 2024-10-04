import SearchBar from "@/components/search-bar";
import { Box } from "@chakra-ui/react";

const Referreals = () => {
  return (
    <Box display="flex" flexDir="column" gap="20px" w="100%" marginTop={8}>
      <Box
        display="flex"
        alignItems="center"
        flexDir="row"
        w="100%"
        gap="20px"
      >
        <SearchBar />
        
      </Box>
    </Box>
  );
};

export default Referreals;
