import React from 'react';
import ListItem from './ListItem';
import './AppListing.css';

const AppListing = ({ appList }) => {
  //console.log("Marker label: ", appList);
  let order = 0;
  const list = appList.map(listItem => {
    order = order+1;
    return <ListItem key={listItem.id} listItem={listItem} order={order}/>
  });

  return (
    <div>
      <div className="appListing-container">
        {list}
      </div>
    </div>
  )
}

export default AppListing;
