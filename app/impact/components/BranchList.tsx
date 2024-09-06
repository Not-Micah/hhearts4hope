"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

import { DocumentData } from "firebase/firestore";

import BranchDisplay from "./BranchDisplay";

import { CountryData, organizeBranchesByCountry } from "@/utils/functions";
import { useBranchData } from "@/providers/useBranchData";
import { twMerge } from "tailwind-merge";

const cardStyles = `px-6 py-4 rounded-lg bg-gray-200`;

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

    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////

    const handleCountryClick = (country: string) => {
        router.push(`?country=${country}`);
    };

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

    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////

    const renderBranches = (branches: DocumentData[]) => (
        <div>
            {branches.map((branch, index) => (
                <BranchDisplay key={index} branch={branch} />
            ))}
        </div>
    );

    const renderCountryList = () => (
        <div className="flex justify-start items-center gap-x-4">
            {organizedBranches?.map((countryData, index) => (
                <button
                    className={cardStyles}
                    key={index}
                    onClick={() => handleCountryClick(countryData.country)}
                >
                    {countryData.country}
                </button>
            ))}
        </div>
    );

    const renderStateList = () => {
        const usaData = organizedBranches?.find((country) => country.country === "USA");

        return (
            <div className="flex justify-start items-center gap-x-4">
                {usaData?.states?.map((stateData, index) => (
                    <button
                        className={cardStyles}
                        key={index}
                        onClick={() => handleStateClick(stateData.state)}
                    >
                        {stateData.state}
                    </button>
                ))}
            </div>
        );
    };

    const renderCityList = () => {
        let cityList: string[] = [];

        if (selectedCountry === "USA") {
            const stateData = organizedBranches?.find((country) => country.country === "USA")
                ?.states?.find((state) => state.state === selectedState);
            cityList = stateData?.cities?.map(city => city.city) || [];
        } else {
            const countryData = organizedBranches?.find((country) => country.country === selectedCountry);
            cityList = countryData?.cities?.map(city => city.city) || [];
        }

        return (
            <div className="flex justify-start items-center gap-x-4">
                {cityList.map((city, index) => (
                    <button
                        className={cardStyles}
                        key={index}
                        onClick={() => handleCityClick(city)}
                    >
                        {city}
                    </button>
                ))}
            </div>
        );
    };

    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////

    const renderBranchListForCity = () => {
        let branchList: DocumentData[] = [];

        if (selectedCountry === "USA") {
            const stateData = organizedBranches?.find((country) => country.country === "USA")
                ?.states?.find((state) => state.state === selectedState);
            const cityData = stateData?.cities?.find(city => city.city === selectedCity);
            branchList = cityData?.branches || [];
        } else {
            const countryData = organizedBranches?.find((country) => country.country === selectedCountry);
            const cityData = countryData?.cities?.find(city => city.city === selectedCity);
            branchList = cityData?.branches || [];
        }

        return (
            <div>
                <h3 className="text-2xl font-title font-bold">{selectedCity}, {selectedCountry}</h3>
                {renderBranches(branchList)}
            </div>
        );
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="w-full">
                {/* Step 1: Show countries */}
                {!selectedCountry && renderCountryList()}

                {/* Step 2: Show states if USA is selected */}
                {selectedCountry === "USA" && !selectedState && renderStateList()}

                {/* Step 3: Show cities for the selected country or state */}
                {selectedCountry && !selectedCity && renderCityList()}

                {/* Step 4: Show branches in the selected city */}
                {selectedCity && renderBranchListForCity()}
            </div>
        </Suspense>
    );
};

export default BranchList;