"use client"
import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const OrdersCard: React.FC = () => {
    const { orders, getOrders } = useContext(UserContext);

    useEffect(() => {
        getOrders();
    }, [getOrders]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6 ">
            <h2 className="text-2xl mb-4 text-black">YOUR ORDERS</h2>
            {orders.length === 0 ? (
                <p className={`text-black  font-bold ${inter.className}`}>No orders found.</p>
            ) : (
                orders.map(order => (
                    <div key={order.id} className="mb-4">
                        <p className={`text-black ${inter.className}`}><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                        <p className={`text-black ${inter.className}`}><strong>Products:</strong> {order.products.map(product => product.name).join(', ')}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default OrdersCard;
