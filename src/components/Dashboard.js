import React, { Component } from 'react';
import Search from './Search';
import AppRecommendation from './appRecommendation/AppRecommendation';
import AppListing from './appListing/AppListing';
import { connect } from 'react-redux';
import { fetchRecommended } from '../actions/actions';

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchRecommended();
  }

  render() {
    //console.log(this.props);
    const {recommendedList} = this.props;

    return (
      <div>
        <Search />
        <AppRecommendation recommendedList={recommendedList}/>
        <AppListing />
      </div>
    )
  }
}

const mapState = (state) => {
  //console.log(state);
  return {
    recommendedList: state.recommendRD.recommendedList
  }
}

const mapDispatch = {
  fetchRecommended: fetchRecommended
}

export default connect(mapState, mapDispatch)(Dashboard);
