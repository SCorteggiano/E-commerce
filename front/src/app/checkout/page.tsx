


const Checkout = () => {

    const products: string [] = [
        
    ];

    return(
        <div>
            <div>
                <span>PRODUCT</span>
            </div>
            <div>
                <span>PRICE</span>
            </div>
            <div>
                <span>REMOVE</span>
            </div>

            {!products ? (<h1>No hay productos en el carrito</h1>) :
            (<h1>Aqui hay que mapear la info de productos de carrito EL COMPONENTE CARRITO</h1>)}
        </div>
    )
}

export default Checkout;