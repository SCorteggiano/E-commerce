"use client"
import Link from "next/link"; 
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

const MyNavbar = () => {

  const {isLogged} = useContext(UserContext);

    return(
        <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <div className="relative object-contain w-10  h-10 mr-2">
            <Image 
                src="/images/Logo.jpg"
                alt="Logo"
                className="rounded-full"
                fill={true}
                priority={true}   
            />
        </div>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">My Store</span>
      </NavbarBrand>

      <NavbarCollapse className="flex md:order-2 space-x-4">
        <NavbarLink as={Link} href="/shop" > Shop </NavbarLink>
        <NavbarLink as={Link} href="/checkout"> Carrito </NavbarLink>

        {isLogged ? ( <NavbarLink as={Link} href="/user-dashboard"> Profile </NavbarLink>):
                (<NavbarLink as={Link} href="/login"> Login / Register </NavbarLink>) }
        
      </NavbarCollapse>
    </Navbar>
    )
}

export default MyNavbar;