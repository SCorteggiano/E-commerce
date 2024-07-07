"use client"
import { UserContext } from "@/context/userContext";
import Link from "next/link";
import { useContext } from "react";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";


export const roboto = Roboto({
  subsets: ['latin'],
  weight: "100",
})

export default function LandingPage() {

  const {isLogged} = useContext(UserContext);

  return (
        <motion.div
          initial={{ x: "-1000%", }}
          animate={{ x: "0%", }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut"
          }}
          className="h-screen w-screen"
        >       
        <div className="relative h-full w-full">
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
            <h1 className="text-white text-4xl md:text-6xl font-bold">WELCOME TO MY STORE</h1>
            <p className={`text-white text-sm md:text-lg pt-10 ${roboto.className}`}>
              Mi nombre es Stefano Corteggiano, tengo 24 años. Estudie Administración de empresas en UADE y desarrollo Full-Stack con orientación en Frontend.
            </p>
            <p className={`text-white text-sm md:text-lg pt-1 ${roboto.className}`}>
              El Frontend de este E-Commerce lo desarrolle utilizando las siguientes tecnologías, NextJS, TypeScript, ESLint, Tailwind CSS, Flowbite y Framer Motion,
              mientras que el Backend esta desarrollado con Express, PostgreSQL, TypeORM, Corse, Morgan y Dotenv entre otros.
            </p>
            <p className={`text-white text-sm md:text-lg pt-1 ${roboto.className}`}>
              En el Footer podrás encontrar mis redes para contactarme.
            </p>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
          
          </div>

          <div 
          className="absolute top-1/2 right-10 transform -translate-y-1/2">
            {isLogged ? (
              <Link href="/shop" passHref>
                <button className="text-white bg-blue-500 hover:bg-blue-700  py-4 px-8 rounded-lg text-2xl">
                  START
                </button>
              </Link>
            ) : 
            <Link href="/login" passHref>
                <button className="text-white bg-blue-500 hover:bg-blue-700 py-4 px-8 rounded-lg text-2xl">
                  START
                </button>
              </Link>
            }
          </div>
          
        </div>
    </motion.div >
  );
};


