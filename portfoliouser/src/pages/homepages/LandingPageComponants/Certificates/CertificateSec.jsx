import React from 'react';
import "./CertificateSec.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import c1 from "./image/c1.jpg";
import c2 from "./image/c2.jpg";
import c3 from "./image/c3.jpg";
import c4 from "./image/c4.jpg";
import c5 from "./image/c5.jpg";
import c6 from "./image/c6.jpg";

const CertificateSec = () => {
  return (
    <div>
      <section className="certificateh">
                <div className="container">
                    <h1>Certificates</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, culpa!</p>
                    <div className="certificateh flex-row">
                    <Swiper
                            spaceBetween={5}
                            slidesPerView={1}
                            modules={[Autoplay, Pagination, Navigation, ]}
                            autoplay={true}
                            loop={Infinity}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            scrollbar={{ draggable: true }}
                             onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide><img src={c1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={c2} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={c3} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={c4} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={c5} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={c6} alt="" /></SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="all-cer">
                        <a href='/' className="btn mr-lg-2 mx-au custom-btn" download>All Certificate</a>
                    </div>
                    </div>

            </section>
    </div>
  )
}

export default CertificateSec
