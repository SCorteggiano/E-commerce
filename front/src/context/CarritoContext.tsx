"use client"
import { createContext, useState, useEffect, useCallback } from "react";
import { ICartItem, ICarritoContextType, IProduct } from "@/interfaces";
import { fetchProductById } from "@/app/detail/[id]/page";

// Funcion addItem
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

// Funcion removeItem
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

// Funcion checkout
const checkout = async (cartItems: IProduct[]) =>{
    try {
        const products = cartItems.map((item) => item.id); // Mapeo los productos y me quedo con sus id

        // Extraigo el token del localStorage para enviarlo con el array de productos 
        // para saber que user esta haciendo la compra
        const token = localStorage.getItem("token"); 

        //Realizo la peticion POST en fetch
        const response = await fetch("http://localhost:5000/orders", {
            method: "POST",
            //Integro el TOKEN dentro del Header como me indica el middleware del back
            headers: {
                Authorization: `${token}`,
                "Content-Type": "application/json",
            },
            // Por body envio en array de productos
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

// Genero contexto global para compartir elementos en la app
export const CarritoContext = createContext<ICarritoContextType>({
    carritoItems: [],
    addToCarrito: () => { throw new Error('addToCarrito function must be overridden'); },
    removeFromCarrito: () => { throw new Error('removeFromCarrito function must be overridden'); },
    total: 0,
    checkoutOK: () => {}
});


// Genero un provider 
export const CarritoProvider = ({ children }: { children: React.ReactNode }) => {

    // Genero los estados globales  
    const [carritoItems, setCarritoItems] = useState<ICartItem[]>([]);
    const [total, setTotal] = useState(0);

    // Funcion de agregar productos al carrito
    const addToCarrito = useCallback(async (productId: number) => {
        const updatedCarrito = await addItem(carritoItems, productId);
        setCarritoItems(updatedCarrito);
    }, [carritoItems]);

    // Funcion para eliminar productos del carrito
    const removeFromCarrito = useCallback((productId: number) => {
        setCarritoItems(prevItems => removeItem(prevItems, productId));
    }, []);

    // Funcion para enviar el Chekout al Backend
    const checkoutOK = () => {
        checkout(carritoItems);
        setCarritoItems([]);
    }

    // Calculo el total cuando cambian los productos en el carrito
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
