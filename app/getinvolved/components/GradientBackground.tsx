import React from 'react'

const GradientBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full overflow-hidden w-[100vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500 opacity-[15%] blur-[200px] rounded-full" />
      <div className="absolute top-[15%] right-[5%] w-[700px] h-[700px] bg-red-700 opacity-[15%] blur-[250px] rounded-full" />
      <div className="absolute bottom-[25%] left-[25%] w-[550px] h-[550px] bg-red-400 opacity-[15%] blur-[200px] rounded-full" />
      <div className="absolute bottom-[10%] right-[15%] w-[800px] h-[800px] bg-pink-600 opacity-[15%] blur-[300px] rounded-full" />
      <div className="absolute top-[50%] left-[60%] w-[700px] h-[700px] bg-purple-400 opacity-[15%] blur-[220px] rounded-full" />
      <div className="absolute bottom-[40%] right-[5%] w-[600px] h-[600px] bg-blue-500 opacity-[15%] blur-[200px] rounded-full" />
      <div className="absolute top-[75%] left-[10%] w-[650px] h-[650px] bg-yellow-500 opacity-[15%] blur-[200px] rounded-full" />
    </div>
  );
}

export default GradientBackground;
