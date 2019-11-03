import React, { Component } from 'react';
import Search from './searchBar/Search';
import AppRecommendation from './appRecommendation/AppRecommendation';
import AppListing from './appListing/AppListing';
import { connect } from 'react-redux';
import { fetchRecommended, fetchAppList } from '../actions/actions';
import SearchResult from './searchResult/SearchResult';

class Dashboard extends Component {
  state = {
    startPoint: 0,
    currentItem: 10,
    endPoint: 100,
    scrolling: false,
    searchInput: ''
  }

  loadMore = () => {
    if (this.state.currentItem <= this.state.endPoint) {
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

    //scroll listener: trigger load more
    this.scrollListener = window.addEventListener('scroll', (e) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && this.state.currentItem < this.state.endPoint && this.state.searchInput === '' || this.state.searchInput === null) {
        //console.log("here is bottom");
        this.loadMore();
      }
    });
  }

  handleSearchEvent = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    //console.log('appList: ', this.props.appList);
    const { recommendedList, appList } = this.props;
    const combinedList = recommendedList.concat(appList);
    //filtered list of apps for searching
    const filteredList = combinedList.filter((dataObj) => (
      (dataObj.name.indexOf(this.state.searchInput) !== -1) || (dataObj.author.indexOf(this.state.searchInput) !== -1) || (dataObj.genre.indexOf(this.state.searchInput) !== -1)
    ));

    if (this.state.searchInput === '' || this.state.searchInput === null) {
      return (
        <div>
          <Search
            searchInput={this.state.searchInput}
            handleSearchEvent={this.handleSearchEvent}
          />
          <hr style={{ borderColor: 'white' }} />
          <AppRecommendation recommendedList={recommendedList} />
          <hr style={{ borderColor: 'white' }} />
          <AppListing id='appListing' appList={appList} />
        </div>
      )
    } else {
      return (
        <div>
          <Search
            searchInput={this.state.searchInput}
            handleSearchEvent={this.handleSearchEvent}
          />
          <hr style={{ borderColor: 'white' }} />
          <SearchResult filteredList={filteredList} />
        </div>
      )
    }
    // return (
    //   <div>
    //     <Search />
    //     <AppRecommendation recommendedList={recommendedList} />
    //     <hr style={{ borderColor: 'white' }} />
    //     <AppListing id='appListing' appList={appList} />
    //   </div>
    // )
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
