import { mainBannerData } from "../data/dummyData";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
function Advertise() {
    console.log(mainBannerData)
    return (
        <>
            <div className="flex">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {mainBannerData.map((item) => (
                        <SwiperSlide>
                            <div className="w-full h-60 bg-amber-400">
                                <img src={item.image} alt="tedrt6s" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
            </div>
        </>

    )
}

export default Advertise
