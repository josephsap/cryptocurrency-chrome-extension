import React, { Component } from 'react';

class Gainers extends Component {

  componentDidMount() {
    const { coins } = this.props.coins;
    this.props.sortGainers(coins);
  }
  
  render() {
    const { gainers } = this.props;
    const posChangeCoins = gainers.map((coinItem) => {
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
        <h3>Gainers Over the Past 24 Hours</h3>
        <ul>
          {posChangeCoins}
        </ul>
      </div>
    );
  }
  
}

export default Gainers;