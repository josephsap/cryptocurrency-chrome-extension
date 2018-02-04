import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';

import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import 'react-select/dist/react-select.css';


class SearchForm extends Component {

  componentDidMount = () => {

    // if a coin is already in the coin collection,
    // disable it to prevent selection from the
    // dropdown list.
    this.props.coinCollection.forEach((item) => {
      this.props.disableCoin(item.id);
    });
  }

  updateValue = (newValue) => {
    this.props.searchFormEntry(newValue);
  }

  handleSubmit = (e) => {

    // putting the whole coin object into
    // the selected coin collection
    e.preventDefault();
    let chosenCoin;
    const coins = this.props.coins;
    coins.forEach((item) => {
      if(item.name === this.props.searchFormText) {
        chosenCoin = item;
      }
    });

    this.props.addCoin(chosenCoin);
    this.props.disableCoin(chosenCoin.id);
    this.props.searchFormEntry('');
  
  }


  render() {
    const options = this.props.coins;
    return (
      <div className="input-group">
        <VirtualizedSelect ref="coinSelect" className="virt-select"
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
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" onClick={this.handleSubmit} type="button">Add To Collection</button>
        </div>
      </div>
    );
  }
}

export default SearchForm;