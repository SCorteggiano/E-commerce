"use client"
import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

const OrdersCard: React.FC = () => {
    const { orders, getOrders } = useContext(UserContext);

    useEffect(() => {
        getOrders();
    }, [getOrders]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6 ">
            <h2 className="text-2xl font-bold mb-4 text-black">Your Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map(order => (
                    <div key={order.id} className="mb-4">
                        <p className=' text-black'><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                        <p className=' text-black'><strong>Products:</strong> {order.products.map(product => product.name).join(', ')}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default OrdersCard;
