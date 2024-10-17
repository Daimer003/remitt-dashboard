
import axios from 'axios';
const utl: string = process.env.NEXT_PUBLIC_BASE_URL_API as string
const version: string = process.env.NEXT_PUBLIC_BASE_VERSION as string


export class ServiceAuth {
   /**
     * Servicio para autenticarme y obtener el token
     * @param wallet Dirección de la wallet
     */
   static async getAuth(wallet: string) {
    try {
        const auth = await axios.post(`${utl}/api/${version}/auth/login`, {
            wallet: wallet, // Usar el parámetro 'wallet' dinámicamente
        });

        console.log('Respuesta de autenticación:', auth.data);
        return auth.data; // Retornar los datos de la respuesta
    } catch (error) {
        console.error('Error en la autenticación:');
        throw error; // Lanza el error si quieres manejarlo más arriba en el flujo
    }
}
}