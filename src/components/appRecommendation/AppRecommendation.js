import React from 'react';
import RecommendItem from './RecommendItem';
import './AppRecommendation.css';

const AppRecommendation = ({ recommendedList }) => {
  //console.log("Marker label: ",recommendedList);
  const list = recommendedList.map(listItem => (
    <RecommendItem key={listItem.artistId} listItem={listItem} />
  ));

  return (
    <div>
      <h3>推介</h3>
      <div className="recommendation-container"> 
        {list}
      </div>
    </div>
  )
}

export default AppRecommendation;
