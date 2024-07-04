import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="mb-8 ">
        <Image src="https://i.pinimg.com/564x/1a/c8/1a/1ac81aed196c0ca212e6f307b9bdabfa.jpg" alt="Página no encontrada" width={450} height={450} />
      </div>
      <Link href="/">
        <button className="inline-block px-6 py-2 text-sm font-medium leading-6 text-center text-white uppercase transition
         bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none">
          Go back to Home
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
