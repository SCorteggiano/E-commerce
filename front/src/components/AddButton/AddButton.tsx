"use client"
import { useContext } from "react";
import { CarritoContext } from "@/context/CarritoContext";
import { UserContext } from "@/context/userContext";
import { useRouter } from 'next/navigation';
import Link from "next/link";

const AddToCart = ({id} : {id:number}) => {
    const {addToCarrito} = useContext(CarritoContext);
    const {isLogged } = useContext(UserContext)
    const router = useRouter();

    function handleSubmit (event: React.MouseEvent<HTMLButtonElement>) {
        addToCarrito(id);
        router.push("/shop")
    }

    return (
        <>
            { isLogged ? (
                <button
                type="button"
                onClick={handleSubmit}
                className="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white bg-blue-500 hover:bg-blue-700"
                >
                    ADD TO CART
                </button>) : (
                    <Link
                    href={"/login"}
                    type="button"
                    className="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white bg-blue-500 hover:bg-blue-700"
                    >
                        LOGIN IN ORDER TO BUY
                    </Link> 
            )}
        </>
        
    )
} 

export default AddToCart;