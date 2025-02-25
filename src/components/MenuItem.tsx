import Image from "next/image";

type MenuItemProps = {
  name: string;
  price: string;
  image: string;
};

export default function MenuItem({ name, price, image }: MenuItemProps) {
  return (
    // <div className="border rounded-lg p-4 shadow-lg">
    //   <div className="h-[75%] w-full border rounded-md flex justify-center items-center">
    //     <Image  src={image} alt="Food item" width={150} height={150} objectFit="contain" className="rounded-md" />
    //     {/* <img src="paris.jpg" alt="Paris" width="400" height="300"> */}
    //     {/* <Image src={image} alt="Food item" layout="fill" objectFit="cover" /> */}


    //   </div>
    //   <div className="h-[25%]">
    //     <h2 className="text-xl font-semibold mt-1">{name}</h2>
    //     <p className="text-lg font-medium text-green-600">{price}</p>
    //   </div>
    // </div>


<div className="border rounded-lg px-10 md:px-2 py-2 shadow-lg min-h-[300px]">
  <div className="h-[75%] w-full border rounded-md flex justify-center items-center overflow-hidden">
    <Image  
      src={image}
      alt="Cafe Image" 
      width={150} 
      height={150} 
      className="rounded-md"
      priority
      style={{ width: "auto", height: "auto", objectFit: "contain" }} // Maintain aspect ratio
    />
  </div>
  <div className="h-[25%]">
    <h2 className="text-xl font-semibold mt-1">{name}</h2>
    <p className="text-lg font-medium text-green-600">{price}</p>
  </div>
</div>

  );
}
