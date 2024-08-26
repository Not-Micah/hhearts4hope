import { testimonials } from "@/data"
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
  return (
    <div className="bg-gray-200 w-[100vw]
    flex justify-center items-center
    px-4 py-36">
      <div className="max-w-max
      flex flex-col justify-center items-center gap-y-12
      w-full">
        <h3 className="font-title dynamic-subheading font-semibold">Testimonials</h3>
        <div className="grid grid-cols-2 gap-6
        max-lg:flex max-lg:flex-col max-lg:gap-y-2">
          {testimonials.map((testimonial, index) => (
            <div 
            key={index}
            className="
            bg-white rounded-lg p-4
            flex flex-col justify-center items-start gap-y-4
            relative">
              <p className="font-title">{testimonial.quote}</p>
              <div className="w-full h-[2px] rounded-full bg-black/30" />
              <p className="italic text-sm">{testimonial.person}</p>
              <ImQuotesLeft className="absolute top-[5px] left-[25px] 
              text-gray-400/30" size={70} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials