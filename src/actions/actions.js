import { FETCH_RECOMMENDED, FETCH_APPLIST } from './types';
import axios from 'axios';

//console.log("axios: ", res.data.feed.results);
export const fetchRecommended = () => dispatch => {
  axios.get('https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-grossing/all/10/explicit.json')
    .then(res => res.data.feed.results.map(recommendedApp => (
      {
        id: `${recommendedApp.id}`,
        name: `${recommendedApp.name}`,
        appIcon: `${recommendedApp.artworkUrl100}`,
        genre: `${recommendedApp.genres[0].name}`,
        author: `${recommendedApp.artistName}`
      }
    ))).then(recommendedApps => dispatch({
      type: FETCH_RECOMMENDED,
      payload: recommendedApps
    }))
    .catch(err => console.log('fetchRecommended: ', err))
}

export const fetchAppList = (num) => dispatch => {
  axios.get(`https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-free/all/${num}/explicit.json`)
    //get all apps'id in form of int array which return from 'map' by default
    .then(res => res.data.feed.results.map(app => (parseInt(app.id))))
    .then(appIds => axios.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/hk/lookup?id=${appIds}`))
    .then(res => res.data.results.map(listedApp => (
      {
        id: `${listedApp.trackId}`,
        name: `${listedApp.trackName}`,
        appIcon: `${listedApp.artworkUrl100}`,
        genre: `${listedApp.genres[0]}`,
        author: `${listedApp.artistName}`,
        starRating: `${listedApp.averageUserRating}`,
        userCount: `${listedApp.userRatingCount}`
      }
    )))
    //.then(results => console.log('results: ', results))
    .then(listedApps => dispatch({
      type: FETCH_APPLIST,
      payload: listedApps
    }))
    .catch(err => console.log('fetchAppList: ', err))
}
