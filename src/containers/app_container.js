import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestApiData } from '../sagas';
import { searchFormEntry } from '../actions/search_form_entry';
import CoinTable from '../components/coin_table';

class AppContainer extends Component {

  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    const { data } = this.props;

    return data !== undefined ? (
      <div>
        <CoinTable 
           coin={data[0]}
           searchFormEntry={this.props.searchFormEntry}
        />
      </div>
    ) : <div>Loading...</div>;
  }

}


function mapStateToProps(state) {
  return {
    data: state.apiReducer.data,
    searchFormText: state.searchReducer.searchFormText
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestApiData, searchFormEntry }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);