import { services } from "@/data"
import ContactCard from "./ContactCard"

const Services = () => {
  return (
    <div className='max-w-max mx-auto 
    py-48 px-8'>
        <h3 className='font-title dynamic-subheading font-bold'>About Us</h3>
        <div className="flex justify-start items-center gap-x-20
        mt-10
        max-lg:flex-col">
            <div className="grid grid-cols-2 gap-14
            max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-start">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col justify-center items-start gap-y-2">
                        <div className="text-3xl bg-primary text-white
                        p-2 rounded-xl mb-5">
                            {service.icon}
                        </div>
                        <h3 className="font-title text-2xl font-semibold">
                            {service.title}
                        </h3>
                        <p className="text-content/80">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="lg:relative max-w-[500px] min-w-[400px] w-full
            max-lg:mt-16 max-lg:min-w-0 max-lg:max-w-none max-lg:flex max-lg:justify-center max-lg:items-center max-lg:w-full">
                <ContactCard className="lg:absolute lg:transform lg:-translate-y-[400px]" />
            </div>
        </div>  
    </div>
  )
}

export default Services