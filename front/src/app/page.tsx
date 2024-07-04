"use client"
import { UserContext } from "@/context/userContext";
import Link from "next/link";
import { useContext } from "react";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ['latin'],
  weight: "100",
})

export default function LandingPage() {

  const {isLogged} = useContext(UserContext);

  return (
    <div className="h-screen w-screen  ">
      <div className="relative h-full w-full">

        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <h1 className="text-white text-4xl md:text-6xl font-bold">WELCOME TO MY STORE</h1>
          <p className={`text-white text-sm md:text-lg pt-10 ${roboto.className}`}>
          Mi nombre es Stefano Corteggiano, tengo 24 años. Estudie Administracion de empresas en UADE. Este es mi primer E-Commerce. Utilice las 
          siguientes tegnologias para construirlo, NextJS, TypeScript, ESLint, Tailwind CSS, Flowbite, Framer Motion,
          </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          
        </div>

        <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
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
    </div>
  );
};


