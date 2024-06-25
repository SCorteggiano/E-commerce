import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
  } from "flowbite-react";
  import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const MyFooter = () => {
    return(
        <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              src="/images/Logo.jpg"
              alt="Logo"
              name="MyStore"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright by="MyStore™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.instagram.com/stefacorte/" icon={BsInstagram} />
            <FooterIcon href="https://www.linkedin.com/in/stefano-corteggiano-a68978311/" icon={BsLinkedin} />
            <FooterIcon href="https://github.com/SCorteggiano" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
    )
}

export default MyFooter;