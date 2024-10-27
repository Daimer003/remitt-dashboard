import React, { ReactNode } from "react";
import { Box, Switch, Text, Center, BoxProps, Flex } from "@chakra-ui/react";
import SkeletonLayout from "../skeleton";
import { useAccount } from "wagmi";
import BalanceWallet from "../balanceWallet";

type PropsRuteNav = {
  rute: string;
};

// Tipo de props para el componente BalanceBox
interface BalanceBoxProps extends BoxProps {
  label: string;
  children?: ReactNode;
}

// Tipo de props para el componente PriceBox
interface PriceBoxProps extends BoxProps {
  label: string;
}

const DashboardMenu = ({ rute }: PropsRuteNav) => {
  const { address } = useAccount();

  return (
    <SkeletonLayout borderRadius="16px">
      <Box
        display="flex"
        justifyContent='center'
        alignItems="center"
        as="nav"
        w="100%"
        bg="var(--bg-color-sideboard)"
        borderRadius="16px"
        position="relative"
        p={4}
      >
        <Box className="line-dashboard-menu" />

        <Box
          display="flex"
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={{baese: 'center', md: "space-between"}}
          alignItems="center"
          gap="10px"
          position="relative"
          w="100%"
          maxW={{base: '600px', md: '1900px'}}
        >
          <Center
            w="100%"
            maxW={{base: '100%', md: "140px"}}
            p="10px"
            bg="var(--background-blue)"
            borderRadius="16px"
          >
            <Text>{rute}</Text>
          </Center>

          <Center
            position="relative"
            padding="4px"
            zIndex={0}
            bg="var(--background-blue)"
            borderRadius="50px"
          >
            <Switch w="100%" size="lg" />
          </Center>

          <Flex w='100%' gap={3}>
            {[
              { label: "USDT:", component: <BalanceWallet balanceUsdt /> },
              { label: "MITT: 1,301", component: null },
              { label: "BNB:", component: <BalanceWallet balanceBnb /> },
            ].map(({ label, component }, index) => (
              <BalanceBox key={index} label={label}>
                {component}
              </BalanceBox>
            ))}
          </Flex>

          <Flex w="100%" gap={3} justifyContent="center">
            <PriceBox label="Token Price: 0.1USD" />
            <PriceBox label={`${address?.substring(0, 8)}...`} />
          </Flex>
          <Switch />
        </Box>
      </Box>
    </SkeletonLayout>
  );
};

export default DashboardMenu;

const BalanceBox = ({ label, children }: BalanceBoxProps) => (
  <Center
    w="100%"
    minW="120px"
    border="1px solid var(--border-color-1)"
    borderRadius={20}
    p="5px"
    bg="var(--bg-color-sideboard)"
  >
    <Text as="span" color="black">
      {label}
    </Text>
    {children}
  </Center>
);

const PriceBox = ({ label }: PriceBoxProps) => (
  <Center
    w="100%"
    maxW="300px"
    border="1px solid var(--border-color-1)"
    borderRadius={20}
    p="5px"
    bg="var(--bg-color-1)"
  >
    <Text as="span" color="black">
      {label}
    </Text>
  </Center>
);
