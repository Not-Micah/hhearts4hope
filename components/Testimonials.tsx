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
    <div className="bg-gray-200 w-[100vw] flex justify-center items-center px-4 py-36 relative overflow-hidden">
      <svg 
        className="absolute -bottom-[15px] h-full opacity-10 z-0"
        id="wave" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(0, 0, 0, 1)" offset="0%"></stop><stop stop-color="rgba(0, 0, 0, 1)" offset="100%"></stop></linearGradient></defs>
        <path fill="url(#sw-gradient-0)" d="M0,0L13.3,8.2C26.7,16,53,33,80,57.2C106.7,82,133,114,160,106.2C186.7,98,213,49,240,98C266.7,147,293,294,320,302.2C346.7,310,373,180,400,138.8C426.7,98,453,147,480,163.3C506.7,180,533,163,560,147C586.7,131,613,114,640,138.8C666.7,163,693,229,720,253.2C746.7,278,773,261,800,277.7C826.7,294,853,343,880,343C906.7,343,933,294,960,261.3C986.7,229,1013,212,1040,187.8C1066.7,163,1093,131,1120,98C1146.7,65,1173,33,1200,40.8C1226.7,49,1253,98,1280,138.8C1306.7,180,1333,212,1360,196C1386.7,180,1413,114,1440,114.3C1466.7,114,1493,180,1520,245C1546.7,310,1573,376,1600,343C1626.7,310,1653,180,1680,179.7C1706.7,180,1733,310,1760,310.3C1786.7,310,1813,180,1840,122.5C1866.7,65,1893,82,1907,89.8L1920,98L1920,490L1906.7,490C1893.3,490,1867,490,1840,490C1813.3,490,1787,490,1760,490C1733.3,490,1707,490,1680,490C1653.3,490,1627,490,1600,490C1573.3,490,1547,490,1520,490C1493.3,490,1467,490,1440,490C1413.3,490,1387,490,1360,490C1333.3,490,1307,490,1280,490C1253.3,490,1227,490,1200,490C1173.3,490,1147,490,1120,490C1093.3,490,1067,490,1040,490C1013.3,490,987,490,960,490C933.3,490,907,490,880,490C853.3,490,827,490,800,490C773.3,490,747,490,720,490C693.3,490,667,490,640,490C613.3,490,587,490,560,490C533.3,490,507,490,480,490C453.3,490,427,490,400,490C373.3,490,347,490,320,490C293.3,490,267,490,240,490C213.3,490,187,490,160,490C133.3,490,107,490,80,490C53.3,490,27,490,13,490L0,490Z">
        </path>
      </svg>
      <div className="max-w-max flex flex-col justify-center items-center gap-y-12 w-full">
        <h3 className="font-title dynamic-subheading font-bold">Testimonials</h3>
        <div className="grid grid-cols-2 gap-6 max-lg:flex max-lg:flex-col max-lg:gap-y-2">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
              bg-white rounded-lg p-4
              flex flex-col justify-center items-start gap-y-4
              relative min-h-[200px]">
              <p className="font-title">{testimonial.quote}</p>
              <div className="w-full h-[2px] rounded-full bg-black/30" />
              <p className="italic text-sm">{testimonial.person}</p>
              <ImQuotesLeft className="absolute top-[5px] left-[25px] text-gray-400/30" size={70} />
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
