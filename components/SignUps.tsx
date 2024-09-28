import { signUps } from "@/data";

const SignUps = () => {
  return (
    <div className='max-w-max mx-auto py-48 px-x
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
          max-lg:h-auto max-lg:mb-14" />
          <div className="flex flex-col justify-center items-start gap-y-6">
            <h3 className="dynamic-subheading">{signUp.title}</h3>
            <p className="dynamic-text mb-4">{signUp.description}</p>
            <button className="primary-button
            px-8 py-2 rounded-full">{signUp.title}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SignUps;

