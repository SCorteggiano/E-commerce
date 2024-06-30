interface IRegisterUser {
    name: string,
    email: string,
    password: string,
    address: string,
    phone: string,
}

interface ICredentials {
    password: string,
    id: number,
}

interface IRegisterUserResponse {
    name: string,
    email: string,
    password: string,
    address: string,
    phone: string,
    role: string,
    credential: ICredentials,
}

interface ILoginUser {
    email: string,
    password: string,
}

interface IUser {
    id: number,
    name: string,
    email: string,
    address: string,
    phone: string,
    password: string,
    orders?: number[],
}

interface ILoginUserResponse{
    login: boolean,
    user: Partial <IUser> | null,
    token: string,
}

interface ICreateOrder {
    userId: number,
    products: number[],
}

interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    categoryId: number,
}

interface IProductProps {
    product: IProduct,
}

interface IProductListProps {
    products: IProduct[],
}

interface ICarritoItemProps {
    product: IProduct,
    remove?: () => void,
}

 interface ICartItem extends IProduct {
    quantity: number;
}


 interface ICarritoContextType {
    carritoItems: ICartItem[];
    addToCarrito: (productId: number) => void;
    removeFromCarrito: (productId: number) => void;
    total: number;
}

 interface ICarritoProviderProps {
    children: React.ReactNode;
}


export type {
    IRegisterUser,
    IRegisterUserResponse,
    ILoginUser,
    IUser,
    ILoginUserResponse,
    ICreateOrder,
    IProduct,
    IProductProps,
    IProductListProps,
    ICarritoItemProps,
    ICarritoContextType,
    ICartItem,
    ICarritoProviderProps   
}