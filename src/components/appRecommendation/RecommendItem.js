import React from 'react';
import './RecommendItem.scss';

const RecommendItem = ({ listItem }) => {
  return (
    <div className="item">
      <img src={listItem.appIcon} alt=''/>
      <div className='appName'>{listItem.name}</div>
      <div className='grey-text'>{listItem.genre}</div>
    </div>
  )
}

export default RecommendItem;
