import CardAdmin from "@/components/cards/card-admin";
import { Box, Text, Wrap } from "@chakra-ui/react";

const PaneAdmin = () => {
  return (
    <Box display="flex" flexDir="column" gap="20px" w="100%" marginTop={8}>
      <Box display='flex' flexDir='column' justifyContent='center' alignItems='center' w="100%">
        <Box w='100%' maxW='900px'>
          <Text as="h4" color="black" fontSize="4xl" textAlign='center' fontWeight="600">
            Admin Panel
          </Text>
          <Text as="p" color="black" fontSize="lg" textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacinia pellentesque euismod. Morbi scelerisque sem vitae sem congue
            auctor. Integer et mollis nisl. Duis bibendum ultricies massa, ac
            mattis dolor. Suspendisse potenti. Quisque velit nisl, viverra at
            tortor quis, rutrum tristique urna. Vestibulum viverra commodo
            rhoncus. Vivamus vestibulum ipsum libero, bibendum egestas lectus
            tempus ut. Duis eu eros consectetur, pellentesque lectus non,
            convallis lacus. Ut imperdiet tristique posuere. Vivamus iaculis
            faucibus tortor. Nunc vitae tellus magna.
          </Text>
        </Box>

        <Wrap display='flex' justifyContent='center' gap={3} marginTop={10}>
            <CardAdmin />
            <CardAdmin />
            <CardAdmin />
            <CardAdmin />
            <CardAdmin />
        </Wrap>
      </Box>
    </Box>
  );
};

export default PaneAdmin;
