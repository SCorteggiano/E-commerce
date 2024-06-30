import Carrito from "@/components/Carrito/Carrito"; 

//{!products ? (<h1>No hay productos en el carrito</h1>) :
//   (<h1>Aqui hay que mapear la info de productos de carrito EL COMPONENTE CARRITO</h1>)}

const Checkout = () => {

    const products: string [] = [
        
    ];

    return(
        <div>
            <Carrito/>            
        </div>
    )
}

export default Checkout;