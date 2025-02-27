// import MenuItem from "./MenuItem";

type CategoryProps = {
  name: string;
  items: { name: string; price: number; }[];
};

export default function MenuCategory({ name, items }: CategoryProps) {
  return (
    // <div className="mb-8">
    //   <h2 className="text-3xl font-semibold text-white mb-4 border-b-2 border-red-400 pb-2">{category}</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {items.map((item, index) => (
    //       <MenuItem key={index} {...item} />
    //     ))}
    //   </div>
    // </div>

    <div className="m-5">
      <div className="flex justify-center">
        <h1 className="bg-yellow-600 px-10 rounded-3xl text-xl font-semibold text-white mb-3">{name}</h1>
      </div>
      {
        items.map((item, index) => (
          <div key={index} className="flex justify-between m-1">
            <h2 className="mr-5 text-white">{item.name}</h2>
            <p className="text-yellow-600">{item.price}</p>
            {/* <img src={item.img} alt={item.name} />
                <p>{item.desc}</p> */}
          </div>
        ))
      }
    </div>
  );
}
