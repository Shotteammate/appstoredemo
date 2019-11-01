import React from 'react';
import './ResultItem.css';

const ResultItem = ({ item }) => {
  return (
    <div className="resultItem">
      <div style={{ margin: "auto 0" }}>
        <img src={item.artworkUrl100} className='itemImage' />
      </div>
      <div style={{ margin: "auto 0" }}>
        <ul className='listUl'>
          <li ><div>{item.name}</div></li>
          <li className='liGenre'>{item.genres[0].name}</li>
        </ul>
      </div>
    </div>
  )
}

export default ResultItem
