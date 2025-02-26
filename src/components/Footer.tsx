// export default function Footer() {
//     return (
//       <footer className="bg-gray-800 text-white p-4 text-center">
//         <p>&copy; {new Date().getFullYear()} Chai Bucket. All rights reserved.</p>
//         <p>
//           📍 Elure Road, Near Highway, Nallajerla | ☎️ 9876543210 | ✉️ info@chaibucket.com
//         </p>
//       </footer>
//     );
//   }

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4 mt-8">
      <p className="text-sm md:text-base">© {new Date().getFullYear()} Chai Bucket. All rights reserved.</p>
    </footer>
  );
}
