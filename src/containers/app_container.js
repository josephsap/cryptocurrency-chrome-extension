import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoins } from '../actions/fetch_coins';
import { searchFormEntry, currentlyDisplayedCoin, addCoin } from '../actions/search_form_entry';
import CoinTable from '../components/coin_table';

class AppContainer extends Component {

  render() {
    const { isFetching } = this.props;
    return (
      <div>
        {isFetching && <div>Loading...</div>}
        {!isFetching &&       
          <div>
            <CoinTable 
              coins={this.props.coins}
              fetchCoins={this.props.fetchCoins}
              searchFormText={this.props.searchFormText}
              searchFormEntry={this.props.searchFormEntry}
              currentlyDisplayedCoin={this.props.currentlyDisplayedCoin}
              coinName={this.props.coinName}
              addCoin={this.props.addCoin}
              coinCollection={this.props.coinCollection}
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
    coinName: state.searchReducer.coinName,
    coinCollection: state.coinCollectionReducer.coinCollection
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchFormEntry, fetchCoins, currentlyDisplayedCoin, addCoin }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);