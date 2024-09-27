import { Flex, Box } from "@chakra-ui/react";

interface Prop {
  children: any;
}

const Layout = ({ children }: Prop) => {
  return (
    <Flex width="100%" className="gradient">
      <Box
        display="flex"
        width="100%"
        height={{base: 'auto', md: '100vh'}}
       // background="gray"
        position="relative"
        zIndex={10}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;