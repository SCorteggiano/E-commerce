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
    orders?: IOrderResponse[],
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

interface IOrderResponse {
    id: number,
    status: string,
    date: string,
    user: IUser,
    products: IProduct [],
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
    checkoutOK: () => void;
}

 interface ICarritoProviderProps {
    children: React.ReactNode;
}

interface IUserContextType {
    user: Partial <ILoginUserResponse> | null,
    setUser: React.Dispatch<React.SetStateAction<Partial<ILoginUserResponse> | null>>,
    isLogged: boolean,
    setIsLogged: (isLogged: boolean) => void,
    login: (credentials: ILoginUser) => Promise<boolean>,
    register: (user: Omit <IUser, "id">) => Promise<boolean>,
    getOrders: () => void,
    orders: IOrderResponse [] | [],
    logout: () => void, 
}


export type {
    IRegisterUser,
    IRegisterUserResponse,
    ILoginUser,
    IUser,
    ILoginUserResponse,
    ICreateOrder,
    IOrderResponse,
    IProduct,
    IProductProps,
    IProductListProps,
    ICarritoItemProps,
    ICarritoContextType,
    ICartItem,
    ICarritoProviderProps,
    IUserContextType   
}