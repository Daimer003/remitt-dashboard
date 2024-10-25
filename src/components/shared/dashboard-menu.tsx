import { Box, Button, Switch, Text } from "@chakra-ui/react";
import SkeletonLayout from "../skeleton";
import { useAccount } from "wagmi";
import BalanceWallet from "../balanceWallet";

const DashboardMenu = () => {
  const { address } = useAccount();

  return (
    <SkeletonLayout borderRadius="16px">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        as="nav"
        w="100%"
        h="auto"
        bg="var(--bg-color-sideboard)"
        borderRadius="16px"
        position="relative"
      >
        <Box className="line-dashboard-menu" />

        <Box
          display="flex"
          w="100%"
          alignItems="center"
          p={2}
          gap="10px"
          justifyContent="space-between"
          position="relative"
        >
          <Button w="100%" maxW="200px" variant="buttonSecondary">
            Dashboard
          </Button>

          <Box display="flex" position="relative" zIndex={0} bg="gray.300">
            <Switch />
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            minW="120px"
            border="1px solid var(--border-color-1)"
            borderRadius={20}
            p="5px"
            bg="var(--bg-color-sideboard)"
          >
            <Text as="span" color="black">
              USDT:
            </Text>
            <BalanceWallet balanceUsdt={true} />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            minW="120px"
            border="1px solid var(--border-color-1)"
            borderRadius={20}
            p="5px"
            bg="var(--bg-color-sideboard)"
          >
            <Text as="span" color="black">
              MITT: 1,301
            </Text>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            minW="120px"
            border="1px solid var(--border-color-1)"
            borderRadius={20}
            p="5px"
            bg="var(--bg-color-sideboard)"
          >
            <Text as="span" color="black">
              {" "}
              BNB:
            </Text>
            <BalanceWallet balanceBnb={true} />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            w="100%"
            maxW="300px"
            border="1px solid var(--border-color-1)"
            borderRadius={20}
            p="5px"
            bg="var(--bg-color-2)"
          >
            <Text as="span" color="black">
              Token Price: 0.1USD
            </Text>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            w="100%"
            maxW="300px"
            border="1px solid var(--border-color-1)"
            borderRadius={20}
            p="5px"
            bg="var(--bg-color-1)"
          >
            <Text as="span" color="black">
              {address?.substring(0, 8)}...
            </Text>
          </Box>

          <Switch />
        </Box>
      </Box>
    </SkeletonLayout>
  );
};

export default DashboardMenu;
