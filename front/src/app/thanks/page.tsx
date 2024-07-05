import Link from 'next/link';

const Thanks = () => {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-8 ">
        <h1 className='text-6xl'> THANKS </h1>
        <h1 className='text-6xl'> FOR YOUR </h1>
        <h1 className='text-6xl'> PURCHASE!</h1>
      </div>

      <Link href="/shop">
        <button className="inline-block px-6 py-2 text-2xl leading-6 text-center text-white uppercase transition
         bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none">
          CONTINUE BUYING
        </button>
      </Link>
    </div>
    )
}

export default Thanks;