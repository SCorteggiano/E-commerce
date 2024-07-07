"use client"
import React from "react";
import { IProduct } from "@/interfaces";
import { Card } from "flowbite-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Cards = ({ product }: { product: IProduct }) => {
  return (
    <motion.div
      initial={{ x: "-1000%" }}
      animate={{ x: "0%" }}
      transition={{
        delay: 0.2,
        duration: 0.6,
        ease: "easeInOut"
      }}
      className="p-2"
    >
      <Card className="h-auto w-96">
        <div className="relative w-full h-80 overflow-hidden">
          <img
            src={product.image}
            alt={product?.name || "image"}
            className="w-full h-full"
          />
        </div>
        <a>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </a>
        <div className="flex items-center justify-between mt-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          <div>
            <Link href={`/detail/${product.id}`}>
              <button
                className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded-lg text-lg">
                DETAILS
              </button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default Cards;


