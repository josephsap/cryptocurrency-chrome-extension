import React, { Component } from 'react';


class SearchForm extends Component {

  componentDidMount = () => {
    console.log('mount, stuff', this.props.intervalFunction)
    // this.refreshData();
    // let intervalFunction = setInterval(this.refreshData, 8000);
  }

  componentWillUnmount = () => {

  }

  refreshData = () => {

    this.props.fetchCoins(this.props.searchFormText);
    // console.log('hi,', this.props.searchFormText)
    // every 5mins, call API to refresh coin data
    // coinmarketcap API updates every 5min
    // setInterval(() => {
    //   // console.log(this.props, 'in interval')
    //   this.props.fetchCoins(this.props.searchFormText);
    // }, 8000);
    // 306000 = 5mins
  }

  handleChange = (e) => {
    this.props.searchFormEntry(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchCoins(this.props.searchFormText);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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