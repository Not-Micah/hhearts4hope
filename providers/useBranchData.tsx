"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { getBranches } from "@/utils/database";

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
    const [branches, setBranches] = useState<DocumentData[] | null>(null);

    useEffect(() => {
        const unsubscribe = getBranches(setBranches);
        return () => unsubscribe();
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
