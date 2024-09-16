"use client";
import { Card, Label, TextInput } from "flowbite-react";
import { useState, useContext } from "react";
import { validateLogin } from "@/helpers/validation";
import Link from "next/link";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Login = () => {
  const { login } = useContext(UserContext);
  const router = useRouter();

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({} as { [key: string]: string });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginValues({ ...loginValues, [name]: value });
    setErrors(validateLogin({ ...loginValues, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const succes = await login(loginValues);
    if (succes) router.push("/shop");
    if (!succes) alert("Email or Password Incorrect!");
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
          <h1 className="text-black font-bold text-center text-3xl">LOGIN</h1>
          <div>
            <div className="mb-2 block">
              <Label value="Email" htmlFor="email" />
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
            {errors.email && (
              <span className="text-red-500 text-xs mt-1">{errors.email}</span>
            )}
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
              value={loginValues.password}
              required
            />
            {errors.password && (
              <span className="text-red-500 text-xs mt-1">
                {errors.password}
              </span>
            )}
          </div>
          <Link href="/register">
            <p className="underline decoration-blue-500 text-blue-500 text-xs">
              Don`t have an account? Register!
            </p>
          </Link>
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

export default Login;
