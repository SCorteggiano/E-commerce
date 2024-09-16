"use client";
import { Card, Label, TextInput } from "flowbite-react";
import { useState, useContext } from "react";
import { validateRegister } from "@/helpers/validation";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Register = () => {
  const { register } = useContext(UserContext);
  const router = useRouter();

  const [registerValues, setRegisterValues] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({} as { [key: string]: string }); //EL as ES PARA QUE ME PERMITA TRABJAR CON ESTADOS VACIOS

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterValues({ ...registerValues, [name]: value });
    setErrors(validateRegister({ ...registerValues, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const succes = await register(registerValues);
    if (succes) router.push("/shop");
    if (!succes) alert("Problems with Registration!");
  };

  return (
    <motion.div
      initial={{ x: "-1000%" }}
      animate={{ x: "0%" }}
      transition={{
        delay: 0.2,
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <Card className="max-w-sm w-96">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h1 className="text-black font-bold text-center text-3xl">
            REGISTER
          </h1>

          <div>
            <div className="mb-2 block">
              <Label value="Name" htmlFor="name" />
            </div>
            <TextInput
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={registerValues.name}
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Address" htmlFor="address" />
            </div>
            <TextInput
              type="text"
              id="address"
              name="address"
              onChange={handleChange}
              value={registerValues.address}
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Phone" htmlFor="phone" />
            </div>
            <TextInput
              type="number"
              id="phone"
              name="phone"
              onChange={handleChange}
              value={registerValues.phone}
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Email" htmlFor="email" />
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
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Password" htmlFor="password" />
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
              <span className="text-red-500 text-xs mt-1">
                {errors.password}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded-lg text-lg"
            disabled={Object.keys(errors).length > 0}
          >
            SUBMIT
          </button>
        </form>
      </Card>
    </motion.div>
  );
};

export default Register;
