import CardProduct from "@/components/cards/card-product";
import { Box, Grid } from "@chakra-ui/react";

const PageTutorial = () => {
  return (
    <Box display="flex" flexDir="column" gap="20px" w="100%" marginTop={8}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Grid>
    </Box>
  );
};

export default PageTutorial;
