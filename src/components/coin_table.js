import React from 'react';
import SearchForm from './search_form';

const CoinTable = ({coins, searchFormText, fetchCoins, searchFormEntry, intervalFunction}) => {
  let coin = coins[0];
  return (
    <div className="container">
      <div>
        <p>{coin.name}</p>
        <p>{coin.price_usd}</p>
        <p>{coin.percent_change_1h}</p>
        <p>{coin.percent_change_24h}</p>
      </div>
      <SearchForm 
        searchFormText={searchFormText}
        searchFormEntry={searchFormEntry}
        fetchCoins={fetchCoins}
        intervalFunction={intervalFunction}
        />
    </div>
  );
}

export default CoinTable;
