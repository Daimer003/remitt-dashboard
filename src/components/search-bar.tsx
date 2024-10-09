import { Box, Select, Input, Text } from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="auto"
      bg="white"
      borderRadius="50px"
      position="relative"
      border="1px solid var(--bg-color-sideboard)"
      padding=".8rem"
      gap="20px"
    >
      <Box display="flex" alignItems="center" gap="10px" w="100%">
        <Box w="100px">
          <Text as="span" color="black">
            Selec Level
          </Text>
        </Box>
        <Select
          placeholder="Select option"
          bg="var(--bg-color-sideboard)"
          borderRadius="50px"
          color="black"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Box display="flex" alignItems="center" gap="10px" w="100%">
        <Box w="60px">
          <Text as="span" color="black">
            Search
          </Text>
        </Box>
        <Input
          placeholder="Basic usage"
          bg="var(--bg-color-sideboard)"
          borderRadius="50px"
          color="black"
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
