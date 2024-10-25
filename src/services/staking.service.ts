import axios from "axios"

const url: string = process.env.NEXT_PUBLIC_BASE_URL_API as string
const version: string = process.env.NEXT_PUBLIC_BASE_VERSION as string




export class ServicesStaking {
    /**
     * Obtiene los packages
     * @param token 
     * @returns 
     */
    static async getPackages(token: any) {
        try {
            const response = await axios.get(`${url}/api/${version}/packages`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(response)
            return response 
        } catch (error) {
            console.log('Fallo el servicio para obtener los paquetes', error)
        }
    }
}