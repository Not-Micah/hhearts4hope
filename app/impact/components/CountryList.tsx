"use client";

import { useBranchData } from "@/providers/useBranchData";
import { useRouter, useSearchParams } from 'next/navigation';
import { getGallery } from "@/utils/database";

const divStyles = `w-full flex flex-row flex-wrap`;
const buttonStyles = `px-4 py-2 text-lg rounded-lg bg-primary text-white shadow-md`;

const CountryList = () => {
    const { organizedBranches } = useBranchData();
    const searchParams = useSearchParams();
    const router = useRouter();

    const countryParam = searchParams.get("country");
    const cityParam = searchParams.get("city");

    const handleCountryClick = (country: string) => {
        router.push(`?country=${country}`);
    };

    const handleCityClick = (country: string, city: string) => {
        router.push(`?country=${country}&city=${city}`);
    };

    let content;

    if (!organizedBranches) {
        content = <p>Loading...</p>;
    } else if (!countryParam) {
        content = (
            <div className={divStyles}>
                {organizedBranches.map(({ country }) => (
                    <button 
                    className={buttonStyles}
                    key={country} 
                    onClick={() => handleCountryClick(country)}>
                        {country}
                    </button>
                ))}
            </div>
        );
    } else if (countryParam && !cityParam) {
        const selectedCountry = organizedBranches.find(({ country }) => country === countryParam);

        if (selectedCountry) {
            content = (
                <div className={divStyles}>
                    {selectedCountry.cities.map(({ city }) => (
                        <button 
                        className={buttonStyles}
                        key={city} 
                        onClick={() => handleCityClick(countryParam, city)}>
                            {city}
                        </button>
                    ))}
                </div>
            );
        } else {
            content = <p>No data found for {countryParam}</p>;
        }
    } else if (countryParam && cityParam) {
        const selectedCountry = organizedBranches.find(({ country }) => country === countryParam);

        if (selectedCountry) {
            const selectedCity = selectedCountry.cities.find(({ city }) => city === cityParam);

            if (selectedCity) {
                content = (
                    <div className="w-full">
                        {selectedCity.branches.map((branch, index) => (
                            <div key={index} className="flex flex-col justify-start items-start gap-y-10">
                                <h3 className="font-title dynamic-subheading font-bold">{branch.city} {branch.country}, {branch.highschool}</h3>
                                <div className="flex justify-start items-start gap-20">
                                    <div className="flex flex-col justify-center items-start gap-y-4">
                                        <img src={branch.photo} className="max-w-[500px] object-cover rounded-lg" />
                                        <h3 className="text-xl font-title font-bold">Branch Founder, {branch.firstName} {branch.lastName}</h3>
                                    </div>
                                    <p>{branch.description}</p>
                                </div>
                                <div className="flex flex-row justify-start items-center flex-wrap">
                                    // Images Go Here
                                </div>
                            </div>
                        ))}
                    </div>
                );
            } 
        } 
    }

    return (
        <div className='max-w-max mx-auto px-4 py-24 flex justify-center items-center'>
            {content}
        </div>
    );
};

export default CountryList;
