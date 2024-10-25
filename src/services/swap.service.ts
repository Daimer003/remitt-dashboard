import axios from "axios";
const url: string = process.env.NEXT_PUBLIC_BASE_URL_API as string
const version: string = process.env.NEXT_PUBLIC_BASE_VERSION as string



export class ServicesSwap {
    /**
     * Covierte los valores ( USDT, BNB ), MITT
     * @param currency 
     * @param amount 
     * @param convert 
     * @param token 
     * @returns 
     */
    static async convertSwap(currency: string, amount: string, convert: string, token: string) {
        try {
            const response = await axios.get(`${url}/api/${version}/swap/value?currency=${currency}&amount=${amount}&convert=${convert}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            )
            return response.data
        } catch (error) {
            console.error('Error para convertir:', error);
            throw error;
        }
    }


    /**
     * Obtengo la firma para realizar la transacción
     * @param currency 
     * @param amount 
     * @param calculated 
     * @param token 
     * @returns 
     */
    static async signatureSwap(currency: number, amount: string, calculated: any, token: string) {
        try {
            const response = await axios.post(`${url}/api/${version}/swap`,
                {
                    value: calculated, 
                    currency_id: currency,
                    amount: amount
                }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            )
            return response.data
        } catch (error) {
            console.error('Error para convertir:', error);
            throw error;
        }
    }
}