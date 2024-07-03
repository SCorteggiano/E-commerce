"use client"
import { IUserContextType, ILoginUserResponse, IOrderResponse, IUser, ILoginUser } from "@/interfaces";
import { createContext, useState, useEffect } from "react";
import { registerFetch, loginFetch, getUserOrders } from "@/fetch/fetchUser";

// Genero contexto global para compartir en la app
export const UserContext = createContext<IUserContextType>({
    user: null,
    setUser: () => {},
    isLogged: false,
    setIsLogged: () => {},
    login: async () => false,
    register: async () => false,
    getOrders: async () => {},
    orders: [],
    logout: () => {}, 
});

// Genero un provider
export const UserProvider = ({children}: {children: React.ReactNode}) => {
    // Genero los estados globales
    const [user, setUser] = useState<Partial<ILoginUserResponse> | null> (null);
    const [isLogged, setIsLogged] = useState(false);
    const [orders, setOrders] = useState<IOrderResponse[]>([])

    // Funcion register
    const register = async (user: Omit<IUser, "id">) => {
        try {
            const data = await registerFetch(user);
            if(data.id){
                login({ email: user.email, password: user.password})
                return true;
            }
            return false;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    // Funcion Login
    const login = async (credentials: ILoginUser ) => {
        try {
            const data = await loginFetch(credentials); //almaceno dentro de data token credentials
            setUser(data); // modifico el estado global con data
            localStorage.setItem("user", JSON.stringify(data)); //almaceno en localStorage al usuario
            localStorage.setItem("token", data.token); //almaceno en localStorage el token del usuario
            return true;
        } catch (error) {
            console.error(error);
            return false; 
        }
    };

    // Funcion Logout
    const logout = () => {
        localStorage.removeItem("user"); // Elimino el usuario del localStorage
        localStorage.removeItem("token"); // Elimino el token de usuario del localStorage
        setUser(null); // actualizo el estado del usuario
        setIsLogged(false); // modifico el estado de isLogged a falso
    };

    // Funcion Orders
    const getOrders = async () => {
        try {
            const token: string = localStorage.getItem("token") || ""; //
            const data = await getUserOrders(token); //
            setOrders(data); //
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    // Uso useEffect para que cada vez que se modifique el estado de usuario, SE ACTUALICE EL VALOR DEL TOKEN
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            setIsLogged(true);
        } 
    },[user]);

    // 
    useEffect(() => {
        const user = localStorage.getItem("user");
        if(user){
            setUser(JSON.parse(user));
            return;
        } 
        setUser(null);
    },[])


    // Habilito a traves del provider todas las funciones del contexto
    return (
        <UserContext.Provider value={{
            user,
            setUser,
            isLogged,
            setIsLogged,
            register,
            login,
            logout,
            orders,
            getOrders
        }}>
            {children}
        </UserContext.Provider>
    );  
};