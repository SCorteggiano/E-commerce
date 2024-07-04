"use client"
import React, { useContext, useState } from 'react';
import { UserContext } from '@/context/userContext';

const UserInfoCard= () => {

    const { user } = useContext(UserContext);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">User Information</h2>
            <p className='text-black'><strong>Name:</strong> {user?.user?.name}</p>
            <p className='text-black'><strong>Email:</strong> {user?.user?.email}</p>
            <p className='text-black'><strong>Address:</strong> {user?.user?.address}</p>
            <p className='text-black'><strong>Phone:</strong> {user?.user?.phone}</p>
        </div>
    );
};

export default UserInfoCard;
