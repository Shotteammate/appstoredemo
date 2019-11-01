import React, { Component } from 'react';
import Search from './Search';
import AppRecommendation from './appRecommendation/AppRecommendation';
import AppListing from './appListing/AppListing';
import { connect } from 'react-redux';
import { fetchRecommended, fetchAppList } from '../actions/actions';

class Dashboard extends Component {
  state = {
    startPoint: 0,
    currentItem: 10,
    endPoint: 100,
    scrolling: false
  }

  loadMore = () => {
    if (this.state.currentItem <= 100) {
      //console.log("currentItem: ", this.state.currentItem)
      this.setState({
        ...this.state,
        currentItem: this.state.currentItem + 10
      }, () => (this.props.fetchAppList(this.state.currentItem))); //callback
    } else {
      //console.log("Already 100 items")
    }
  }

  componentDidMount() {
    this.props.fetchRecommended();
    this.props.fetchAppList(this.state.currentItem);
    this.scrollListener = window.addEventListener('scroll', (e) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && this.state.currentItem <100) {
        //console.log("here is bottom");
        this.loadMore();
      }
    });
  }

  render() {
    //console.log(this.props.appList);
    const { recommendedList, appList } = this.props;

    return (
      <div>
        <Search />
        <AppRecommendation recommendedList={recommendedList} />
        <hr style={{ borderColor: 'white' }} />
        <AppListing id='appListing' appList={appList} />
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
