// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const categories = [
//   { id: 1, name: "Category 1", img: "/pop-1.png" },
//   { id: 2, name: "Category 2", img: "/pop-2.png" },
//   { id: 3, name: "Category 3", img: "/pop-3.png" },
// ];

// export default function PopularCategories() {
//   return (
//     <div className="flex justify-center items-center py-10">
//       {/* Main container */}
//       <div className="rounded-3xl bg-white/60 backdrop-blur-md w-[90%] max-w-[1200px] h-auto flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 p-4 md:p-8">
//         {categories.map((cat, i) => (
//           <motion.div
//             key={cat.id}
//             className="relative group overflow-hidden rounded-2xl w-[80%] h-[300px] sm:w-[250px] sm:h-[400px] md:w-[340px] md:h-[500px] bg-white/20 backdrop-blur-sm shadow-none"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//           >
//             {/* Image */}
//             <Image
//               src={cat.img}
//               alt={cat.name}
//               width={300}
//               height={500}
//               className="object-cover w-full h-full"
//             />

//             {/* Gradient Overlay */}
//             <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/50 via-black/20 to-transparent translate-y-full group-hover:translate-y-0 md:group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-center pb-4">
//               <span className="text-white text-lg font-semibold drop-shadow-md">
//                 {cat.name}
//               </span>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  { id: 1, name: "Category 1", img: "/pop-1.png" },
  { id: 2, name: "Category 2", img: "/pop-2.png" },
  { id: 3, name: "Category 3", img: "/pop-3.png" },
];

export default function PopularCategories() {
  return (
    <div className="flex justify-center items-center py-10">
      {/* Main container */}
      <div
        className="rounded-3xl bg-white/60 backdrop-blur-md w-[90%] max-w-[1200px] h-auto 
                   flex gap-6 md:gap-10 p-4 md:p-8 overflow-x-auto scrollbar-hide"
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            className="relative group overflow-hidden rounded-2xl 
                       flex-shrink-0 w-[220px] h-[300px] sm:w-[250px] sm:h-[400px] 
                       md:w-[340px] md:h-[500px] bg-white/20 backdrop-blur-sm shadow-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Image */}
            <Image
              src={cat.img}
              alt={cat.name}
              width={300}
              height={500}
              className="object-cover w-full h-full"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute bottom-0 left-0 w-full h-[30%] 
                         bg-gradient-to-t from-black/50 via-black/20 to-transparent 
                         translate-y-full group-hover:translate-y-0 
                         transition-transform duration-300 
                         flex items-end justify-center pb-4"
            >
              <span className="text-white text-lg font-semibold drop-shadow-md">
                {cat.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
