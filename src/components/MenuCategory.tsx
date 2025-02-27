type CategoryProps = {
  name: string;
  items: { name: string; price: number; }[];
};

export default function MenuCategory({ name, items }: CategoryProps) {
  return (
    <div className="m-3">
      <div className="flex justify-center">
        <h1 className="bg-yellow-600 px-5 py-2 rounded-3xl text-lg md:text-xl font-semibold text-white mb-3 text-center">
          {name}
        </h1>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between m-1 text-sm md:text-base">
          <h2 className="mr-5 text-white">{item.name}</h2>
          <p className="text-yellow-600 font-semibold">{item.price}</p>
        </div>
      ))}
    </div>
  );
}
