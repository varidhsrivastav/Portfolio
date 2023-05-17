import React from "react";
import "./TechUsed.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper';
// image
import boot from "./image/find/bootstrap.png";
import cpp from "./image/find/cpp.png";
import csharp from "./image/find/csharp.png";
import css from "./image/find/css-3.png";
import excel from "./image/find/excel.png";
import github from "./image/find/github.png";
import html from "./image/find/html-5.png";
import js from "./image/find/js.png";
import php from "./image/find/php.png";
import python from "./image/find/python.png";
import sql from "./image/find/sql-server.png";
import vb from "./image/find/vb.png";
import word from "./image/find/word.png";
import code from "./image/find/code.png";
import c from "./image/find/c.png";
import react from "./image/find/react.png";
import node from "./image/find/nodejs.png";
import powerpoint from "./image/find/powerpoint.png";


const Tech = () => {
  return (
    <>
      <section className="tech-icon-section">
        <div className="container">
          <h3>Technologies and frameworks I Use</h3>
          <div className="tech-icon-body">
            <Swiper
              spaceBetween={1}
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={true}
              loop={Infinity}
              breakpoints={{
          "@0.00": {
            slidesPerView: 4,
            spaceBetween: 1,
          },
          "@0.75": {
            slidesPerView: 5,
            spaceBetween: 1,
          },
          "@1.00": {
            slidesPerView: 7,
            spaceBetween: 1,
          },
          "@1.50": {
            slidesPerView: 9,
            spaceBetween: 1,
          },
        }}
            >
              <SwiperSlide>
                <img className="tech-icon" src={cpp} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={c} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={python} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={html} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={css} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={js} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={react} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={node} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={sql} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={php} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={js} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={boot} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={csharp} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={vb} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={excel} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={powerpoint} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={github} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={word} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="tech-icon" src={code} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tech;
