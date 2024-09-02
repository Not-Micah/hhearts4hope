"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { getBranches } from "@/utils/database";

import { sortBranchesAlphabetically, organizeBranchesByCountryAndCity, OrganizedBranch } from "@/utils/functions";

type BranchContextType = {
    branches: DocumentData[] | null;
    sortedBranches: DocumentData[] | null;
    organizedBranches: OrganizedBranch[] | null;
};

export const BranchContext = createContext<BranchContextType | undefined>(
    undefined
);

export interface Props {
    [propNames: string]: any;
}

export const BranchContextProvider = (props: Props) => {
    const [branches, setBranches] = useState<DocumentData[] | null>(null);
    const [sortedBranches, setSortedBranches] = useState<DocumentData[] | null>(null);
    const [organizedBranches, setOrganizedBranches] = useState<OrganizedBranch[] | null>(null);

    useEffect(() => {
        const unsubscribe = getBranches(setBranches);
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (branches) {
            setSortedBranches(sortBranchesAlphabetically(branches));
            setOrganizedBranches(organizeBranchesByCountryAndCity(branches));
        }
    }, [branches]);

    const value = {
        branches,
        sortedBranches,
        organizedBranches,
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
