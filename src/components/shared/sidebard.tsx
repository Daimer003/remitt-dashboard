import { Text, Box, VStack } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../app/assets/logo-dashboard.webp";
import { IconHome } from "@/utils/icons";

const Sidebard = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      w="10rem"
      h="auto"
      color="white"
      p={4}
      position="fixed"
      padding="20px"
    >
      <VStack
        display="flex"
        justifyContent="center"
        w="100%"
        maxW="80px"
        spacing={4}
        bg="var(--bg-gradient-sidebard)"
        padding="10px"
        borderRadius="16px"
      >
        <Box w="60px" h="auto">
          <Image
            src={logo}
            alt="logo dashboard"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
            }}
            priority
          />
        </Box>

        <Box display="flex" flexDir="column" w="100%" gap="40px" marginTop={2}>
          <Box
            display="flex"
            justifyContent="center"
            w="100%"
            h="auto"
            bg="white"
            padding="10px"
            borderRadius="8px"
          >
            <IconHome size="34" color="black"/>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            w="100%"
            h="auto"
            padding="10px"
            borderRadius="8px"
          >
            <IconHome size="34" color="white" />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            w="100%"
            h="auto"
            padding="10px"
            borderRadius="8px"
          >
            <IconHome size="34" color="white" />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            w="100%"
            h="auto"
            padding="10px"
            borderRadius="8px"
          >
            <IconHome size="34" color="white" />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            w="100%"
            h="auto"
            padding="10px"
            borderRadius="8px"
          >
            <IconHome size="34" color="white" />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            w="100%"
            h="auto"
            padding="10px"
            borderRadius="8px"
          >
            <IconHome size="34" color="white" />
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebard;
