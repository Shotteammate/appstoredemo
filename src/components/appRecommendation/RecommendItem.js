import React from 'react';
import './RecommendItem.css';

const RecommendItem = ({ listItem }) => {
  //console.log(listItem);
  return (
    <div className="item">
      <img src={listItem.appIcon} />
      <div className='appName'>{listItem.name}</div>
      <div className='grey-text'>{listItem.genre}</div>
    </div>
  )
}

export default RecommendItem;
