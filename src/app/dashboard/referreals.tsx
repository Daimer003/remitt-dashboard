import CardReferreals from "@/components/cards/card-referreals";
import SearchBar from "@/components/search-bar";
import { Box, Grid } from "@chakra-ui/react";

const Referreals = () => {
  return (
    <Box display="flex" flexDir="column" gap="20px" w="100%" marginTop={8}>
      <Box
        display="flex"
        alignItems="center"
        flexDir="column"
        w="100%"
        gap="20px"
      >
        <SearchBar />
        
        <Grid w="100%" templateColumns="repeat(4, 1fr)" gap={6}>
        <CardReferreals />
        <CardReferreals />
        <CardReferreals />
        <CardReferreals />
        <CardReferreals />
        <CardReferreals />
      </Grid>
      </Box>
    </Box>
  );
};

export default Referreals;
