import React, { Component } from 'react';
import Search from './searchBar/Search';
import AppRecommendation from './appRecommendation/AppRecommendation';
import AppListing from './appListing/AppListing';
import { connect } from 'react-redux';
import { fetchRecommended, fetchAppList } from '../actions/actions';
import SearchResult from './searchResult/SearchResult';
import Loader from 'react-loader';

class Dashboard extends Component {
  state = {
    startPoint: 0,
    currentItem: 10,
    isFirstTime: true,
    searchInput: '',
  }

  loadMore = () => {
    document.getElementById('loading').style.display = 'block';

    this.setState({
      currentItem: this.state.isFirstTime ? this.state.currentItem : this.state.currentItem + 10,
      isFirstTime: false
    }, () => (this.props.fetchAppList(this.state.currentItem))); //callback 
  }

  componentDidMount() {
    this.props.fetchRecommended();
    this.props.fetchAppList(this.state.currentItem);
    //scroll listener: trigger load more     //no change for code
    this.scrollListener = window.addEventListener('scroll', (e) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && this.state.currentItem < 100 && (this.state.searchInput === '' || this.state.searchInput === null)) {
        this.loadMore();
      } else if (this.state.currentItem >= 100 && (this.state.searchInput === '' || this.state.searchInput === null)) {
        document.getElementById('loading').style.display = 'none';
      }
    });
  }


  handleSearchEvent = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    //console.log('appList: ', this.props.appList);
    const { recommendedList, appList, loaded } = this.props;
    const combinedList = recommendedList.concat(appList);

    //filtered list of apps for searching   //toLowerCase() for case insensive checking, no extra array or data mutate
    const filteredList = combinedList.filter((dataObj) => (
      (dataObj.name.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1) || (dataObj.author.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1) || (dataObj.genre.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1)
    ));

    if (this.state.searchInput === '' || this.state.searchInput === null) {
      return (
        <div>
          <Search
            searchInput={this.state.searchInput}
            handleSearchEvent={this.handleSearchEvent}
          />
          <hr style={{ borderColor: 'white' }} />
          <Loader loaded={loaded} >   {/* loading */}
            <AppRecommendation recommendedList={recommendedList} />
            <hr style={{ borderColor: 'white' }} />
            <AppListing id='appListing' appList={appList} />
          </Loader>
          <div id='loading' style={{ display: 'none' }}>
            <div className="fa-3x">         {/* Font awesome 5 free */}
              <i className="fas fa-spinner fa-pulse"></i>
            </div>
          </div>
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
  }
}

const mapState = (state) => {
  //console.log(state);
  return {
    recommendedList: state.rootRD.recommendedList,
    appList: state.rootRD.appList,
    loaded: state.rootRD.loaded,
  }
}

const mapDispatch = {
  fetchRecommended: fetchRecommended,
  fetchAppList: fetchAppList,
}

export default connect(mapState, mapDispatch)(Dashboard);
