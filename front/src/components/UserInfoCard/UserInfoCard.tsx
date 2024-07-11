"use client"
import React, { useContext } from 'react';
import { UserContext } from '@/context/userContext';
import { Inter } from 'next/font/google';
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const UserInfoCard= () => {

    const { user } = useContext(UserContext);

    return (
        <motion.div
        initial={{ x: "-1000%", }}
        animate={{ x: "0%", }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut"
        }} 
        className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl  mb-4 text-gray-900">USER INFORMATION</h2>
            <p className={`text-gray-900 ${inter.className}`}><strong>Name:</strong> {user?.user?.name}</p>
            <p className={`text-gray-900 ${inter.className}`}><strong>Email:</strong> {user?.user?.email}</p>
            <p className={`text-gray-900 ${inter.className}`}><strong>Address:</strong> {user?.user?.address}</p>
            <p className={`text-gray-900 ${inter.className}`}><strong>Phone:</strong> {user?.user?.phone}</p>
        </motion.div>
    );
};

export default UserInfoCard;
