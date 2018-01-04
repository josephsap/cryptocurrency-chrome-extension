import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';


class SearchForm extends Component {

  state = {
    selectValue: ''
  }

  componentDidMount = () => {
    // let { searchFormText } = this.props;
    // console.log('mount, stuff', this.props.searchFormText)
    // this.intervalID = setInterval(this.refreshData(searchFormText, 10000));
    // 306000 = 5mins
    console.log('coin*name', this.props.coins)
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
    this.setState({
      selectValue: newValue
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchCoins(this.props.searchFormText);

    // we are setting the current coin name here.
    // if it is different from the search form text entered,
    // dispatch action w/new coin name
    console.log(this.props.coinName, '0000', this.props.searchFormText)
    if(this.props.coinName !== this.props.searchFormText) {
      this.props.currentlyDisplayedCoin(this.props.searchFormText);
    }
  }


  render() {
    // const { selectedOption } = this.state;
    // const value = selectedOption && selectedOption.value;
    const options = this.props.coins;
    console.log(options)
    return (
      <form onSubmit={this.handleSubmit}>
        <label name="search-input" className="sr-only">Coin Search Entry Field</label>
          <VirtualizedSelect ref="coinSelect"
            options={options}
            simpleValue
            clearable
            name="select-coin"
            value={this.state.selectValue}
            onChange={this.updateValue}
            searchable
            labelKey="name"
            valueKey="name"
          />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;