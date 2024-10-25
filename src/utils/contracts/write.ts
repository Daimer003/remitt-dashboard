import { writeContract, getAccount } from '@wagmi/core'
import { abi as swapAbi } from '@/abi/Swap.json'
import ERC20_ABI from "@/abi/erc20.abi.json"
import { config } from '@/config/config'
import { parseGwei } from 'viem'
import { ServicesSwap } from '@/services/swap.service'

const account = getAccount(config);
// Función para asegurar que las direcciones tienen el prefijo '0x'
const validateAddress = (address: string): `0x${string}` => {
    if (!address.startsWith("0x")) {
        throw new Error(`La dirección ${address} no es válida, debe comenzar con '0x'`)
    }
    return address as `0x${string}`
}

// Validación de direcciones al inicio
const contractAddress = validateAddress(process.env.NEXT_PUBLIC_REMITT_CONTRACT as string)
const tokenDcorpAddress = validateAddress(process.env.NEXT_PUBLIC_REMITT_TOKEN_DCORP as string)
//const spenderAddress = validateAddress(process.env.NEXT_PUBLIC_REMITT_SPENDER as string)

/**
 * Converts currency and token values for swapping.
 */
export const convert = async (currency: string, value: any, token: any, tokenMitt: string) => {
    if ((currency === 'BNB' || currency === 'USTD') && token) {
        return (await ServicesSwap.convertSwap(currency, value, tokenMitt, token)).data
    } else if (tokenMitt && token) {
        return (await ServicesSwap.convertSwap(tokenMitt, value, currency, token)).data
    }
}

/**
 * Handles contract write for remittance with specified value and data.
 */
export const writeContractRemitt = async (value: string, data: any) => {
    const resul = await writeContract(config, {
        abi: swapAbi,
        address: contractAddress,
        functionName: 'exchange',
        args: [data],
        value: parseGwei(String(value))
    })

    return resul
}

/**
 * Approves and swaps USDT using the specified parameters.
 */
export const swapRemittUsdt = async (calculated: any, sendValue: any, token: any) => {
    try {

        const { data } = await ServicesSwap.signatureSwap(1, sendValue, calculated, token);

        // Ejecuta la aprobación y espera el hash de aprobación
        const hashApprove = await writeContract(config, {
            address: tokenDcorpAddress,
            abi: ERC20_ABI,
            functionName: 'approve',
            args: [contractAddress, parseGwei(String(calculated))],
            account: account.address,
        });

        return { valueCalculate: calculated, data: data, hashApprove: hashApprove }

    } catch (error) {
        console.error("Error approving or swapping token:", error);
        throw new Error("Error processing USDT swap");
    }
};

/**
 * Swaps BNB using the specified parameters.
 */
export const swapRemittBnb = async (calculated: any, sendValue: any, token: any) => {
    try {
        const { data } = await ServicesSwap.signatureSwap(2, sendValue, calculated, token)

        const result = await writeContract(config, {
            abi: swapAbi,
            address: contractAddress,
            functionName: 'exchange',
            args: [data],
            value: calculated
        })

        console.log("BNB Swap Result:", result)
    } catch (error) {
        console.error("Error processing BNB swap:", error)
        throw new Error("Error processing BNB swap")
    }
}

