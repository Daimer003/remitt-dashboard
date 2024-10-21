
import axios from 'axios';
const url: string = process.env.NEXT_PUBLIC_BASE_URL_API as string
const version: string = process.env.NEXT_PUBLIC_BASE_VERSION as string


export class ServiceAuth {
    /**
      * Servicio para autenticarme y obtener el token
      * @param wallet Dirección de la wallet
      */
    static async getAuth(wallet: any) {
        try {
            const response = await axios.post(`${url}/api/${version}/auth/login`, {
                wallet: wallet,
            });

            // console.log('Respuesta de autenticación:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error en la autenticación:');
            throw error;
        }
    }

    /**
     * Servicio para el logout del la cuenta del usuario
     */
    static async logaut(token: any) {
        try {
            const response = await axios.post(`${url}/api/${version}/auth/logout`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

            //console.log('Respuesta de logout', response.data);
            return response.data;
        } catch (error) {
            console.error('Error del logout:');
            throw error;
        }
    }


    /**
     * Servicio para registrar
     * @param data 
     * @returns 
     */
    static async registerUser(data: any) {

        const { username, wallet, sponsor_id } = data

        try {
            const response = await axios.post(`${url}/api/${version}/auth/register`, {
                username: username,
                wallet: "0x627F673E31663cee9Fe2E6d878544E094F55EEBA",
                sponsor_id: sponsor_id
            });

            console.log('Respuesta del registro:', response.data);
            return response.data; // Retornar los datos de la respuesta
        } catch (error) {
            console.error('Error del registro:');
            throw error; // Lanza el error si quieres manejarlo más arriba en el flujo
        }
    }
}