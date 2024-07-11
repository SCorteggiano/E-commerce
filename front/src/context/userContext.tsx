"use client"
import { IUserContextType, ILoginUserResponse, IOrderResponse, IUser, ILoginUser } from "@/interfaces";
import { createContext, useState, useEffect } from "react";
import { registerFetch, loginFetch, getUserOrders } from "@/fetch/fetchUser";

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

export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<Partial<ILoginUserResponse> | null> (null);
    const [isLogged, setIsLogged] = useState(false);
    const [orders, setOrders] = useState<IOrderResponse[]>([])

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

    const login = async (credentials: ILoginUser ) => {
        try {
            const data = await loginFetch(credentials);
            setUser(data); 
            localStorage.setItem("user", JSON.stringify(data)); 
            localStorage.setItem("token", data.token);
            return true;
        } catch (error) {
            console.error(error);
            return false; 
        }
    };

    const logout = () => {
        localStorage.removeItem("user"); 
        localStorage.removeItem("token"); 
        setUser(null); 
        setIsLogged(false); 
    };

    const getOrders = async () => {
        try {
            const token: string = localStorage.getItem("token") || ""; 
            const data = await getUserOrders(token); 
            setOrders(data); 
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            setIsLogged(true);
        } 
    },[user]);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(user){
            setUser(JSON.parse(user));
            return;
        } 
        setUser(null);
    },[])

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