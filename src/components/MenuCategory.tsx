type CategoryProps = {
  name: string;
  items: { name: string; price: number; star: boolean; }[];
};

export default function MenuCategory({ name, items }: CategoryProps) {
  return (
    <div className="mt-4">
      <div className="flex justify-center">
        <h1 className="bg-yellow-600 px-5 py-2 rounded-3xl text-lg md:text-xl font-semibold text-white mb-2 text-center">
          {name}
        </h1>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between m-1 text-sm md:text-base border my-2 p-2">
          <div className="flex items-center">
            <h2 className="mr-2 text-white">{item.name}</h2>
            {
              item.star && (
                <button className="rounded-md border border-transparent p-0.5 text-center text-sm transition-all text-red-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                </button>
              )
            }
          </div>
          <p className="text-yellow-600 font-semibold">{item.price}</p>
        </div>
      ))}
    </div>
  );
}
