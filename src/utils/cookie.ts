
import { setCookie } from 'nookies';

//Guarda el token
export const saveCookie = async (token: string) => {
       // Guardamos el token en la cookie
       setCookie(null, 'authToken', token, {
        maxAge: 8 * 60 * 60, // 8 horas en segundos (28,800 segundos)
        path: '/',
        secure: process.env.NODE_ENV === 'production', // Solo en HTTPS en producción
        httpOnly: false, // Para que no sea accesible desde JavaScript del cliente
        sameSite: 'strict', // Protege contra ataques CSRF
      });
}

//Elimina el token
export const removeCookie = () => {
  setCookie(null, 'authToken', '', {
    maxAge: -1, // Establece una fecha de caducidad en el pasado
    path: '/', // Asegúrate de que el path sea correcto
  });
};