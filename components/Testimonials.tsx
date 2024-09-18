"use client";

import { useState } from "react";
import { testimonials } from "@/data";
import { ImQuotesLeft } from "react-icons/im";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const chevronStyles = `
  flex justify-center items-center
  bg-white rounded-full p-4 text-black
  shadow-md text-black/60 z-10`;

  const handleNext = () => {
    if (startIndex + 4 < testimonials.length) {
      setStartIndex(startIndex + 4);
    }
  };

  const handlePrev = () => {
    if (startIndex - 4 >= 0) {
      setStartIndex(startIndex - 4);
    }
  };

  const displayedTestimonials = testimonials.slice(startIndex, startIndex + 4);

  return (
    <div className="bg-accent w-[100vw] flex justify-center items-center px-4 py-36 
    relative overflow-hidden">
      <div className="w-[600px] h-[600px] bg-protonred rounded-full blur-[300px]
      absolute -left-[35px]"></div>
      <div className="max-w-max flex flex-col justify-center items-center gap-y-12 w-full">
        <h3 className="dynamic-subheading">Testimonials</h3>
        <div className="grid grid-cols-2 gap-6 max-lg:flex max-lg:flex-col max-lg:gap-y-2">
          {displayedTestimonials.map((testimonial, index) => (
            <div 
            key={index}
            className="bg-white rounded-lg p-6 drop-shadow h-[300px]
            flex flex-col gap-y-4">
              <div className="flex justify-start items-center gap-x-4">
                <div className="bg-black/10 rounded-full text-white p-4">
                  <ImQuotesLeft size={30} />
                </div>
                <div className="">
                  <p className="font-semibold">{testimonial.person}</p>
                  <p className="text-gray-800">SEO of Apple</p>
                </div>
              </div>
              <p className="text-content text-lg">{testimonial.quote}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <button className={chevronStyles} onClick={handlePrev} disabled={startIndex === 0}>
            <FaChevronLeft size={25} />
          </button>
          <button className={chevronStyles} onClick={handleNext} disabled={startIndex + 4 >= testimonials.length}>
            <FaChevronRight size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
