import { IconArrowDow } from "@/utils/icons";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import Image from "next/image";

import iconBnb from "@/app/assets/bnb.png";
import iconMit from "@/app/assets/mit.png";

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
        <Box display='flex' flexDir='column' justifyContent='center' w="100%"   position='relative'>
          <Text as="h5" fontSize="2xl" color="black">
            Swap  <span style={{
              display: 'flex',
              contain: '',
              width:'85%',
              height: '2px',
              background: '#842EF5',
              position: 'absolute',
              top: '20px',
              marginLeft: '60px'
            }} />
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
              <Box display="flex">
                <Box w="30px">
                  <Image src={iconBnb} alt="Icono bnb" width={20} height={20} />
                </Box>
                <Text as="span" color="black">
                  BNB
                </Text>
              </Box>
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
              placeholder="0"
            />
          </Box>

          <Box>
            <IconArrowDow size="40" />
          </Box>

          <Box w="100%">
            <Box display="flex" justifyContent="space-between" w="100%" gap={2}>
              <Box display="flex">
                <Box w="30px">
                  <Image src={iconMit} alt="Icono bnb" width={20} height={20} />
                </Box>
                <Text as="span" color="black">
                  MITT
                </Text>
              </Box>
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
              placeholder="0"
            />
          </Box>

          <Button w="100%" marginTop="20px" bg='#01DBE7' borderRadius='50px'>
            Swap
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Swap;
