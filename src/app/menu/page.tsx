import { menuData } from "@/data/menuData";
import MenuCategory from "@/components/MenuCategory";

export default function Menu() {
  return (
    // via-[#F8E5D7]
    // bg-linear-to-r from-cyan-500 to-blue-500
    // from-[#233A4E] to-[#9C6DB0]
    <div className="p-6 bg-black min-h-screen border border-black">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Our Menu</h1>
      {menuData.map((category, index) => (
        <MenuCategory key={index} {...category} />
      ))}
    </div>
  );
}
