"use client";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useState, useContext } from "react";
import { validateRegister } from "@/helpers/validation";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

const Register = () => {
    
    // Importo la funcion "register" del contexto global
    const {register} = useContext(UserContext);
    // Almaceno dentro de esta variable el metodo "useRouter"
    const router = useRouter();

    const [registerValues, setRegisterValues] = useState({
        email: "",
        password: "",
        name: "",
        phone:"",
        address: "",
    });

    const [errors, setErrors] = useState({} as {[ key: string ]: string}); //EL as ES PARA QUE ME PERMITA TRABJAR CON ESTADOS VACIOS

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)  => {
        const {name, value} = event.target;
        setRegisterValues({...registerValues, [name]: value});
        setErrors(validateRegister({...registerValues,[name]: value}));
    }

    const handleSubmit =  async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Utilizo los valores del contexto Local para la funcion "register" del contexto global.
        // Si el registro es exitoso la funcion nos devuelve true. 
        const succes = await register(registerValues);

        // Utilizo "router" para redirigir al shop
        if (succes)router.push("/shop")
        // En caso de que las credenciales esten mal envio un alert
        if (!succes)alert("Problems with Registration!")
    };

    return (
        <div>
            <Card className="max-w-sm" >
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <h1 className="text-black font-bold text-center text-3xl">REGISTER</h1>

                    <div>
                    <div className="mb-2 block">
                        <Label value="Name" htmlFor="name"/>
                        
                    </div>
                    <TextInput 
                        type="text" 
                        id="name" 
                        name="name"
                        onChange={handleChange}
                        value={registerValues.name}
                        required
                    />
                    {errors.name && (
                            <span className="text-red-500 text-xs mt-1">{errors.name}</span>
                        )}
                    </div>

                    <div>
                    <div className="mb-2 block">
                        <Label value="Address" htmlFor="address"/>
                        
                    </div>
                    <TextInput 
                        type="text" 
                        id="address"
                        name="address"
                        onChange={handleChange}
                        value={registerValues.address} 
                        required 
                    />
                    {errors.address && (
                            <span className="text-red-500 text-xs mt-1">{errors.address}</span>
                        )}
                    </div>

                    <div>
                    <div className="mb-2 block">
                        <Label value="Phone" htmlFor="phone"/>
                        
                    </div>
                    <TextInput 
                        type="number" 
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                        value={registerValues.phone} 
                        required 
                    />
                    {errors.phone && (
                            <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
                        )}
                    </div>

                    <div>
                    <div className="mb-2 block">
                        <Label  value="Email" htmlFor="email"/>
                        
                    </div>
                    <TextInput 
                        type="email" 
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={registerValues.email} 
                        placeholder="example@mail.com" 
                        required 
                    />
                    {errors.email && (
                            <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                        )}
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <Label  value="Password" htmlFor="password"/>
                        
                    </div>
                    <TextInput 
                        type="password" 
                        id="password"
                        name="password"
                        onChange={handleChange}
                        value={registerValues.password} 
                        required 
                    />
                    {errors.password && (
                            <span className="text-red-500 text-xs mt-1">{errors.password}</span>
                        )}
                    </div>

                    <Button 
                        type="submit"
                        disabled={Object.keys(errors).length > 0}
                    >
                        SUBMIT
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Register;