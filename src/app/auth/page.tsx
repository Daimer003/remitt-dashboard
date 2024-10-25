"use client";
import AuthMenu from "@/components/shared/auth-menu";
import Connect from "@/components/shared/connect";
import {
  Flex,
  Box,
  AspectRatio,
  Text,
  CircularProgress,
} from "@chakra-ui/react";
import Image from "next/image";
import imgSocial from "@/app/assets/social.webp";
import { useAccount } from "wagmi";
import Loading from "@/components/loading";

//Video
const video =
  "https://firebasestorage.googleapis.com/v0/b/remitt-5fd4c.appspot.com/o/VIDEOS%2FRemitt%20%20Esp%20FHD%20Final.mp4?alt=media&token=f47817ef-d97d-47d1-a164-9a008d13038f";

const Auth = () => {
  const { isConnected } = useAccount();

  
  return (
    <Flex flexDir="column" alignItems="center">
      <AuthMenu />

      {isConnected && <Loading />}

      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        w="100%"
        gap="30px"
        marginTop="50px"
        p={3}
      >
        <Flex flexDir="column" gap="10px">
          <Text as="h3" color="black" fontSize="4xl" fontWeight="800">
            Bienvenido a Remitt
          </Text>
          <Text as="p" color="black" textAlign="center">
            Conecte su billetera para comenzar
          </Text>

          <Box display={{ base: "flex", md: "none" }} margin="auto">
            <Connect />
          </Box>
        </Flex>

        <Box maxW="960px" width="100%">
          <AspectRatio maxW="960px" ratio={2}>
            <Box
              as="video"
              controls
              // autoPlay
              borderRadius="20px"
              border="2px solid  var(--border-color-1)" // Agregamos el borde de color rojo
              src={video}
            >
              <source type="video/mp4" src={video} />
            </Box>
          </AspectRatio>
        </Box>

        <Box display="flex" w="100%">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            w="100%"
          >
            <Text as="h3" fontSize="2xl" color="black" fontWeight="600">
              Lanzamiento en:
            </Text>
            <Box
              display="flex"
              h="80px"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              position="relative"
            >
              <CircularProgress
                value={30}
                size="60px"
                thickness="10px"
                color="#01DBE7"
              />
              <Text as="span" color="black">
                Días
              </Text>

              <Box display="flex" position="absolute" top={4}>
                <Text as="span" color="black">
                  120
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              h="80px"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              position="relative"
            >
              <CircularProgress
                value={80}
                size="60px"
                thickness="10px"
                color="#01DBE7"
              />
              <Text as="span" color="black">
                Horas
              </Text>

              <Box display="flex" position="absolute" top={4}>
                <Text as="span" color="black">
                  3
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              h="80px"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              position="relative"
            >
              <CircularProgress
                value={50}
                size="60px"
                thickness="10px"
                color="#01DBE7"
              />
              <Text as="span" color="black">
                Minutos
              </Text>

              <Box display="flex" position="absolute" top={4}>
                <Text as="span" color="black">
                  0
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              h="80px"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              position="relative"
            >
              <CircularProgress
                value={30}
                size="60px"
                thickness="10px"
                color="#01DBE7"
              />
              <Text as="span" color="black">
                Segundos
              </Text>

              <Box display="flex" position="absolute" top={4}>
                <Text as="span" color="black">
                  0
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display="flex" position="fixed" right={0} top="35%" margin="20px">
          <Image
            src={imgSocial}
            alt="redes sociales"
            style={{
              width: "40px",
              height: "auto",
            }}
            width={120}
            height={100}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default Auth;
