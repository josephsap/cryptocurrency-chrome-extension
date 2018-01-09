import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';


class SearchForm extends Component {

  componentDidMount = () => {
    // let { searchFormText } = this.props;
    // console.log('mount, stuff', this.props.searchFormText)
    // this.intervalID = setInterval(this.refreshData(searchFormText, 10000));
    // 306000 = 5mins
    // console.log('coin*name', this.props.coins)
    console.log(this.props)
  }

  componentWillUnmount = () => {
    // console.log('unmount', this.intervalID)
    // clearInterval(this.intervalID);
  }

  refreshData = (searchTerm) => {

    // console.log(searchTerm, 'in refresh data fn')
    // if(searchTerm === undefined) {
    //   this.props.fetchCoins('ethereum');
    // } else {
    //   this.props.fetchCoins(searchTerm);
    // }
    // clearInterval(this.intervalID);
    
  }

  updateValue = (newValue) => {
    this.props.searchFormEntry(newValue);
    this.props.addCoin(newValue);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.props.searchFormText, 'hi')
    // this.props.fetchCoins(this.props.searchFormText);

    // take selected value
    // loop through props.coins
    // find matching id
    // set state
    // display

    this.props.currentlyDisplayedCoin(this.props.searchFormText);

    // we are setting the current coin name here.
    // if it is different from the search form text entered,
    // dispatch action w/new coin name
    // console.log(this.props.coinName, '0000', this.props.searchFormText)
    if(this.props.coinName !== this.props.searchFormText) {
      this.props.currentlyDisplayedCoin(this.props.searchFormText);
      // this.props.fetchCoins(this.props.searchFormText);
      // this.props.addCoin(this.props.)
    }
  }


  render() {
    const options = this.props.coins;
    // console.log(this.props.coins, 'option')
    return (
      <div>
        <VirtualizedSelect ref="coinSelect"
          options={options}
          simpleValue
          clearable
          name="select-coin"
          value={this.props.searchFormText}
          onChange={this.updateValue}
          searchable
          labelKey="name"
          valueKey="name"
        />
        <button type="submit" onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
}

export default SearchForm;