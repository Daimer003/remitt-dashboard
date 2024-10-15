import Swap from "@/components/swap";
import TableData from "@/components/table";
import { Box } from "@chakra-ui/react";

const PageSwap = () => {
  return (
    <Box display="flex" flexDir="column" gap="20px" w="100%" marginTop={8}>
      <Swap />

      <Box display="flex" position="relative">
        <TableData
          headers={["MITT", "Wallet", "Amount", "Currency", "Fecha", "Enlace"]}
          values={[
            "name",
            "email",
            "registrationDate",
            "currency",
            "date",
            "link",
          ]}
          dataBody={[
            {
              name: "180D",
              email: "0xBF7eaDD0x...",
              registrationDate: "10MITT",
              currency: "USD",
              date: "02 / 10 / 24 - 6:23PM",
              link: "Enlace",
            },
            {
              name: "180D",
              email: "0xBF7eaDD0x...",
              registrationDate: "10MITT",
              currency: "USD",
              date: "02 / 10 / 24 - 6:23PM",
              link: "Enlace",
            },
            {
              name: "180D",
              email: "0xBF7eaDD0x...",
              registrationDate: "10MITT",
              currency: "USD",
              date: "02 / 10 / 24 - 6:23PM",
              link: "Enlace",
            },
            {
              name: "180D",
              email: "0xBF7eaDD0x...",
              registrationDate: "10MITT",
              currency: "USD",
              date: "02 / 10 / 24 - 6:23PM",
              link: "Enlace",
            },
            {
              name: "180D",
              email: "0xBF7eaDD0x...",
              registrationDate: "10MITT",
              currency: "USD",
              date: "02 / 10 / 24 - 6:23PM",
              link: "Enlace",
            },
            {
              name: "180D",
              email: "0xBF7eaDD0x...",
              registrationDate: "10MITT",
              currency: "USD",
              date: "02 / 10 / 24 - 6:23PM",
              link: "Enlace",
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default PageSwap;
