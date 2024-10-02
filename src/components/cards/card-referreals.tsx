import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  CardFooter,
  Button,
  Box,
} from "@chakra-ui/react";
import imgArrow from "@/app/assets/arrow3d.webp";

import Image from "next/image";

const CardReferreals = () => {
  return (
    <Card w="100%" maxW="400px"         bg="var(--bg-swap)" borderRadius="20px">
      <CardBody
        display="flex"
        flexDir="column"
        justifyContent="100%"
        alignItems="center"
        w="100%"
        padding="10px"
        borderRadius="16px"
        p="10px"
      >
        <Box display="flex" justifyContent="space-between" w="100%">
          <Text as="span" color="black">
            3/12/23
          </Text>
          <Text as="span" color="black">
            true
          </Text>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="120px"
          h="120px"
          p="20px"
          border="1px solid #000"
          borderRadius="100%"
        >
          <Image
            src={imgArrow}
            alt="Green double couch with wooden legs"
            width={200}
            height={200}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
            }}
          />
        </Box>

        <Stack mt="6" spacing="3" bg='white' p='10px' borderRadius='8px' w='100%'>
          <Text as="span" color='black'>0xBF7eAdDOx65cAS34S34</Text>
        </Stack>

<Box display='flex' flexDir='column' w='100%' gap='10px' mt='20px'>
<Text as="span" color='black'>Code:User 03</Text>
<Text as="span" color='black'>Sponsor: User</Text>

</Box>

      </CardBody>

      <CardFooter p="10px">
        <Button w="100%" variant="buttonPrimary">
          See video
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardReferreals;
