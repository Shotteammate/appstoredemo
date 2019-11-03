import React from 'react';
import './ListItem.css';

const ListItem = ({ listItem, order }) => {

  let imageClass = order % 2 === 0 ? ('listImage' + ' circle') : 'listImage';

  const getRatings = (rating) => {
    // Get percentage
    const starPercentage = (rating / 5) * 100;
    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    // Set width of stars-inner to percentage
    return starPercentageRounded;
  }

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
          <li >
            <div className="stars-outer">
              <div className="stars-inner" style={{width:`${getRatings(listItem.starRating)}`}}></div>
            </div> {}
            {/* {listItem.starRating} */}
            <span style={{ color: 'grey' }}>({listItem.userCount})</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ListItem;


