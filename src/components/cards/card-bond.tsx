import { Box, Button, Text, Radio } from "@chakra-ui/react";
import Image from "next/image";
import imgNivel from "@/app/assets/mask-nivel.webp";

interface Props {
  nivel?: any;
  title?: string;
  typeBond: string
}

const CardBond = ({ nivel, title, typeBond }: Props) => {
  return (
    <Box display="flex" gap="30px" w="100%" maxW="500px">
      <Box display={nivel ? "flex" : "none"} flexDir="column" gap={5}>
        {nivel?.map((n: any, index: number) => (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="100%"
            maxW="60px"
            position="relative"
          >
            <Image
              src={imgNivel}
              alt=" Imagen nivel"
              width={100}
              height={100}
            />
            <Box position="absolute">
              <Text as="span" color="black" fontSize="xl" fontWeight="600">
                {n}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        display="flex"
        flexDir="column"
        gap={2}
        w="100%"
        bg="var(--bg-swap)"
        borderRadius="20px"
      >
        <Box
          w="100%"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.1)"
          borderRadius="16px"
          padding={2}
        >
          <Button color="white" w="100%" variant="buttonPrimary">
           {typeBond}
          </Button>
        </Box>

        <Box display="flex" flexDir="column" gap={3} padding={3}>
          <Text
            display={title ? "flex" : "none"}
            justifyContent="center"
            as="h4"
            color="black"
            fontWeight="800"
          >
            {title}
          </Text>

          <Box display="flex" flexDir="column" gap={3} minHeight="250px">
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              border="1px solid #842EF5"
              padding={2}
              borderRadius="8px"
            >
              <Box w="100%">
                <Text as="span" color="black">
                  Swap personal
                </Text>
              </Box>
              <Box w="100%">
                <Box display="flex" flexDir="row" w="100%" gap={2}>
                  <Box display="flex" w="100%" flexDir="column">
                    <Box
                      w="100%"
                      bg="#EEFAFF"
                      border="1px solid #63F9FD"
                      borderRadius="12px"
                      padding="5px"
                      textAlign="center"
                    >
                      <Text as="span" color="black">
                        300
                      </Text>
                    </Box>
                    <Box w="100%" padding="5px" textAlign="center">
                      <Text as="span" color="black">
                        50,000 USD
                      </Text>
                    </Box>
                  </Box>

                  <Box>
                    <Radio size="lg" bg="#C8C8C8" value="1" />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              border="1px solid #842EF5"
              padding={2}
              borderRadius="8px"
            >
              <Box w="100%">
                <Text as="span" color="black">
                  Swap personal
                </Text>
              </Box>
              <Box w="100%">
                <Box display="flex" flexDir="row" w="100%" gap={2}>
                  <Box display="flex" w="100%" flexDir="column">
                    <Box
                      w="100%"
                      bg="#EEFAFF"
                      border="1px solid #63F9FD"
                      borderRadius="12px"
                      padding="5px"
                      textAlign="center"
                    >
                      <Text as="span" color="black">
                        300
                      </Text>
                    </Box>
                    <Box w="100%" padding="5px" textAlign="center">
                      <Text as="span" color="black">
                        50,000 USD
                      </Text>
                    </Box>
                  </Box>

                  <Box>
                    <Radio size="lg" bg="#30FB98" value="1" />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              border="1px solid #842EF5"
              padding={2}
              borderRadius="8px"
            >
              <Box w="100%">
                <Text as="span" color="black">
                  Swap personal
                </Text>
              </Box>
              <Box w="100%">
                <Box display="flex" flexDir="row" w="100%" gap={2}>
                  <Box display="flex" w="100%" flexDir="column">
                    <Box
                      w="100%"
                      bg="#EEFAFF"
                      border="1px solid #63F9FD"
                      borderRadius="12px"
                      padding="5px"
                      textAlign="center"
                    >
                      <Text as="span" color="black">
                        300
                      </Text>
                    </Box>
                    <Box w="100%" padding="5px" textAlign="center">
                      <Text as="span" color="black">
                        50,000 USD
                      </Text>
                    </Box>
                  </Box>

                  <Box>
                    <Radio size="lg" bg="#C8C8C8" value="1" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            border="1px solid #842EF5"
            borderRadius="20px"
            textAlign="center"
            marginTop={4}
          >
            <Button color="black">2% Volumen de mi red</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardBond;
