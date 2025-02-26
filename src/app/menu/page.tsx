import { menuData } from "@/data/menuData";
import MenuCategory from "@/components/MenuCategory";

export default function Menu() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Our Menu</h1>
      {menuData.map((category, index) => (
        <MenuCategory key={index} {...category} />
      ))}
    </div>
  );
}
