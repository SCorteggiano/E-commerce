"use client";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useState, useContext } from "react";
import { validateLogin } from "@/helpers/validation";
import Link from "next/link";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";



const Login = () => {

    // Importo la funcion "login" del contexto global
    const {login} = useContext(UserContext);
    // Almaceno dentro de esta variable el metodo "useRouter"
    const router = useRouter();

    const [loginValues, setLoginValues] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({} as {[key: string]: string});

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)  => {
        const {name, value} = event.target;
        setLoginValues({...loginValues, [name]: value});
        setErrors(validateLogin({...loginValues,[name]: value}));
    }

    const handleSubmit =  async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Utilizo los valores del contexto Local para la funcion "login" del contexto global.
        // Si el login es exitoso la funcion nos devuelve true. 
        const succes = await login(loginValues);

        // Utilizo "router" para redirigir al shop
        if(succes)router.push("/shop")
        // En caso de que las credenciales esten mal envio un alert
        if (!succes)alert("Email or Password Incorrect!")    
    };

    return (
        <div>
            <Card className="max-w-sm">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <h1 className="text-black font-bold text-center text-3xl">LOGIN</h1>
                    <div>
                    <div className="mb-2 block">
                        <Label value="Email" htmlFor="email"/>
                    </div>
                    <TextInput 
                        type="email" 
                        id="email" 
                        name="email"
                        onChange={handleChange}
                        value={loginValues.email}
                        placeholder="example@mail.com" 
                        required 
                    />
                    {errors.mail && (
                            <span className="text-red-500 text-xs mt-1">{errors.mail}</span>
                        )}
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <Label value="Password" htmlFor="password"/>
                    </div>
                    <TextInput 
                        type="password" 
                        id="password"
                        name="password"
                        onChange={handleChange}
                        value={loginValues.password} 
                        required 
                    />
                    {errors.password && (
                            <span className="text-red-500 text-xs mt-1">{errors.password}</span>
                        )}
                    </div>
                    <Link href="/register">
                        <p className="underline decoration-blue-500 text-blue-500 text-xs">
                            Don`t have an account? Register!
                        </p>
                    </Link>
                    <Button 
                        type="submit"
                        disabled={Object.keys(errors).length > 0}
                    >
                        SUBMIT
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default Login;