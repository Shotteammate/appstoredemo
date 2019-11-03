import React from 'react';
import './ListItem.css';

const ListItem = ({ listItem, order }) => {

  let imageClass = order%2 === 0? ('listImage'+ ' circle'):'listImage';

  return (
    <div className="listItem">
      <div className='order'>{order}</div>
      <div style={{ margin: "auto 0" }}>
        <img src={listItem.appIcon} alt='' className={imageClass} />
      </div>
      <div style={{ margin: "auto 0" }}>
        <ul className='listUl'>
          <li ><div>{listItem.name}</div></li>
          <li className='liGenre'>{listItem.genre}</li>
          <li className='liRating'>{listItem.starRating} ({listItem.userCount})</li>
        </ul>
      </div>
    </div>
  )
}

export default ListItem;


