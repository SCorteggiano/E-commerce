import React from "react";
import Cards from "@/components/Card/Card";
import { IProduct } from "@/interfaces";

 export async function fetchProducts ():Promise<IProduct[]> {
    const response = await fetch ("http://localhost:5000/products")
    const products = await response.json();
    return products;
}

async function Shop() {
    const products = await fetchProducts();
    
    return (
        <div>
            <div className="grid grid-cols-1 px-4 gap-4 md:grid-cols-3 lg:grid-cols-3">
                
                {products.map((product: IProduct) => (
                    <Cards
                    key = {product.id}
                    product= {{
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        image: product.image,
                        stock: product.stock,
                        categoryId: product.categoryId
                    }}/>
                ))}
            </div>
        </div>
    )
}

export default Shop;