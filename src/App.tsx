import React from 'react';
import { CountryList } from './components/CountryList/CountryList';
import { transformCountrues } from './mappers/transformCountries';
import dataCountry from './country-data.json'
export const App = () => {
  const transCountries = transformCountrues(dataCountry);
  return (
    <div className="App m-3">
      <h1 className="p-2">Country List</h1>
      <CountryList contries={transCountries} />
    </div>
  );
}