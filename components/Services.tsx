import { services } from "@/data"
import ContactCard from "./ContactCard"

const Services = () => {
  return (
    <div className='max-w-max mx-auto 
    py-48 px-x'>
        <h3 className='dynamic-subheading'>About Us</h3>
        <div className="flex justify-start items-center gap-x-20
        mt-10
        max-xl:flex-col">
            <div className="grid grid-cols-2 gap-14
            max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-start">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col justify-start items-start gap-y-2">
                        <div className="text-3xl bg-primary text-white
                        p-2 rounded-xl mb-5 drop-shadow-[0px_4px_0px_rgba(134,5,5,1)]">
                            {service.icon}
                        </div>
                        <h3 className="font-title dynamic-text text-header font-semibold">
                            {service.title}
                        </h3>
                        <p className="dynamic-text">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="xl:relative max-w-[500px] min-w-[400px] w-full
            max-xl:mt-16 max-xl:min-w-0 max-xl:max-w-none max-xl:flex max-xl:justify-center max-xl:items-center max-xl:w-full">
                <ContactCard className="xl:absolute xl:transform xl:-translate-y-[475px]" />
            </div>
        </div>  
    </div>
  )
}

export default Services