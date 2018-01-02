import React from 'react';
import SearchForm from './search_form';
import REQUEST_API_DATA from '../constants';
import { requestApiData } from '../sagas';

const CoinTable = ({ coin, searchFormText, searchFormEntry }) => {
  
  return (
    <div className="container">
      <div>
        <p>{coin.id}</p>
        <p>{coin.price_usd}</p>
        <p>{coin.percent_change_1h}</p>
        <p>{coin.percent_change_24h}</p>
      </div>
      <SearchForm 
        searchFormText={searchFormText}
        searchFormEntry={searchFormEntry}
        onClick={requestApiData(searchFormText)}
        />
    </div>
  );
}

export default CoinTable;
