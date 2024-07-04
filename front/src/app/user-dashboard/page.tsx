"use client"
import { UserContext } from "@/context/userContext";
import { useContext, useEffect } from "react";
import Link from "next/link";
import OrdersCard from "@/components/OrdersCard/OrdersCard";
import UserInfoCard from "@/components/UserInfoCard/UserInfoCard";

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
                    <div>
                        <UserInfoCard /> 
                        <OrdersCard />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDashboard;