import { Box, Button, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";
import imgRow2 from "@/app/assets/row2.webp";
import iconMetamask from "@/app/assets/metamask.webp";
import { stakingRemitt, writeStakingRemitt } from "@/utils/contracts/write";

type PropDataPackage = {
  data: any;
};

const CardStaking = ({ data }: PropDataPackage) => {
  console.log("DATOS DEL PAQUETE", data);

const staking = async () => {
  const approveStaking = await stakingRemitt(1)
  console.log('STAKING APPROVE',approveStaking)
  const stakingHash = await writeStakingRemitt(1)
  console.log('Hash',stakingHash)
}


  return (
    <Box display="flex" gap="30px" w="100%" maxW="500px">
      <Box
        display="flex"
        flexDir="column"
        gap={2}
        w="100%"
        bg="var(--bg-swap)"
        borderRadius="20px"
      >
        <Box
          display="flex"
          alignItems="center"
          w="100%"
          height="100px"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.1)"
          borderRadius="16px"
          padding={2}
          gap={3}
        >
          <Box
            display="flex"
            flexDir="column"
            w="100%"
            marginLeft={4}
            borderRight="1px solid #4986C6"
          >
            <Text as="h3" fontSize="xl" fontWeight="600" color="black">
              REMITT
            </Text>
            <Text as="p" color="black">
              Stake and earn
            </Text>
          </Box>
          <Box display="flex" w="100%" alignItems="center" gap={3}>
            <Text as="h3" fontSize="3xl" fontWeight="600" color="black">
              180
            </Text>
            <Box>
              <Image src={imgRow2} alt="Icono remitt" width={50} height={50} />
            </Box>
          </Box>
        </Box>

        <Box display="flex" flexDir="column" gap={3} padding={3}>
          <Text
            display="flex"
            justifyContent="center"
            as="h4"
            color="black"
            fontWeight="800"
          >
            Titulo
          </Text>

          <Box display="flex" flexDir="column" gap={3}>
            <Box
              display="flex"
              flexDir="column"
              alignItems="center"
              gap={3}
              w="100%"
            >
              <Text as="span" color="black" fontWeight="600" fontSize="2xl">
                APY
              </Text>
              <Button w="100%" variant="buttonSecondary">
                240%
              </Button>
            </Box>

            <Box w="100%">
              <Box w="100%">
                <Box display="flex" justifyContent="space-between">
                  <Text as="span" color="black">
                    Total Stake:
                  </Text>
                  <Text as="span" color="black">
                    90%
                  </Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Text as="span" color="black">
                    Stake to:
                  </Text>
                  <Text as="span" color="black">
                    180 Days
                  </Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Text as="span" color="black">
                    Profit:
                  </Text>
                  <Text as="span" color="black">
                    0MITT
                  </Text>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  marginTop={4}
                >
                  <Box display="flex" alignItems="center">
                    <Image
                      src={iconMetamask}
                      alt="Icono de metamask"
                      width={30}
                      height={30}
                    />
                    <Text as="span" color="black" marginLeft={2}>
                      Add Metamask
                    </Text>
                    ˝
                  </Box>
                  <Button
                    w="100%"
                    maxW="150px"
                    bg="white"
                    borderRadius="50px"
                    color="gray"
                  >
                    0 MITT
                  </Button>
                </Box>

                <Divider bg="#01DBE7" orientation="horizontal" marginTop={3} />
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                marginTop={4}
              >
                <Text as="span" color="black">
                  Stake MITT
                </Text>
              </Box>
            </Box>
          </Box>

          <Box display="flex" w="100%" marginTop={4}>
            <Button w="100%" variant="button" onClick={staking}>
              Stake
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardStaking;
