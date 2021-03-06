import { FETCH_RECOMMENDED, FETCH_APPLIST, SET_SCROLLING_FALSE, SET_SCROLLING_TRUE } from './types';
import axios from 'axios';

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
    .then(listedApps => {
      dispatch({
        type: FETCH_APPLIST,
        payload: listedApps
      });
      dispatch({
        type: SET_SCROLLING_FALSE,
        payload: false
      })
    })
    .catch(err => console.log('fetchAppList: ', err))
}

export const setIsScrolling = () => ({
  type: SET_SCROLLING_TRUE,
  payload: true
})