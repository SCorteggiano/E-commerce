"use client"
import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import { Inter } from 'next/font/google';
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const OrdersCard: React.FC = () => {
    const { orders, getOrders } = useContext(UserContext);

    useEffect(() => {
        getOrders();
    }, [getOrders]);

    return (
        <motion.div
        initial={{ x: "1000%", }}
        animate={{ x: "0%", }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut"
        }}
        className="bg-white p-6 rounded-lg shadow-md mt-6 ">
            <h2 className="text-2xl mb-4 text-gray-900">YOUR ORDERS</h2>
            {orders.length === 0 ? (
                <p className={`text-gray-900  font-bold ${inter.className}`}>No orders found.</p>
            ) : (
                orders.map(order => (
                    <div key={order.id} className="mb-4">
                        <p className={`text-gray-900 ${inter.className}`}><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                        <p className={`text-gray-900 ${inter.className}`}><strong>Products:</strong> {order.products.map(product => product.name).join(', ')}</p>
                    </div>
                ))
            )}
        </motion.div>
    );
};

export default OrdersCard;
