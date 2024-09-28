import Highlight from "@/components/Highlight";
import GradientBackground from "./GradientBackground";

import { signUps } from "@/data";

const ApplicationInformation = () => {
  return (
    <div className="relative max-w-max w-full mx-auto px-x pt-14 pb-40">
      <GradientBackground />
      <div className="relative max-w-max w-full flex flex-col justify-start items-start gap-y-12">
        <div className="flex flex-col gap-y-2">
          <div className="">
            <Highlight text="Interested?" />
          </div>
          <h3 className="dynamic-subheading">Get Involved</h3>
        </div>
        <div className="grid grid-cols-3 gap-8 z-10
        max-[1300px]:flex max-[1300px]:flex-col max-[1300px]:gap-y-8">
          {signUps.map((signUp, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-y-2
              shadow-lg px-8 py-14 rounded-lg bg-white
              w-full hover:scale-[102.5%] transition-all duration-150">
              <div className="text-7xl text-primary/60 bg-[#fdc4c4] drop-shadow-[0px_4px_0px_rgba(251,153,153,1)] mb-6 p-4 rounded-lg">
                {signUp.icon}
              </div>
              <h3 className="dynamic-text font-title font-semibold">
                {signUp.title}
              </h3>
              <p className="dynamic-text text-black/50">{signUp.description}</p>
              <div className="flex flex-wrap justify-start items-center gap-x-4">
                {signUp.formLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="px-2 py-1 mt-5 rounded-full bg-[#fdc4c4] 
                    drop-shadow-[0px_4px_0px_rgba(251,153,153,1)]
                    hover:underline hover:text-blue-500">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationInformation;
