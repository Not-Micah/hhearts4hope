import { twMerge } from "tailwind-merge";
import { galleryImages } from "@/data";
import { FaArrowRight } from "react-icons/fa";

interface ImageComponentProps {
  image: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ image }) => {
  const imgStyles = `w-full h-full object-cover rounded-lg
      border-4 border-white shadow-lg`;

  return (
    <div className="relative w-full h-[300px]">
      <div className="absolute w-full h-full top-3 left-3 z-10 opacity-20 brightness-50 bg-black rounded-lg"></div>
      <img
        src={image}
        className={twMerge(imgStyles, "z-20 relative")}
      />
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="w-[100vw] px-4 py-16 flex justify-center items-center bg-accent">
      <div className="flex flex-col justify-center items-center gap-y-12 px-2 max-w-max w-full">
        <h3 className="dynamic-subheading font-bold font-title">Gallery</h3>
        <div className="grid grid-cols-3 gap-14
        max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center
        max-xl:grid-cols-2
        w-full">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-y-4 w-full
              max-lg:items-start"
            >
              <ImageComponent image={item.image} />
              <h3 className="mt-8 font-title text-lg font-bold">{item.title}</h3>
              <p className="text-center text-content/80
              max-lg:text-left">{item.description}</p>
              <a href="/impact" className="flex justify-center items-center gap-x-2
              hover:gap-x-4 transition-all duration-300
              text-gray-400/60 underline">
                See More
                <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
