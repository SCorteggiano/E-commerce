import { IUser, ILoginUser, IOrderResponse } from "@/interfaces";

export const registerFetch = async (user: Omit<IUser, "id">) => {
    const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
}

export const loginFetch = async (credentials: ILoginUser) => {
    const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    const data = await response.json();
    return data;
}

export const getUserOrders = async(token: string) => {
    const response = await fetch("http://localhost:5000/users/orders", {
        method: "GET",
        headers: {
            Authorization: `${token}`,
        },
    });
    const data = await response.json();
    return data;
}