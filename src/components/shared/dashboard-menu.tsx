import { Box, Button, Switch, Text } from "@chakra-ui/react";

const DashboardMenu = () => {


  

  return (
    <Box
      display="flex"
      justifyContent='center'
      alignItems='center'
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
        w='100%'
        alignItems="center"
        p={2}
        gap="10px"
        justifyContent="space-between"
        position="relative"
      >
        <Button w="100%" maxW="200px" variant="buttonSecondary">
          Dashboard
        </Button>
        <Switch />

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
            USDT: 1,301
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
            BNB: 0.33286
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
            0xBF7eAdDOx65...
          </Text>
        </Box>

        <Switch />
      </Box>
    </Box>
  );
};

export default DashboardMenu;
