"use client";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { validateRegister } from "@/helpers/validation";

const Register = () => {

    const [registerValues, setRegisterValues] = useState({
        mail: "",
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

        //Fetch al Backend
        const response = await fetch("http://localhost:5000/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerValues),
        });
        const data = await response.json();
        localStorage.setItem("token", data.token);
    };

    return (
        <div>
            <Card className="max-w-sm" >
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <h1 className="text-black font-bold text-center text-3xl">Register</h1>

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
                        id="mail"
                        name="mail"
                        onChange={handleChange}
                        value={registerValues.mail} 
                        placeholder="example@mail.com" 
                        required 
                    />
                    {errors.mail && (
                            <span className="text-red-500 text-xs mt-1">{errors.mail}</span>
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
                        Submit
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Register;