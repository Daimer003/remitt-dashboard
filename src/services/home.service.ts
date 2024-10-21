
import axios from 'axios';
const url: string = process.env.NEXT_PUBLIC_BASE_URL_API as string
const version: string = process.env.NEXT_PUBLIC_BASE_VERSION as string


export class ServicesHome {

    static async LinkReferred(token: any) {
        try {
            const response = await axios.get(`${url}/api/${version}/user/refer`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            //console.log('Respuesta del link del referido:', response.data);
            return response.data; // Retornar los datos de la respuesta
        } catch (error) {
            console.error('Error para obtener el link del referido:');
            throw error; // Lanza el error si quieres manejarlo más arriba en el flujo
        }
    }

}