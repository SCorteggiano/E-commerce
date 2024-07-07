"use client"
import Link from 'next/link';
import { motion } from "framer-motion";

const NotFoundComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <motion.div
        initial={{ x: "-1000%" }}
        animate={{ x: "0%" }}
        transition={{
        delay: 0.2,
        duration: 0.6,
        ease: "easeInOut"
        }} 
        className="mb-8 ">
        <h1 className='text-6xl'>ERROR!</h1>
        <h1 className='text-6xl'> 404 </h1>
        <h1 className='text-6xl'>NOT FOUND</h1>
      </motion.div>
      
      <motion.div
        initial={{ x: "1000%" }}
        animate={{ x: "0%" }}
        transition={{
        delay: 0.2,
        duration: 0.6,
        ease: "easeInOut"
        }} 
      >
        <Link href="/">
            <button className="inline-block px-6 py-2 text-2xl leading-6 text-center text-white uppercase transition
            bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none">
            GO BACK HOME
            </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFoundComponent;
