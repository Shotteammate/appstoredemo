import React from 'react';
import RecommendItem from './RecommendItem';
import './AppRecommendation.scss';

const AppRecommendation = ({ recommendedList }) => {
  const list = recommendedList.map(listItem => (
    <RecommendItem key={listItem.id} listItem={listItem} />
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
