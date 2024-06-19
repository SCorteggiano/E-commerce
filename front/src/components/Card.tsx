import React from "react";
import { IProduct } from "@/interfaces";

interface CardProps {
    product: Pick<IProduct, 'name' | 'price' | 'description' >;
  }
  
const Card: React.FC<CardProps> = ({product}) => {
    return(
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h1>{product.price}$</h1>
        </div>
    )
}

export default Card;


