import React, { Component } from 'react';
import { REQUEST_API_DATA } from '../constants';

class SearchForm extends Component {

  handleChange = (e) => {
    this.props.searchFormEntry(e.target.value);
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   // this.props.fetchCoins(this.props.searchFormText);
  //   this.props.requestApiData(this.props.searchFormText);
  // }


  render() {
    return (
      <form onSubmit={this.props.onClick}>
        <label name="search-input" className="sr-only">Coin Search Entry Field</label>
        <input 
          type="text"
          value={this.props.searchFormText}
          onChange={this.handleChange}
          id="search-input"
         />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;