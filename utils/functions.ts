import { DocumentData } from "firebase/firestore";

export type OrganizedBranch = {
    country: string;
    cities: {
        city: string;
        branches: DocumentData[];
    }[];
};

export const organizeBranchesByCountryAndCity = (
    branches: DocumentData[]
): OrganizedBranch[] => {
    const countryMap: { [country: string]: { [city: string]: DocumentData[] } } = {};

    branches.forEach((branch) => {
        const { country, city } = branch;

        if (!countryMap[country]) {
            countryMap[country] = {};
        }

        if (!countryMap[country][city]) {
            countryMap[country][city] = [];
        }

        countryMap[country][city].push(branch);
    });

    const organizedBranches: OrganizedBranch[] = Object.entries(countryMap).map(
        ([country, citiesMap]) => {
            const cities = Object.entries(citiesMap).map(([city, branches]) => ({
                city,
                branches,
            }));

            return {
                country,
                cities,
            };
        }
    );

    return organizedBranches;
};

export const sortBranchesAlphabetically = (branches: DocumentData[]): DocumentData[] => {
    return branches.sort((a, b) => {
        const countryComparison = a.country.localeCompare(b.country);
        if (countryComparison === 0) {
            return a.city.localeCompare(b.city);
        }
        return countryComparison;
    });
};