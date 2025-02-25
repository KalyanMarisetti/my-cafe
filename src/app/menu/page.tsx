import MenuItem from "@/components/MenuItem";

const menuItems = [
  { name: "Idli", price: "₹30", image: "/images/cafe-img-1.jpg" },
  { name: "Bonda", price: "₹25", image: "/images/cafe-img-2.jpg" },
  { name: "Poori", price: "₹40", image: "/images/cafe-img-3.jpg" },
  { name: "Dosa", price: "₹50", image: "/images/dosa.jpg" },
  { name: "Biryani", price: "₹120", image: "/images/cafe-img-4.jpg" },
  { name: "Idli", price: "₹30", image: "/images/cafe-img-5.jpg" },
  { name: "Bonda", price: "₹25", image: "/images/cafe-img-6.jpg" },
  { name: "Poori", price: "₹40", image: "/images/cafe-img-1.jpg" },
  { name: "Dosa", price: "₹50", image: "/images/cafe-img-2.jpg" },
  { name: "Biryani", price: "₹120", image: "/images/cafe-img-4.jpg" },
];


// const menuData = [
//   {
//     category: 'Entrée',
//     items: [
//       {
//         name: 'Bruschetta',
//         price: '$12.90',
//         img: 'https://dummyimage.com/600x400/000/fff',
//         desc: 'Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus, congue eu mauris nec, pretium tincidunt nulla.',
//       },
//       {
//         name: 'Bruschetta',
//         price: '$12.90',
//         img: 'https://dummyimage.com/600x400/ccc/fff',
//         desc: 'Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus, congue eu mauris nec, pretium tincidunt nulla.',
//       },
//     ],
//   },
//   {
//     category: 'Main Course',
//     items: [
//       {
//         name: 'Bruschetta',
//         price: '$12.90',
//         img: 'https://dummyimage.com/600x400/ccc/fff',
//         desc: 'Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus, congue eu mauris nec, pretium tincidunt nulla.',
//       },
//       {
//         name: 'Bruschetta',
//         price: '$12.90',
//         img: 'https://dummyimage.com/600x400/000/fff',
//         desc: 'Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus, congue eu mauris nec, pretium tincidunt nulla.',
//       },
//     ],
//   },
// ];

export default function Menu() {
  return (
    <div className="p-6 bg-black">
      <h1 className="text-3xl font-bold text-center text-red-500">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>

  );
}
