import { useEffect, useState } from "react";
import { mainBannerData } from "../data/dummyData";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
function Advertise() {
    console.log(mainBannerData)
    return (
        <>
            <div className="flex w-full h-full">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {mainBannerData.map((item) => (
                        <SwiperSlide>
                            <div className="relative">
                                <img src={item.image} alt="tedrt6s" className="w-full "/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
            </div>
        </>

    )
}

export default Advertise




// const MainBanner = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev === mainBannerData.length - 1 ? 0 : prev + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? mainBannerData.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === mainBannerData.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden rounded-2xl shadow-lg mt-8">
//       {/* Slides container */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//           width: `${mainBannerData.length * 100}%`,
//         }}
//       >
//         {mainBannerData.map((banner) => (
//           <div
//             key={banner.id}
//             className="w-full flex-shrink-0 relative h-[400px]"
//             style={{ flex: "0 0 100%" }}
//           >
//             <img
//               src={banner.image}
//               alt={banner.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 text-white">
//               <h2 className="text-3xl font-bold">{banner.title}</h2>
//               <p className="text-lg mb-4">{banner.subtitle}</p>
//               <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold">
//                 {banner.cta} →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Left arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
//       >
//         ◀
//       </button>

//       {/* Right arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
//       >
//         ▶
//       </button>

//       {/* Dots indicator */}
//       <div className="absolute bottom-4 w-full flex justify-center gap-2">
//         {mainBannerData.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentIndex(i)}
//             className={`w-3 h-3 rounded-full ${
//               i === currentIndex ? "bg-white" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainBanner;