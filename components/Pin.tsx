"use client";

import { useBranchData } from "@/providers/useBranchData"

const Pin = () => {
  const {
    statistics
  } = useBranchData();

  return (
    <div className='w-[100vw] bg-gray-300
    flex justify-center items-center
    px-6 py-6'>
        <div className="max-w-max
        flex justify-between items-center gap-x-20 w-full
        overflow-x-scroll no-scrollbar">
          {statistics?.map((statistic, index) => (
            <div key={index} className="
            flex flex-col justify-center items-center gap-y-1 text-black/50">
              <p className="dynamic-subheading font-semibold">{statistic.number}</p>
              <p className="text-nowrap overflow-x-hidden">{statistic.label}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Pin