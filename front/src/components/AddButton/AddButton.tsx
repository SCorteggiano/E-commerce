"use client"
import { useContext } from "react";
import { CarritoContext } from "@/context/CarritoContext";

const AddToCart = ({id} : {id:number}) => {
    const {addToCarrito} = useContext(CarritoContext);

    function handleSubmit (event: React.MouseEvent<HTMLButtonElement>) {
        addToCarrito(id);
    }

    return (
        <button
        type="button"
        onClick={handleSubmit}
        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
            PURCHASE
        </button>
    )
} 

export default AddToCart;