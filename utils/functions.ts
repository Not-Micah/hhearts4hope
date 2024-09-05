import { DocumentData } from "firebase/firestore";

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

export interface CountryData {
    country: string;
    states?: StateData[];
    branches?: DocumentData[];
  }
  
  interface StateData {
    state: string;
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
          stateData = {
            state: doc.state as string,
            branches: []
          };
          countryData.states.push(stateData);
        }
  
        stateData.branches.push(doc);
      } else {
        if (!countryData.branches) {
          countryData.branches = [];
        }
  
        countryData.branches.push(doc);
      }
    });
  
    return result;
  };

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

export const sortBranchesAlphabetically = (branches: DocumentData[]): DocumentData[] => {
    return branches.sort((a, b) => {
        const countryComparison = a.country.localeCompare(b.country);
        if (countryComparison === 0) {
            return a.city.localeCompare(b.city);
        }
        return countryComparison;
    });
};