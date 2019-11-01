import React from 'react';
import './SearchResult.css';
import ResultItem from './ResultItem';

const SearchResult = ({ filteredList }) => {
  //console.log(filteredList);
  //remove duplicate items from recommended list and app list 
  //console.log("filteredList:", filteredList.length);
  const uniqueArray = filteredList.filter((dataObj,index) => {
    return index === filteredList.findIndex(obj => {
      return JSON.stringify(obj) === JSON.stringify(dataObj);
    });
  });
  //console.log("uniqueArray:", uniqueArray.length);
  const list = uniqueArray.map(item => <ResultItem key={item.id} item={item} />);

  return (
    <div className="result-container">
      {list}
    </div>
  )
}

export default SearchResult
