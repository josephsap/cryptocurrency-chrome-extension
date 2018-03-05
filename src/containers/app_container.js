import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoins } from '../actions/fetch_coins';
import { searchFormEntry, addCoin, disableCoin } from '../actions/search_form_entry';
import { deleteCoin } from '../actions/delete_coin';
import CoinTable from '../components/coin_table';
import Gainers from '../components/gainers';


class AppContainer extends Component {

  componentDidMount = () => {
    // this.timer = setInterval(() => this.getCoins(), 3000);
  }

  getCoins = () => {
    console.log('get coins')
    this.props.fetchCoins();
    // need to update redux state here
    // action creator => reducer =>, etc.
  }

  render() {
    // const { isFetching } = this.props;
    return (
      <div className="container">

          <div>      
          <CoinTable 
            coins={this.props.coins}
            fetchCoins={this.props.fetchCoins}
            searchFormText={this.props.searchFormText}
            searchFormEntry={this.props.searchFormEntry}
            addCoin={this.props.addCoin}
            disableCoin={this.props.disableCoin}
            deleteCoin={this.props.deleteCoin}
            coinCollection={this.props.coinCollection}
          />
          <Gainers 
            sortedGainerCoins={this.props.sortGainers}
          />
          </div>
        
      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    coins: state.coinsReducer.coins,
    searchFormText: state.searchReducer.searchFormText,
    isFetching: state.coinsReducer.isFetching,
    coinCollection: state.coinsReducer.coinCollection,
    sortGainers: state.coinsReducer.sortedGainCoins
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchFormEntry, fetchCoins, addCoin, deleteCoin, disableCoin }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);