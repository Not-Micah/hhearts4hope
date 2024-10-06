"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";

import { getBranches, getStatistics, getPartners } from "@/utils/database";

type BranchContextType = {
    branches: DocumentData[] | null;
    statistics: DocumentData[] | null;
    partners: DocumentData[] | null;
};

export const BranchContext = createContext<BranchContextType | undefined>(
    undefined
);

export interface Props {
    [propNames: string]: any;
}

export const BranchContextProvider = (props: Props) => {
    const [branches, setBranches] = useState<DocumentData[] | null>(null);
    const [statistics, setStatistics] = useState<DocumentData[] | null>(null);
    const [partners, setPartners] = useState<DocumentData[] | null>(null);

    useEffect(() => {
        const unsubscribe = getBranches(setBranches);
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const unsubscribe = getStatistics(setStatistics);
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const unsubscribe = getPartners(setPartners);
        return () => unsubscribe();
    }, []);

    const value = {
        branches,
        statistics,
        partners
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
