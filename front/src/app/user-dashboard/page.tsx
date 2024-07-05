"use client"
import { UserContext } from "@/context/userContext";
import { useContext, useEffect } from "react";
import Link from "next/link";
import OrdersCard from "@/components/OrdersCard/OrdersCard";
import UserInfoCard from "@/components/UserInfoCard/UserInfoCard";

const UserDashboard = () => {

    const {isLogged, getOrders} = useContext(UserContext);

    useEffect(() =>{
        getOrders();
    },)

    return (
        <div>
            {!isLogged ? (
                <div className="flex flex-col items-center justify-center mt-40">
                    <div className="mb-8 ">
                        <h1 className='text-6xl text-white'>NEED </h1>
                        <h1 className='text-6xl text-white'>TO BE </h1>
                        <h1 className='text-6xl text-white'>LOGGED!</h1>
                    </div>
                    <Link href={`/login`}>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md text-2xl">
                            LOGIN
                        </button>
                    </Link>
                </div>
                
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