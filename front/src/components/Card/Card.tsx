import React from "react";
import { IProduct } from "@/interfaces";
import { Card } from "flowbite-react";
import Link from "next/link";

interface CardProps {
    product: Pick<IProduct, 'name' | 'price' | 'description' | 'image'>;
  }
  
const Cards: React.FC<CardProps> = ({product}) => {
  return (
    <Card
      className="max-w-sm"
      imgAlt={product?.name || "image"}
      imgSrc= {product.image} 
    >
      <a>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
        <div>
          <div
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            <Link href="/detail">Details</Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

    

export default Cards;


