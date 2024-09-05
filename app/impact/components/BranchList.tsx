"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { DocumentData } from "firebase/firestore";
import { CountryData, organizeBranchesByCountry } from "@/utils/functions";
import { useBranchData } from "@/providers/useBranchData";

const BranchList = () => {
    const { branches } = useBranchData();
    const [organizedBranches, setOrganizedBranches] = useState<null | CountryData[]>(null);
    
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const selectedCountry = searchParams.get("country");
    const selectedState = searchParams.get("state");
    const selectedCity = searchParams.get("city");

    useEffect(() => {
        if (branches) {
            setOrganizedBranches(organizeBranchesByCountry(branches));
        }
    }, [branches]);

    const handleCountryClick = (country: string) => {
        router.push(`?country=${country}`);
    };


    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////
    const handleStateClick = (state: string) => {
        if (selectedCountry) {
            router.push(`?country=${selectedCountry}&state=${state}`);
        }
    };

    const handleCityClick = (city: string) => {
        if (selectedCountry && (selectedState || selectedCountry !== "USA")) {
            router.push(`?country=${selectedCountry}&state=${selectedState || ""}&city=${city}`);
        }
    };

    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////
    const renderBranches = (branches: DocumentData[]) => (
        <div>
            {branches.map((branch, index) => (
                <div key={index}>
                    <p>{branch.firstName} {branch.lastName}</p>
                    <p>{branch.city}</p>
                    <p>{branch.highschool}</p>
                </div>
            ))}
        </div>
    );

    const renderCountryList = () => (
        <div className="flex justify-start items-center gap-x-4">
            {organizedBranches?.map((countryData, index) => (
                <div key={index} onClick={() => handleCountryClick(countryData.country)}>
                    {countryData.country}
                </div>
            ))}
        </div>
    );

    const renderStateList = () => {
        const usaData = organizedBranches?.find((country) => country.country === "USA");
        return (
            <div className="flex justify-start items-center gap-x-4">
                {usaData?.states?.map((stateData, index) => (
                    <div key={index} onClick={() => handleStateClick(stateData.state)}>
                        {stateData.state}
                    </div>
                ))}
            </div>
        );
    };

    const renderCityList = () => {
        let cityList: string[] = [];

        if (selectedCountry === "USA") {
            const stateData = organizedBranches?.find((country) => country.country === "USA")
                ?.states?.find((state) => state.state === selectedState);
            cityList = stateData?.branches?.map((branch) => branch.city) || [];
        } else {
            const countryData = organizedBranches?.find((country) => country.country === selectedCountry);
            cityList = countryData?.branches?.map((branch) => branch.city) || [];
        }

        return (
            <div className="flex justify-start items-center gap-x-4">
                {cityList.map((city, index) => (
                    <div key={index} onClick={() => handleCityClick(city)}>
                        {city}
                    </div>
                ))}
            </div>
        );
    };

    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////

    const renderBranchListForCity = () => {
        let branchList: DocumentData[] = [];

        if (selectedCountry === "USA") {
            const stateData = organizedBranches?.find((country) => country.country === "USA")
                ?.states?.find((state) => state.state === selectedState);
            branchList = stateData?.branches?.filter((branch) => branch.city === selectedCity) || [];
        } else {
            const countryData = organizedBranches?.find((country) => country.country === selectedCountry);
            branchList = countryData?.branches?.filter((branch) => branch.city === selectedCity) || [];
        }

        return (
            <div>
                <h3>Branches in {selectedCity}</h3>
                {renderBranches(branchList)}
            </div>
        );
    };

    return (
        <div className="max-w-max mx-auto py-8 px-4">
            {/* Step 1: Show countries */}
            {!selectedCountry && renderCountryList()}

            {/* Step 2: Show states if USA is selected */}
            {selectedCountry === "USA" && !selectedState && renderStateList()}

            {/* Step 3: Show cities for the selected country or state */}
            {selectedCountry && !selectedCity && renderCityList()}

            {/* Step 4: Show branches in the selected city */}
            {selectedCity && renderBranchListForCity()}
        </div>
    );
};

export default BranchList;
