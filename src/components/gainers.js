import React, { Component } from 'react';

class Gainers extends Component {


  render() {
    const {coins} = this.props;

    // filter out coins with negative percent change.
    // this leaves us with coins that have gained in value
    const posChange = coins.filter(coin => coin.percent_change_24h > 0);
    
    // sort those positive change coins
    // in descending order (largest percent change to smallest)
    const sortDesc = posChange.sort((a, b) => {
      return a.percent_change_24h - b.percent_change_24h;
    }).reverse();

    const posChangeCoins = sortDesc.map((coinItem) => {
      return (
        <li
          key={coinItem.id}
        >
          {coinItem.name}
          {coinItem.percent_change_24h}
        </li>
      );
    });


    return(
      <div>
        <h3>Biggest Gainers Over the Past 24 Hours</h3>
        <ul>
          {posChangeCoins}
        </ul>
      </div>
    );
  }
  
}

export default Gainers;