"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { getBranches, initializeFirebase } from "@/utils/database";

type BranchContextType = {
    branches: DocumentData[] | null;
}

export const BranchContext = createContext<BranchContextType | undefined>(
    undefined
);

export interface Props {
    [propNames: string]: any;
}

export const BranchContextProvider = (props: Props) => {
    const app = initializeFirebase();
    const [branches, setBranches] = useState<DocumentData[] | null>(null);

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const fetchedBranches = await getBranches(); 
                setBranches(fetchedBranches); 
            } catch (error) {
                console.error("Error fetching branches:", error);
                setBranches(null);
            }
        };

        fetchBranches();
    }, []);

    const value = {
        branches,
    };

    return <BranchContext.Provider value={value} {...props} />;
};

export const useBranchData = () => {
    const context = useContext(BranchContext);
    if (context === undefined) {
        throw new Error("useBranchData must be used within a BranchContextProvider");
    }

    return context;
};
