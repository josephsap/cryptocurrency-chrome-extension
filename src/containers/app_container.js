import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoins, sortGainers, updateCoinCollection } from '../actions/fetch_coins';
import { searchFormEntry, addCoin, disableCoin } from '../actions/search_form_entry';
import { deleteCoin } from '../actions/delete_coin';
import CoinTable from '../components/coin_table';
import Gainers from '../components/gainers';


class AppContainer extends Component {

  componentDidMount = () => {
    this.timer = setInterval(() => this.getCoins(), 300000);
  }

  getCoins = () => {
    console.log('get coins')
    this.props.fetchCoins();
    // need to update redux state here
    // action creator => reducer =>, etc.

    // need to update the coin collection here
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div className="container">
        {isFetching && <div>Loading...</div>}
        {!isFetching &&
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
              gainers={this.props.gainers}
              coins={this.props.coins}
              sortGainers={this.props.sortGainers}
            />
          </div>
        }
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
    gainers: state.coinsReducer.gainers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchFormEntry, updateCoinCollection, fetchCoins, addCoin, deleteCoin, disableCoin, sortGainers }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);