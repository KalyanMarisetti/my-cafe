import MenuItem from "./MenuItem";

type CategoryProps = {
  category: string;
  items: { name: string; price: string; img: string; desc: string }[];
};

export default function MenuCategory({ category, items }: CategoryProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-white mb-4 border-b-2 border-red-400 pb-2">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
