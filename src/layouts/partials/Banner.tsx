"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial } from "@/types";
import DynamicIcon from "@/helpers/DynamicIcon";
import Image from "next/image";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    description?: string;
    testimonials: Array<Testimonial>;
  };
}

const Banner = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="section">
          <div className="container">                      
              <div className="col-12" style={{backfaceVisibility: "hidden"}}>
                <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true }}
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={24}
                  breakpoints={{
                    768: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {data.frontmatter.testimonials.map(
                    (item: Testimonial, index: number) => (
                      <SwiperSlide key={index}>                                               
                        <img
                          src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                          className="block w-full"
                          alt="..." />    
                        <div
                          className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                          <p className="mb-5">
                            Some representative placeholder content for the second slide.
                          </p>
                          <a href="/catalog" className="py-2 px-8 rounded-lg hover:bg-blue-800 bg-gray-800 text-white">
                            <DynamicIcon className="inline-block" icon="FaCartShopping" /> BELI SEKARANG
                          </a>
                        </div>                                                             
                      </SwiperSlide>
                    ),
                  )}
                </Swiper>
              </div>            
          </div>
        </section>
      )}
    </>
  );
};

export default Banner;
