"use client";

import { useState } from "react";

import EntryField from "./components/EntryField";
import BranchDashboard from "./components/BranchDashboard";
import StatisticsDashboard from "./components/StatisticsDashboard";
import PartnersDashboard from "./components/PartnersDashboard";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Admin = () => {
    const [adminStatus, setAdminStatus] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [activeState, setActiveState] = useState("branches");

  return (
    <div className="w-[100vw]">
        <NavBar transparent={false} />
        <div className="h-[85vh]
        max-[1200px]:hidden max-w-[1200px] w-full mx-auto">
            {adminStatus ? (
                <div className="w-full h-full py-24
                flex flex-col justify-start items-center">
                    <div className="flex justify-center items-center gap-x-6">
                        <button onClick={() => setActiveState("branches")}
                            className={`${activeState === "branches" ? "text-black underline" : "text-gray-300"}`}>Branches</button>
                        <button onClick={() => setActiveState("statistics")}
                            className={`${activeState === "statistics" ? "text-black underline" : "text-gray-300"}`}>Statistics</button>
                        <button onClick={() => setActiveState("partners")}
                            className={`${activeState === "partners" ? "text-black underline" : "text-gray-300"}`}>Partners</button>
                    </div>
                    {activeState === "branches" ? (
                        <BranchDashboard />
                    ) : activeState === "statistics" ? (
                        <StatisticsDashboard />
                    ) : (
                        <PartnersDashboard />
                    )}
                </div>
            ) : (
                <div className="w-full h-full
                flex justify-center items-center">
                    <EntryField password={password} setPassword={setPassword} 
                    username={username} setUsername={setUsername} 
                    setAdminStatus={setAdminStatus} />
                </div>
            )}
        </div>
        <div className="max-[1000px]:flex hidden
            w-[100vw] h-[85vh]
            justify-center items-center">
                <p className="px-4">Please visit on a larger device.</p>
        </div>
        <Footer />
    </div>
  )
}

export default Admin