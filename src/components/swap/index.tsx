import { IconArrowDow } from "@/utils/icons";
import { Box, Button, Input, Text } from "@chakra-ui/react";

const Swap = () => {
  return (
    <Box
      w="100%"
      maxW="400px"
      bg="var(--bg-swap)"
      padding="10px"
      borderRadius="16px"
    >
      <Box w="100%">
        <Box w="100%">
          <Text as="h5" fontSize="2xl" color="black">
            Swap
          </Text>
          <Text as="span" color="black">
            Trade tokens in an instant
          </Text>
        </Box>

        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          w="100%"
          gap="20px"
          marginTop="40px"
        >
          <Box w="100%">
            <Box display="flex" justifyContent="space-between" w="100%">
              <Text as="span" color="black">
                BNB
              </Text>
              <Text as="span" color="black">
                Blance: 0.0254051
              </Text>
            </Box>

            <Input
              type="number"
              bg="white"
              color="black"
              borderRadius="8px"
              textAlign="center"
            />
          </Box>

          <Box>
            <IconArrowDow size="40" />
          </Box>

          <Box w="100%">
            <Box display="flex" justifyContent="space-between" w="100%">
              <Text as="span" color="black">
                BNB
              </Text>
              <Text as="span" color="black">
                Blance: 0.0254051
              </Text>
            </Box>

            <Input
              type="number"
              bg="white"
              color="black"
              borderRadius="8px"
              textAlign="center"
            />
          </Box>

          <Button w='100%' marginTop='20px' variant="buttonPrimary">Swap</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Swap;
