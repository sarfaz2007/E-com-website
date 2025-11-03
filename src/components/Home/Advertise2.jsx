import React from "react";

const Advertise2 = () => {
  return (
    <div className="max-w-[1170px] h-[500px] bg-black mx-auto py-10 px-10 flex justify-between items-center">
      {/* Left side */}
      <div className="flex flex-col gap-6">
        <p className="text-[#00FF66] font-semibold leading-[20px]">Categories</p>
        <p className="text-white font-semibold text-[48px] leading-[60px]">
          Enhance Your <br /> Music Experience
        </p>

        {/* Countdown timer */}
        <div className="flex gap-5">
          {[
            { value: "23", label: "Hours" },
            { value: "05", label: "Days" },
            { value: "59", label: "Minutes" },
            { value: "35", label: "Seconds" },
          ].map((item, index) => (
            <div
              key={index}
              className="h-[62px] w-[62px] bg-white rounded-full flex flex-col justify-center items-center"
            >
              <p className="text-black font-bold text-[18px] leading-none">{item.value}</p>
              <p className="text-[10px] text-black">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-5 w-[172px] bg-[#00FF66] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#00cc55] transition">
          Buy Now!
        </button>
      </div>

      {/* Right side image */}
      <div>
        <img
          src="src/assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
          alt="Speaker"
          className="w-[500px]"
        />
      </div>
    </div>
  );
};

export default Advertise2;
