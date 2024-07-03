"use client"
import { UserContext } from "@/context/userContext";
import { useContext, useEffect } from "react";
import Link from "next/link";

const UserDashboard = () => {

    const {isLogged, user, getOrders, orders} = useContext(UserContext);

    useEffect(() =>{
        getOrders();
    },)

    return (
        <div>
            {!isLogged ? (
                <>
                    <h1 className='text-xl font-bold mb-4 text-white'>Need to be Logged!</h1>
                    <Link href={`/login`}>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Go Login!</button>
                    </Link>
                </>
                
            ) : ( 
                <div>
                    <h1 className='text-xl font-bold mb-4 text-white'>Welcome {user?.user?.name}!</h1>
                    <div>
                        <h2 className='text-lg font-bold mb-4 text-white'>My Orders</h2>
                        {orders.map((order) => {
                            return(
                                <div key={order.id}>
                                    <li>{order.date}</li>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDashboard;