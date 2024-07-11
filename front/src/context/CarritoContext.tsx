"use client"
import { createContext, useState, useEffect, useCallback } from "react";
import { ICartItem, ICarritoContextType, IProduct } from "@/interfaces";
import { fetchProductById } from "@/app/detail/[id]/page";

const addItem = async (carritoItems: ICartItem[], productId: number): Promise<ICartItem[]> => {
    const existingProduct = carritoItems.find((item) => item.id === productId);

    if (existingProduct) {
        return carritoItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
    } else {
        const data = await fetchProductById(productId.toString());
        return [...carritoItems, { ...data, quantity: 1 }];
    }
};

const removeItem = (carritoItems: ICartItem[], productId: number): ICartItem[] => {
    const existingProduct = carritoItems.find((item) => item.id === productId);

    if (existingProduct && existingProduct.quantity > 1) {
        return carritoItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
    } else {
        return carritoItems.filter((item) => item.id !== productId);
    }
};

const checkout = async (cartItems: IProduct[]) =>{
    try {
        const products = cartItems.map((item) => item.id);
        const token = localStorage.getItem("token"); 

        const response = await fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({products})
        });
        if (response.ok) {
                 
        } else {
            alert("Problems with your Purchase! Try again!")
        }
    } catch (error) {
        alert(error)
    }
}

export const CarritoContext = createContext<ICarritoContextType>({
    carritoItems: [],
    addToCarrito: () => { },
    removeFromCarrito: () => { },
    total: 0,
    checkoutOK: () => {}
});


export const CarritoProvider = ({ children }: { children: React.ReactNode }) => {
 
    const [carritoItems, setCarritoItems] = useState<ICartItem[]>([]);
    const [total, setTotal] = useState(0);

    const addToCarrito = useCallback(async (productId: number) => {
        const updatedCarrito = await addItem(carritoItems, productId);
        setCarritoItems(updatedCarrito);
    }, [carritoItems]);

    const removeFromCarrito = useCallback((productId: number) => {
        setCarritoItems(prevItems => removeItem(prevItems, productId));
    }, []);

    const checkoutOK = () => {
        checkout(carritoItems);
        setCarritoItems([]);
    }

    useEffect(() => {
        const total = carritoItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(total);
    }, [carritoItems]);

    return (
        <CarritoContext.Provider value={{ carritoItems, total, addToCarrito, removeFromCarrito, checkoutOK }}>
            {children}
        </CarritoContext.Provider>
    )
}
