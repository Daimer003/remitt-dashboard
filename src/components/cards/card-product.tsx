import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import imgCover from '@/app/assets/cover.webp'
import Image from "next/image";


const CardProduct = () => {
  return (
    <Card maxW="sm" bg="white" borderRadius="20px">
      <CardBody p='10px'>
        <Image
          src={imgCover}
          alt="Green double couch with wooden legs"
          width={200}
          height={200}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '16px'
          }}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" color="black">
            Example for swap
          </Heading>
          <Text as="p" color="black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacinia pellentesque euismod.
          </Text>
        </Stack>
      </CardBody>

      <CardFooter p='10px'>
        <Button w="100%" variant="buttonPrimary">
          See video
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
