"use client"
import { useContext } from 'react';
import { CarritoContext } from '@/context/CarritoContext';
import { UserContext } from '@/context/userContext';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
    const cartContext = useContext(CarritoContext);
    const userContext = useContext(UserContext);

    if (!cartContext) {
        return null;
    }

    const { carritoItems, addToCarrito, removeFromCarrito, total, checkoutOK } = cartContext;
    const { isLogged } = userContext;

    return (
        <div>
            <div className="absolute left-0 m-4 px-4 py-2 text-sm">
                <Link href={`/shop`}>
                    <div
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4
                        focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"> Back
                    </div>
                </Link>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-lg" style={{ minWidth: '680px' }}>
                <h2 className="text-2xl mb-4 text-black">CARRITO</h2>
                {isLogged ? (
                    <>
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
                                        <div className="flex items-center ml-auto"> {/* Ajuste para mover el contenedor a la derecha */}
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
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                            onClick={checkoutOK}
                        >
                            Checkout
                        </button>
                    </>
                ) : (
                    <>
                        <p className='text-xl mb-4 text-black text-center'>Need to be Logged!</p>
                        <Link href={`/login`}>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">GO LOGIN!</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
