import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  handleOnChange = (e) => {
    this.props.handleSearchEvent(e.target.name, e.target.value);
  }

  render() {
    return (
      <div className='search-container'>
        <input
          className='searchbarInput'
          type="text"
          placeholder='&#xF002; 搜尋'
          name="searchInput"
          value={this.props.searchInput}
          onChange={this.handleOnChange}
        />
      </div>
    )
  }
}

export default Search;

