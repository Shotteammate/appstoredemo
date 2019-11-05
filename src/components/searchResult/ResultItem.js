import React from 'react';
import './ResultItem.scss';

const ResultItem = ({ item }) => {
  return (
    <div className="resultItem">
      <div style={{ margin: "auto 0" }}>
        <img src={item.appIcon} className='itemImage' alt='' />
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
