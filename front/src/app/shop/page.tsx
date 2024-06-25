import React from "react";
import Cards from "@/components/Card/Card";
import products from "../../../public/data";

const Shop = () => {
    return (
        <div>
            <div className="grid grid-cols-1 px-4 gap-4 md:grid-cols-3 lg:grid-cols-3">
                {products.map((product) => (
                    <Cards
                    key = {product.id}
                    product= {{
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        image: product.image,
                    }}/>
                ))}
                
            </div>
        </div>
    )
}

export default Shop;