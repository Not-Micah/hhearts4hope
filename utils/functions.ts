import { DocumentData } from "firebase/firestore";

export interface CountryData {
    country: string;
    states?: StateData[];
    cities?: CityData[];
}

interface StateData {
    state: string;
    cities: CityData[];
}

interface CityData {
    city: string;
    branches: DocumentData[];
}

export const organizeBranchesByCountry = (documentData: DocumentData[]): CountryData[] => {
    const result: CountryData[] = [];

    documentData.forEach((doc) => {
        let countryData = result.find(item => item.country === doc.country);

        if (!countryData) {
            countryData = { country: doc.country };
            result.push(countryData);
        }

        if (doc.country === 'USA') {
            if (!countryData.states) {
                countryData.states = [];
            }

            let stateData = countryData.states.find(item => item.state === doc.state);

            if (!stateData) {
                stateData = { state: doc.state as string, cities: [] };
                countryData.states.push(stateData);
            }

            let cityData = stateData.cities.find(city => city.city === doc.city);
            if (!cityData) {
                cityData = { city: doc.city, branches: [] };
                stateData.cities.push(cityData);
            }

            cityData.branches.push(doc);
        } else {
            if (!countryData.cities) {
                countryData.cities = [];
            }

            let cityData = countryData.cities.find(city => city.city === doc.city);
            if (!cityData) {
                cityData = { city: doc.city, branches: [] };
                countryData.cities.push(cityData);
            }

            cityData.branches.push(doc);
        }
    });

    return result;
};
