import { writeContract } from '@wagmi/core'
import { abi } from '@/abi/Swap.json'
import ERC20_ABI from "@/abi/erc20.abi.json";
import { config } from '@/config/config'
import { parseGwei } from 'viem'
import { ServicesSwap } from '@/services/swap.service';


export const comvert = async (currency: string, value: any, token: any, tokenMitt: string) => {
    if (currency == 'BNB' || currency == 'USTD') {
        if (token) {
            const response = await ServicesSwap.convertSwap(
                currency,
                value,
                tokenMitt,
                token
            );
            return response.data
        }

    }

    if (tokenMitt) {
        if (token) {
            const response = await ServicesSwap.convertSwap(
                tokenMitt,
                value,
                currency,
                token
            );
            return response.data
        }
    }


};

const writeContractRemitt = async (value: any, data: any) => {

    const result = await writeContract(config, {
        abi,
        address: '0xB86dB108EC28FB6a6Ec21b19587dEda402B960f8',
        functionName: 'exchange',
        args: [data],
        value: parseGwei(value)
    })

    console.log(result)
}

export const swapRemittUsdt = async (calculated: any, sendValue: any, token: any) => {
    try {
        const { data } = await ServicesSwap.signatureSwap(1, sendValue, calculated, token)

        const response = await writeContract(config, {
            address: '0x4866D7d53d20006D4B9b4135c4d31983d2E4c808',
            abi: ERC20_ABI, // Asegúrate de que este ABI tenga la definición de approve
            functionName: 'approve',
            args: [
                '0xB86dB108EC28FB6a6Ec21b19587dEda402B960f8', // Dirección del spender
                parseGwei(String(calculated)), // Cantidad en wei
            ],
            account: '0x627F673E31663cee9Fe2E6d878544E094F55EEBA',
        });

        console.log('Transaction response:', response);
        writeContractRemitt(String(calculated), data)
    } catch (error) {
        console.error('Error approving token:', error);
    }
}

//const amountToTransfer = BigInt("00006729475100942128");
export const swapRemittBnb = async (calculated: any, sendValue: any, token: any) => {
    const { data } = await ServicesSwap.signatureSwap(2, sendValue, calculated, token)

    const result = await writeContract(config, {
        abi,
        address: '0xB86dB108EC28FB6a6Ec21b19587dEda402B960f8',
        functionName: 'exchange',
        args: [
          data
        ],
        value: calculated
    })

    console.log(result)
}
