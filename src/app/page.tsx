// 'use client'

// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push('/menu');
//   }

//   return (
//     // from-indigo-500 via-purple-500 to-pink-500
//     // from-[#DF643F] via-[#A73728] to-[#3D1F1D]
//     // from-[#1D3C26] via-[#578F53] to-[#EADFCE]
//     // from-[#446063] via-[#CCD4DD] to-[#141E1D]
//     // from-[#9A7C65] via-[#9A7C65] to-[#9A7C65]
//     // from-[#F8E5D7] via-[#F8E5D7] to-[#F8E5D7]
//     // bg-[#A19F97]
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#060506]">
//       {/* <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">Hello World</h1> */}
//       {/* <h1 className="text-4xl font-bold">Welcome to Chai Bucket</h1> */}
//       <div className="w-max">
//         <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 md:pr-10 text-xl md:text-5xl text-white font-bold">
//           Welcome to Chai Bucket
//         </h1>
//       </div>
//       {/* <p className="text-sm md:text-lg mt-2">Enjoy our delicious menu!</p> */}
//       {/* <button className="bg-white text-white">click</button> */}
//       <button onClick={handleClick} className="relative mt-5 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
//         <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
//           View Menu
//         </span>
//       </button>
//     </div>
//   );
// }



import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
}
