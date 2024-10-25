import { IconArrowDow } from "@/utils/icons";
import { Box, Button, Input, Text, Select } from "@chakra-ui/react";
import Image from "next/image";
import iconBnb from "@/app/assets/bnb.png";
import iconMit from "@/app/assets/mit.png";
import { swapRemittUsdt, comvert, swapRemittBnb } from "@/utils/contracts/write";
import { useAuth } from "@/context/authContext";
import { useState, useCallback } from "react";
import debounce from "debounce";

const Swap = () => {
  const { token } = useAuth();

  const [selectCurrency, setSelectCurrency] = useState<string>("BNB");
  const [value, setValue] = useState<string>("0");
  const [amountMitt, setAmountMitt] = useState<string>("0");
  const [focus, setFocus] = useState<boolean>(true); // true para valueCurrency, false para mitt
  const [isFirstChange, setIsFirstChange] = useState(true);

  // Implementación del debounce
  const convertGeneralDebounced = useCallback(
    debounce(async (name: string, amount: number) => {
      if (!amount || isNaN(amount)) return;

      if (name === "valueCurrency" && focus) {
        const responseCurrency = await comvert(
          "MITT",
          amount,
          token,
          selectCurrency
        );
        console.log('CURRENCY',responseCurrency.toString())
        setAmountMitt(responseCurrency.toString());
      }

      if (name === "mitt" && !focus) {
        const responseMitt = await comvert(
          selectCurrency,
          amount,
          token,
          "MITT"
        );
        setValue(responseMitt.toString());
      }
    }, 500),
    [selectCurrency, token, focus]
  );

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "valueCurrency") {
      setValue(value);
      setFocus(true);

      if (isFirstChange) {
        convertGeneralDebounced.flush(); // Llama inmediatamente al debounce
        convertGeneralDebounced(name, parseFloat(value)); // Ejecuta inmediatamente
        setIsFirstChange(false); // Después del primer cambio, desactiva la llamada inmediata
      } else {
        convertGeneralDebounced(name, parseFloat(value)); // Usa debounce después
      }
    }

    if (name === "mitt") {
      setAmountMitt(value);
      setFocus(false);

      if (isFirstChange) {
        convertGeneralDebounced.flush();
        convertGeneralDebounced(name, parseFloat(value));
        setIsFirstChange(false);
      } else {
        convertGeneralDebounced(name, parseFloat(value));
      }
    }
  };

  const handleOnChangeCurrency = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValue("0");
    setAmountMitt("0");
    setSelectCurrency(event.target.value);
  };

  const initialWriteContact = async () => {
    let currencyAmount, calculatedAmount;

    if (focus) {
      // Si estamos tiendo en valueCurrency, este será el amount
      currencyAmount = parseFloat(value);
      calculatedAmount = parseFloat(amountMitt);
    } else {
      // Si estamos tiendo en mitt, este será el amount
      currencyAmount = parseFloat(value);
      calculatedAmount = parseFloat(amountMitt);
    }

    // Llamada a la función SwapRemittUsdt con los valores correctos

    if (selectCurrency == "USDT")
      await swapRemittUsdt(currencyAmount, calculatedAmount, token);

    if (selectCurrency == "BNB")
      await swapRemittBnb(currencyAmount, calculatedAmount, token);
  };

  return (
    <Box
      w="100%"
      maxW="400px"
      bg="var(--bg-swap)"
      padding="10px"
      borderRadius="16px"
    >
      <Box w="100%">
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          w="100%"
          position="relative"
        >
          <Text as="h5" fontSize="2xl" color="black">
            Swap
            <span
              style={{
                display: "flex",
                width: "85%",
                height: "2px",
                background: "#842EF5",
                position: "absolute",
                top: "20px",
                marginLeft: "60px",
              }}
            />
          </Text>
          <Text as="span" color="black">
            Trade tokens in an instant
          </Text>
        </Box>

        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          w="100%"
          gap="20px"
          marginTop="40px"
        >
          <Box w="100%">
            <Box display="flex" justifyContent="space-between" w="100%">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginBottom={1}
              >
                <Box w="20px">
                  <Image src={iconBnb} alt="Icono bnb" width={20} height={20} />
                </Box>
                <Select
                  onChange={handleOnChangeCurrency}
                  defaultValue="BNB"
                  w="80px"
                  h="22px"
                  color="black"
                  border="none"
                  p={0}
                >
                  <option value="BNB">BNB</option>
                  <option value="USDT">USDT</option>
                </Select>
              </Box>
              <Text as="span" color="black">
                Balance: 0.0254051
              </Text>
            </Box>

            <Input
              type="text"
              name="valueCurrency"
              onChange={handleOnChange}
              value={value}
              bg="white"
              color="black"
              borderRadius="8px"
              textAlign="center"
              placeholder="0"
            />
          </Box>

          <Box>
            <IconArrowDow size="40" />
          </Box>

          <Box w="100%">
            <Box display="flex" justifyContent="space-between" w="100%" gap={2}>
              <Box display="flex">
                <Box w="30px">
                  <Image src={iconMit} alt="Icono mit" width={20} height={20} />
                </Box>
                <Text as="span" color="black">
                  MITT
                </Text>
              </Box>
              <Text as="span" color="black">
                Balance: 0.0254051
              </Text>
            </Box>

            <Input
              type="number"
              name="mitt"
              onChange={handleOnChange}
              value={amountMitt}
              bg="white"
              color="black"
              borderRadius="8px"
              textAlign="center"
              placeholder="0"
            />
          </Box>

          <Button
            onClick={initialWriteContact}
            w="100%"
            marginTop="20px"
            bg="#01DBE7"
            borderRadius="50px"
          >
            Swap
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Swap;
