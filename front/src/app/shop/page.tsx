import React from "react";
import Card from "@/components/Card";
import { IProduct } from "@/interfaces";

const products: IProduct []= [
    {
        "id": 1,
        "name": "iPhone 11",
        "description": "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
        "price": 699,
        "stock": 10,
        "image": "https://mac-center.com/cdn/shop/files/194252099094-8_823x.jpg?v=1709666073",
        "categoryId": 1
      },
      {
        "id": 2,
        "name": "MacBook Air",
        "description": "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
        "price": 999,
        "stock": 10,
        "image": "https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg",
        "categoryId": 2
      },
      {
        "id": 3,
        "name": "iPad Pro",
        "description": "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
        "price": 799,
        "stock": 10,
        "image": "https://ar.oneclickstore.com/wp-content/uploads/2023/06/iPad_Pro_Wi-Fi_11_in_4th_generation_Silver_PDP_Image_Position-1b_MXLA.jpg",
        "categoryId": 3
      }
];


const Shop: React.FC = () => {
    return (
        <div>
            <h1>Esta es mi pagina de compras</h1>
            {products.map((product) => (
                <Card
                key = {product.categoryId}
                 product= {{
                    name: product.name,
                    price: product.price,
                    description: product.description
                }}/>
            ))}
        </div>
    )
}

export default Shop;