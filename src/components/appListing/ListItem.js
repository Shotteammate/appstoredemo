import React from 'react';
import './ListItem.scss';

const ListItem = ({ listItem, order }) => {

  let imageClass = order % 2 === 0 ? 'listImage circle' : 'listImage';
  const userCount = listItem.userCount === 'undefined' ? 0:listItem.userCount;

  const getRatings = (rating) => {
    const starPercentage = (rating / 5) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    return starPercentageRounded;
  }

  const listItemStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flexStart'
  }

  return (
    <div className='appItem' style={listItemStyle}>
      <div className='order'>{order}</div>
      <div style={{ margin: "auto 0" }}>
        <img src={listItem.appIcon} alt='' className={imageClass} />
      </div>
      <div style={{ margin: "auto 0" }}>
        <ul className='listUl'>
          <li ><div>{listItem.name}</div></li>
          <li className='liGenre'>{listItem.genre}</li>
          <li >
            <div className="stars-outer">
              <div className="stars-inner" style={{ width: `${getRatings(listItem.starRating)}` }}></div>
            </div> 
            <span style={{ color: 'grey' }}>({userCount})</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ListItem;
