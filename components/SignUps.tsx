import { signUps } from "@/data";

const SignUps = () => {
  return (
    <div className='max-w-max mx-auto py-48 px-8
    flex flex-col justify-center items-between gap-y-40
    max-lg:gap-y-28'>
      {signUps.map((signUp, index) => (
        <div
          key={index}
          className={`flex flex-row gap-x-20 ${index % 2 !== 0 && 'flex-row-reverse'}
          max-lg:flex-col`}
        >
          <img src={signUp.img} className="w-full h-[300px] object-cover 
          rounded-xl shadow-md
          max-lg:h-[400px] max-lg:mb-14" />
          <div className="flex flex-col justify-center items-start gap-y-6">
            <h3 className="font-title dynamic-subheading font-semibold">{signUp.title}</h3>
            <p className="text-sm text-black/80">{signUp.description}</p>
            <button className="bg-primary text-white 
            px-8 py-2 rounded-full">{signUp.buttonLabel}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SignUps;

