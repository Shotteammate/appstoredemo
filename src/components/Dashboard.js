import React, { Component } from 'react';
import Search from './searchBar/Search';
import AppRecommendation from './appRecommendation/AppRecommendation';
import AppListing from './appListing/AppListing';
import { connect } from 'react-redux';
import { fetchRecommended, fetchAppList, setIsScrolling } from '../actions/actions';
import SearchResult from './searchResult/SearchResult';
import Loader from 'react-loader';

class Dashboard extends Component {
  state = {
    startPoint: 0,
    currentItem: 10,
    isFirstTime: true,
    searchInput: '',
  }

  handleScroll = () => {
    if(this.props.isScrolling) {
      console.log("is Scrolling, return");
      return;
    } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && this.state.currentItem < 100 && (this.state.searchInput === '' || this.state.searchInput === null)) {
      this.loadMore();
    } else if (this.state.currentItem >= 100 && (this.state.searchInput === '' || this.state.searchInput === null)) {
      document.getElementById('loading').style.display = 'none';
    }
  }

  loadMore = () => {
    document.getElementById('loading').style.display = 'block';
    this.props.setIsScrolling();

    this.setState({
      currentItem: this.state.currentItem + 10
    }, () => {
      this.props.fetchAppList(this.state.currentItem);
    });
  }

  componentDidMount() {
    this.props.fetchRecommended();
    this.props.fetchAppList(this.state.currentItem);
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e);
    });
  }


  handleSearchEvent = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { recommendedList, appList, loaded } = this.props;
    const combinedList = recommendedList.concat(appList);
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
          <Loader loaded={loaded} > 
            <AppRecommendation recommendedList={recommendedList} />
            <hr style={{ borderColor: 'white' }} />
            <AppListing id='appListing' appList={appList} />
          </Loader>
          <div id='loading' style={{ display: 'none' }}>
            <div className="fa-3x">   
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
  return {
    recommendedList: state.rootRD.recommendedList,
    appList: state.rootRD.appList,
    loaded: state.rootRD.loaded,
    isScrolling: state.rootRD.isScrolling
  }
}

const mapDispatch = {
  fetchRecommended,
  fetchAppList,
  setIsScrolling
}

export default connect(mapState, mapDispatch)(Dashboard);
