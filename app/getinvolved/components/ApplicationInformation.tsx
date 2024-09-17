import Highlight from "@/components/Highlight"
import { signUps } from "@/data"

const ApplicationInformation = () => {
  return (
    <div className='max-w-max w-full mx-auto
    px-4 py-8 mb-16
    flex flex-col justify-start items-start gap-y-12'>
      <div className="flex flex-col gap-y-2">
        <div className="">
          <Highlight text="Interested?" />
        </div>
        <h3 className="dynamic-subheading">Get Involved</h3>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {signUps.map((signUp, index) => (
          <div 
          key={index}
          className="flex flex-col justify-start items-start gap-y-2
          shadow-lg px-4 py-14 rounded-lg
          w-full hover:scale-[102.5%] transition-all duration-150">
            <div className="text-7xl text-primary/60 bg-secondary/30 p-4 rounded-lg">
              {signUp.icon}
            </div>
            <h3 className="text-2xl font-title font-semibold">
              {signUp.title}
            </h3>
            <p className="text-lg">{signUp.description}</p>
            <div className="flex flex-wrap justify-start items-center gap-x-4">
              {signUp.formLinks.map((link, index) => (
                <a 
                key={index}
                href={link.link}
                className="px-2 py-1 mt-5 rounded-full bg-secondary/20
                hover:underline hover:text-blue-500">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApplicationInformation