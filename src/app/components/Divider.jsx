export default function Divider() {
  return (
<div className="flex items-center justify-center w-full px-4 mt-4 sm:mt-6 md:mt-8">

      {/* Left Line */}
      <div className="flex-1 bg-gradient-to-r from-transparent via-gray-800 to-gray-800 max-w-[30%] min-w-[50px] h-[2px] sm:h-[2.5px] md:h-[3px]" />

      {/* Center Text */}
      <span
        className="mx-4 text-black text-center font-semibold text-sm sm:text-base md:text-xl"
        style={{
          fontFamily: "Quicksand",
          fontSize: "clamp(12px, 3.5vw, 24px)",
          lineHeight: "100%",
        }}
      >
        Category
      </span>

      {/* Right Line */}
      <div className="flex-1 bg-gradient-to-l from-transparent via-gray-800 to-gray-800 max-w-[30%] min-w-[50px] h-[2px] sm:h-[2.5px] md:h-[3px]" />
    </div>
  );
}
