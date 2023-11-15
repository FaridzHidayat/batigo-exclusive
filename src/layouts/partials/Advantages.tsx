"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial } from "@/types";
import Image from "next/image";
import "swiper/css";

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

const Advantages = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-6">
                <h2
                  dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
                  className="mb-4"
                />      
              </div>
              <div className="lg:flex justify-between">
                  {data.frontmatter.testimonials.map(
                    (item: Testimonial, index: number) => (                      
                        <div className="bg-theme-light px-7 py-10 dark:bg-darkmode-theme-light mr-1 ml-1" key={index}>                                                  
                          <div className="mt-5 flex justify-center mb-2">                            
                            <Image
                              width={150}
                              height={150}
                              src={item.avatar}
                              alt=""
                              key={index}                                                         
                            />                                                        
                          </div>
                          <blockquote
                            className="mt-8"
                            dangerouslySetInnerHTML={markdownify(item.content)}
                          />
                        </div>                      
                    ),
                  )}                
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Advantages;
