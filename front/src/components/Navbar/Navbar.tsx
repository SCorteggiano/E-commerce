"use client"
import Link from "next/link"; 
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, Avatar, Dropdown } from "flowbite-react";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

const MyNavbar = () => {

  const router = useRouter();

  const {isLogged, logout} = useContext(UserContext);

  function handleLogout () {
    logout();
    router.push("/")
}


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
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">MY STORE</span>
      </NavbarBrand>

      <NavbarCollapse className="flex md:order-2 space-x-4">
        <NavbarLink as={Link} href="/shop" className=" text-lg text-black"> SHOP </NavbarLink>
        <NavbarLink as={Link} href="/checkout" className="text-lg text-black"> CART </NavbarLink>

        {isLogged ? ( <div className="flex md:order-2">
                    <Dropdown
                      arrowIcon={false}
                      inline
                      label={
                        <Avatar alt="User settings" img="https://i.pinimg.com/564x/bd/1c/c7/bd1cc751865c67de695216da045579d5.jpg" rounded />
                      }
                    >
                      <Dropdown.Item as={Link} href="/user-dashboard" className="text-black">MY ACCOUNT</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={handleLogout} className="text-black">
                        LOG OUT
                      </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                  </div>
        ): (<Button as={Link} href="/login" className="text-lg"> LOGIN / REGISTER </Button>) }        
      </NavbarCollapse>
    </Navbar>
    )
}

export default MyNavbar;