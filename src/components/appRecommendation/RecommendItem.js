import React from 'react';
import './RecommendItem.css';

const RecommendItem = ({listItem}) => {
  //console.log(listItem);
  return (
    <div className="item">
      <img src={listItem.artworkUrl100} alt=""/>
      <div className='appName'>{listItem.name}</div>
      <div className='grey-text'>{listItem.genres[0].name}</div>
    </div>
  )
}

export default RecommendItem;
