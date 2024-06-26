"use client";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { validateLogin } from "@/helpers/validation";
import Link from "next/link";

const Login = () => {

    const [loginValues, setLoginValues] = useState({
        mail: "",
        password: "",
    });

    const [errors, setErrors] = useState({} as {[key: string]: string});

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)  => {
        const {name, value} = event.target;
        setLoginValues({...loginValues, [name]: value});
        setErrors(validateLogin({...loginValues,[name]: value}));
    }

    const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        //AQUI UNA FUNCION QUE ENVIE LA INFORMACION AL BACKEND DB
        alert(JSON.stringify(loginValues));
    }

    return (
        <div>
            <Card className="max-w-sm">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <h1 className="text-black font-bold text-center text-3xl">Login</h1>
                    <div>
                    <div className="mb-2 block">
                        <Label value="Email" />
                    </div>
                    <TextInput 
                        type="email" 
                        id="email" 
                        name="email"
                        onChange={handleChange}
                        placeholder="example@mail.com" 
                        required 
                    />
                    {errors.mail && (
                            <span className="text-red-500 text-xs mt-1">{errors.mail}</span>
                        )}
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <Label value="Password" />
                    </div>
                    <TextInput 
                        type="password" 
                        id="password"
                        name="password"
                        onChange={handleChange} 
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
                        Submit
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default Login;