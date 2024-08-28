"use client";

import Marquee from "react-fast-marquee";
import { branches } from "@/data";
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { FaRegEye } from "react-icons/fa";

const containerStyle = {
  width: '100%',
  height: '100%'
};

const Branches = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDmKrYRHIl-efX8ZoEMgSIJM6jjaQD_-2c"
  });

  return (
    <div className='w-[100vw] px-4 py-16 flex justify-center items-center bg-accent'>
      <div className="max-w-max w-full flex flex-col justify-center items-center gap-y-8">
        <h3 className='dynamic-subheading font-bold font-title'>Branches</h3>
        <Marquee speed={25} gradient={false} className="w-full">
          {branches.map((branch, index) => (
            <div key={index} className="p-4 mx-2 font-title text-xl bg-white rounded-lg shadow-lg">
              {branch.label}
            </div>
          ))}
        </Marquee>
        <div className="w-full h-[500px]
        relative">
          <a 
          href="/"
          className="absolute bg-white
          -top-5 -right-5 z-10
          w-[100px] h-[100px]
          flex justify-center items-center gap-x-2
          shadow-lg
          rounded-full px-4 py-2">
            <FaRegEye size={50} className="text-black/40" />
          </a>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{lat: 51.509865, lng: -0.118092}}
              zoom={2} 
            >
              {branches.map((branch, index) => (
                <MarkerF key={index} position={branch.location} />
              ))}
            </GoogleMap>
          )}
        </div>
      </div>
    </div>
  );
}

export default Branches;
