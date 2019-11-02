import React from 'react';
import './ResultItem.css';

const ResultItem = ({ item }) => {
  return (
    <div className="resultItem">
      <div style={{ margin: "auto 0" }}>
        <img src={item.appIcon} className='itemImage' />
      </div>
      <div style={{ margin: "auto 0" }}>
        <ul className='listUl'>
          <li ><div>{item.name}</div></li>
          <li className='liGenre'>{item.genre}</li>
        </ul>
      </div>
    </div>
  )
}

export default ResultItem
