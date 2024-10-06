"use client";

import { useBranchData } from "@/providers/useBranchData";
import useStatisticsModal from "@/hooks/useStatisticsModal";

const StatisticsDashboard = () => {
  const { statistics } = useBranchData();

  const {
    onOpen,
    setCurrentStatistic,
    updated,
    setUpdated
  } = useStatisticsModal();

  if (statistics === null) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-y-6
    overflow-y-scroll no-scrollbar py-12 w-full">
      <h3 className="dynamic-subheading font-semibold">Statistics</h3>
      <div className="flex flex-col justify-center items-start gap-y-2 w-full">
        {statistics && statistics.map((statistic, index) => (
          <button
            key={index}
            className="flex flex-row justify-between items-center gap-x-4
            border-b-2 pb-3 w-full"
            onClick={() => {
              setUpdated(!updated);
              setCurrentStatistic(statistic)
              onOpen();
            }}
          >
              <p className="text-lg">{statistic.number} {statistic.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatisticsDashboard;
