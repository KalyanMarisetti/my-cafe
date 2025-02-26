import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-[url('/images/cafe-img-5.jpg')]">
      <div className="p-6 rounded-lg max-w-lg md:max-w-2xl lg:max-w-4xl">
        {/* <h1 className="text-4xl md:text-6xl font-bold text-yellow-600">Welcome to Chai Bucket</h1> */}
        <div className="w-max">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 md:pr-10 text-2xl md:text-5xl text-yellow-600 font-bold">
            Welcome to Chai Bucket
          </h1>
        </div>
        <p className="text-base md:text-xl text-black mt-4">
          The best place for chai & delicious food!
        </p>
        <Link href="/menu" className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
          View Menu
        </Link>
      </div>
    </section>
  );
}
