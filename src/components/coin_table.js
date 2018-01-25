import React, { Component } from 'react';
import SearchForm from './search_form';

class CoinTable extends Component {

  handleDelete = (id) => {
    console.log(id)
    this.props.deleteCoin(id);
  } 

  render() {
    const { 
      coins,
      searchFormText, 
      fetchCoins, 
      searchFormEntry,
      addCoin,
      deleteCoin,
      coinCollection 
    } = this.props;

    const coin = coins[0];
    const renderCoinCollection = coinCollection.map((coinItem) => {
      return (
        <li key={coinItem.id} className="list-group-item">
          <h3>{coinItem.name}</h3>
          <p>{coinItem.price_usd}</p>
          <p>{coinItem.percent_change_1h}</p>
          <p>{coinItem.percent_change_24h}</p>
          <button className="btn btn-outline-secondary" onClick={((e) => this.handleDelete(coinItem.id))} type="button">Remove</button>
        </li>
      );
    });
    
    return (
      <div className="row">
        <div className="col-sm-6">
          <SearchForm 
            searchFormText={searchFormText}
            searchFormEntry={searchFormEntry}
            fetchCoins={fetchCoins}
            coins={coins}
            addCoin={addCoin}
            coinCollection={coinCollection}
          />
        
      
          {/*  */}
          { coinCollection.length === 0 && 
            <ul className="list-group">
              <li key={coin.id} className="list-group-item">
                <h3>{coin.name}</h3>
                <p>{coin.price_usd}</p>
                <p>{coin.percent_change_1h}</p>
                <p>{coin.percent_change_24h}</p>
              </li>
            </ul>
          }

          { coinCollection.length > 0 && 
            <ul className="list-group">
              { renderCoinCollection }
            </ul>
          }
        </div>
      </div>
    );
  }
}

export default CoinTable;
