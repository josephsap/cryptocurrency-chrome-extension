import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoins } from '../actions/fetch_coins';
import { searchFormEntry, addCoin, disableCoin } from '../actions/search_form_entry';
import { deleteCoin } from '../actions/delete_coin';
import CoinTable from '../components/coin_table';

class AppContainer extends Component {

  render() {
    const { isFetching } = this.props;
    return (
      <div className="container">
        {isFetching && <div>Loading...</div>}
        {!isFetching &&       
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
    coinCollection: state.coinsReducer.coinCollection
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchFormEntry, fetchCoins, addCoin, deleteCoin, disableCoin }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);