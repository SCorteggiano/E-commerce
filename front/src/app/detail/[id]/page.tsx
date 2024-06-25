import products from "../../../../public/data";
import { Card } from "flowbite-react";

const Detail = ({params}: {params:{id:string}}) => {

    const productId: string = params.id 
    const product = products.find((product) => product.id === Number(params.id));

    return (
        <div>
            <Card
                className="max-w-sm"
                imgAlt= {product?.name || "image"}
                imgSrc= {product?.image} 
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product?.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {product?.description}
                </p>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${product?.price}</span>
                <a
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                Add to cart
                </a>
            </Card>

        </div>
    )
}

export default Detail;

