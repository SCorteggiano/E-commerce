"use client"
import { useContext } from 'react';
import { CarritoContext } from '@/context/CarritoContext';
import { UserContext } from '@/context/userContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";

const Cart = () => {
    const cartContext = useContext(CarritoContext);
    const userContext = useContext(UserContext);
    const router = useRouter()

    const { carritoItems, addToCarrito, removeFromCarrito, total, checkoutOK } = cartContext;
    const { isLogged } = userContext;

    const handleCheckout = (event: React.MouseEvent<HTMLButtonElement>) => {
        checkoutOK();
        router.push('/thanks');
       
    };

    return (
        <>
                <div className="absolute left-0 m-4 px-4 py-2 text-sm">
                    <Link href={`/shop`}>
                        <div
                            className="rounded-lg  px-5 py-2.5 text-center text-sm font-medium text-white bg-blue-500 hover:bg-blue-700"
                            > 
                            BACK
                        </div>
                    </Link>
                </div>
        
                <motion.div
                    initial={{ x: "-1000%", }}
                    animate={{ x: "0%", }}
                    transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut"
                    }}
                >  
                {isLogged ? (
                    <>
                        <div className="p-4 bg-white rounded-lg shadow-lg" style={{ minWidth: '680px' }}>
                            <h2 className="text-2xl mb-4 text-black">CART</h2>
                        {carritoItems.length === 0 ? (
                            <p className='text-xl mb-4 text-black text-center font-bold'>Your cart is empty!</p>
                        ) : (
                            <div>
                                {carritoItems.map(item => (
                                    <div key={item.id} className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <Image src={item.image} alt={item.name} width={100} height={90} className="object-cover mr-4" />
                                            <div>
                                                <h3 className="text-lg text-black font-bold">{item.name}</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center ml-auto">
                                            <p className='text-black font-bold mr-4'>${item.price.toFixed(2)}</p>
                                            <button
                                                onClick={() => removeFromCarrito(item.id)}
                                                className="px-2 py-1 bg-red-500 text-white rounded-md"
                                            >
                                                -
                                            </button>
                                            <span className="px-4 text-black font-bold">{item.quantity}</span>
                                            <button
                                                onClick={() => addToCarrito(item.id)}
                                                className="px-2 py-1 bg-green-500 text-white rounded-md"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div className="text-right mt-4">
                                    <h3 className="text-xl font-bold text-black">Total: ${total.toFixed(2)}</h3>
                                </div>
                            </div>
                        )}
                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-700 p-2  text-lg text-white rounded-md"
                            
                            onClick={handleCheckout}
                            disabled={carritoItems.length === 0}
                        >
                            CHECKOUT
                        </button>
                        </div>
                    </>
                ) : (
                         <div className="flex flex-col items-center justify-center mt-40">
                            <div className="mb-8 ">
                                <h1 className='text-6xl text-white'>NEED </h1>
                                <h1 className='text-6xl text-white'>TO BE </h1>
                                <h1 className='text-6xl text-white'>LOGGED!</h1>
                            </div>
                            <Link href={`/login`}>
                                <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md text-2xl">
                                    LOGIN
                                </button>
                            </Link>
                        </div>
                )}
            
        </motion.div>
        </>
    );
};

export default Cart;
