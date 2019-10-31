import React, { Component } from 'react';
import Search from './Search';
import AppRecommendation from './appRecommendation/AppRecommendation';
import AppListing from './appListing/AppListing';
import { connect } from 'react-redux';
import { fetchRecommended, fetchAppList } from '../actions/actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchRecommended();
    this.props.fetchAppList();
  }

  render() {
    //console.log(this.props);
    const { recommendedList, appList } = this.props;

    return (
      <div>
        <Search />
        <AppRecommendation recommendedList={recommendedList} />
        <hr style={{ borderColor: 'white' }} />
        <AppListing appList={appList} />
      </div>
    )
  }
}

const mapState = (state) => {
  //console.log(state);
  return {
    recommendedList: state.rootRD.recommendedList,
    appList: state.rootRD.appList
  }
}

const mapDispatch = {
  fetchRecommended: fetchRecommended,
  fetchAppList: fetchAppList
}

export default connect(mapState, mapDispatch)(Dashboard);
