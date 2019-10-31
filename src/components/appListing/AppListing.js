import React from 'react';
import ListItem from './ListItem';
import './AppListing.css';

const AppListing = ({ appList }) => {
  //console.log("Marker label: ", appList);
  const list = appList.map(listItem => (
    <ListItem key={listItem.artistId} listItem={listItem} />
  ));

  return (
    <div>
      <div className="appListing-container">
        {list}
      </div>
    </div>
  )
}

export default AppListing;
