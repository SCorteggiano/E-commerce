"use client"
import React, { useContext, useState } from 'react';
import { UserContext } from '@/context/userContext';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const UserInfoCard= () => {

    const { user } = useContext(UserContext);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl  mb-4 text-black">USER INFORMATION</h2>
            <p className={`text-black ${inter.className}`}><strong>Name:</strong> {user?.user?.name}</p>
            <p className={`text-black ${inter.className}`}><strong>Email:</strong> {user?.user?.email}</p>
            <p className={`text-black ${inter.className}`}><strong>Address:</strong> {user?.user?.address}</p>
            <p className={`text-black ${inter.className}`}><strong>Phone:</strong> {user?.user?.phone}</p>
        </div>
    );
};

export default UserInfoCard;
