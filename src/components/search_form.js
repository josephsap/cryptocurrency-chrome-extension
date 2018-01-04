import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class SearchForm extends Component {

  state = {
    selectedOption: ''
  }

  componentDidMount = () => {
    // let { searchFormText } = this.props;
    // console.log('mount, stuff', this.props.searchFormText)
    // this.intervalID = setInterval(this.refreshData(searchFormText, 10000));
    // 306000 = 5mins
    console.log('coin*name', this.props.coinName)
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

  handleChange = (selectedOption) => {
    // this.props.searchFormEntry(e.target.value);
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
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
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    return (
      <form onSubmit={this.handleSubmit}>
        <label name="search-input" className="sr-only">Coin Search Entry Field</label>
         <Select
          name="form-field-name"
          value={value}
          onChange={this.handleChange}
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ]}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;