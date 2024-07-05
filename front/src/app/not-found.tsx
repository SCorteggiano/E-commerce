import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-8 ">
        <h1 className='text-6xl'>ERROR!</h1>
        <h1 className='text-6xl'> 404 </h1>
        <h1 className='text-6xl'>NOT FOUND</h1>
      </div>

      <Link href="/">
        <button className="inline-block px-6 py-2 text-2xl leading-6 text-center text-white uppercase transition
         bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none">
          GO BACK HOME
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
