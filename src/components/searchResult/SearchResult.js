import React from 'react';
import './SearchResult.scss';
import ResultItem from './ResultItem';

const SearchResult = ({ filteredList }) => {
  const uniqueArray = filteredList.filter((dataObj,index) => {
    return index === filteredList.findIndex(obj => {
      return JSON.stringify(obj.id) === JSON.stringify(dataObj.id);
    });
  });
  const list = uniqueArray.map(item => <ResultItem key={item.id} item={item} />);

  return (
    <div className="result-container">
      {list}
    </div>
  )
}

export default SearchResult
