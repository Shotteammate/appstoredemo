import React from 'react';
import './ListItem.css';

const ListItem = ({listItem}) => {
  return (
    <div className="listItem">
      <div className='order'>0</div> 
      <div style={{margin:"auto 0"}}><img src={listItem.artworkUrl100} className='listImage' /></div>
      <div style={{margin:"auto 0"}}>
        <ul className='listUl'>
          <li ><div>{listItem.name}</div></li>
          <li className='liGenre'>{listItem.genres[0].name}</li>
          <li className='liRating'>rating (#)</li>
        </ul>
      </div>
    </div>
  )
}

export default ListItem;
