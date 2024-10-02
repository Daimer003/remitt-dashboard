import { Box, Button, Text } from "@chakra-ui/react";

interface Props {
  res: any;
  currentPage: any;
  onPageChange: (n: number) => void;
}

const Paginator = ({ res, currentPage, onPageChange }: Props) => {
  return (
    <Box
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      w="100%"
      gap="5px"
    >
      <Box display="flex" w="100%" maxW="250px">
        <Box w="100%" maxW="80px">
          <Button
            onClick={() => onPageChange(1)}
            variant="buttonPaginator"
            isLoading={false}
            fontSize={{ base: "md" }}
            color="black"
          >
            Atrás
          </Button>
        </Box>
        {[...Array(res.endPage - res.startPage + 1)].map((_, index) => (
          <Button
            key={res.startPage + index}
            onClick={() => onPageChange(res.startPage + index)}
            variant="buttonPaginator"
            isLoading={false}
            isDisabled={currentPage === res.totalPages}
            fontSize={{ base: "md" }}
            color="black"
          >
            {res.startPage + index}
          </Button>
        ))}
        <Box w="100%" maxW="100px">
          <Button
            onClick={() => onPageChange(res.totalPages)}
            variant="buttonPaginator"
            isLoading={false}
            isDisabled={currentPage === res.totalPages}
            fontSize={{ base: "md" }}
            color="black"
          >
            Adelante
          </Button>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap="5px">
        <Text
          display={{ base: "none", md: "block" }}
          as="span"
          fontSize={{ base: "md" }}
          color="black"
        >
          Total items
        </Text>
        <Text as="span" fontSize={{ base: "md" }} color="black">
          {" "}
          {res.totalItem}
        </Text>
      </Box>
    </Box>
  );
};

export default Paginator;
