import { menuData, menuData2, } from "@/data/menuData";
import MenuCategory from "@/components/MenuCategory";

export default function Menu() {
  return (
    <div className="p-2 bg-black min-h-screen">
      <div className="border border-white rounded-md flex flex-col lg:flex-row justify-between m-1 px-3 py-2">
        <div className="w-full lg:w-1/2">
          {menuData.map((category, index) => (
            <MenuCategory key={index} {...category} />
          ))}
        </div>
        <div className="w-full lg:w-1/2">
          {menuData2.map((category, index) => (
            <MenuCategory key={index} {...category} />
          ))}
        </div>
      </div>
      {/* <div className="border border-white rounded-md flex flex-col lg:flex-row justify-between m-2 p-3 mt-2 print:page-break-before">
        <div className="w-full lg:w-1/2">
          {menuData3.map((category, index) => (
            <MenuCategory key={index} {...category} />
          ))}
        </div>
        <div className="w-full lg:w-1/2">
          {menuData4.map((category, index) => (
            <MenuCategory key={index} {...category} />
          ))}
        </div>
      </div> */}
      {/* <div className="border border-white rounded-md flex flex-col lg:flex-row justify-between m-2 p-3 mt-2 page-break" >
        <div className="w-full lg:w-1/2">
          {menuData5.map((category, index) => (
            <MenuCategory key={index} {...category} />
          ))}
        </div>
        <div className="w-full lg:w-1/2">
          {menuData6.map((category, index) => (
            <MenuCategory key={index} {...category} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
