import Image from "next/image";

type MenuItemProps = {
  name: string;
  price: string;
  img: string;
  desc: string;
};

export default function MenuItem({ name, price, img, desc }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <Image src={img} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2">{desc}</p>
        <p className="text-lg font-semibold text-green-600 mt-3">{price}</p>
      </div>
    </div>
  );
}
