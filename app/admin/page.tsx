"use client";

import { useState } from "react";

import EntryField from "./components/EntryField";
import AdminDashboard from "./components/AdminDashboard";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Admin = () => {
    const [adminStatus, setAdminStatus] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className="w-[100vw]">
        <NavBar transparent={false} />
        <div className="w-[100vw] h-[85vh]
        max-[1000px]:hidden">
            {adminStatus ? (
                <div className="w-full h-full
                flex justify-center items-center">
                    <AdminDashboard />
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