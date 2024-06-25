"use client";
import { Button, Card, Label, TextInput } from "flowbite-react";

const Register = () => {
    return (
        <div>
            <Card className="max-w-sm">
                <form className="flex flex-col gap-4">
                    <h1 className="text-black font-bold text-center text-3xl">Register</h1>

                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Name" />
                    </div>
                    <TextInput id="name" type="text" required />
                    </div>

                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="address" value="Address" />
                    </div>
                    <TextInput id="address" type="text" required />
                    </div>

                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="phone" value="Phone" />
                    </div>
                    <TextInput id="phone" type="number" required />
                    </div>

                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="example@mail.com" required />
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                    </div>

                    <Button type="submit">Submit</Button>

                </form>
            </Card>
        </div>
    );
};

export default Register;