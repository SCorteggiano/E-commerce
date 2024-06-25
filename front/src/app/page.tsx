import Link from "next/link";

export default function LandingPage() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center "
      style={{ backgroundImage: 'url(/images/fondoEcommerce.jpg)' }}
    >
      <div className="relative h-full w-full bg-black bg-opacity-50">
        {/* Título grande centrado en la parte superior */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to My Store</h1>
        </div>
        {/* Contenedor del Botón */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
          <Link href="/shop" passHref>
            <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-4 px-8 rounded-lg text-2xl">
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


