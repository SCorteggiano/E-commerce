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
    const [orders, setOrders] = useState<IOrderResponse[]>([]);
    const [error, setError] = useState<string | null>(null);


    const register = async (user: Omit<IUser, "id">) => {
        try {
            const data = await registerFetch(user);
            if(data.id){
                const loginSuccess = await login({ email: user.email, password: user.password });
                if (loginSuccess) {
                    return true;
                }
                setError('Failed to log in after registration');
                return false;
            }
            setError('Registration failed');
            return false;
        } catch (error) {
            console.error(error);
            setError('Registration failed');
            return false;
        }
    };

    const login = async (credentials: ILoginUser ) => {
        try {
            const data = await loginFetch(credentials);
            if (data.message) {
                setError(data.message);
                return false;
            }
            setUser(data); 
            localStorage.setItem("user", JSON.stringify(data)); 
            localStorage.setItem("token", data.token);
            setIsLogged(true);
            setError(null); 
            return true;
        } catch (error) {
            console.error(error);
            setError('Invalid credentials');
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