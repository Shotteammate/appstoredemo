import { FETCH_RECOMMENDED, FETCH_APPLIST } from './types';

export const fetchRecommended = () => dispatch => {
  fetch('https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-grossing/all/10/explicit.json')
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.feed.results.map(recommendedApp => (
      {
        id: `${recommendedApp.id}`,
        name: `${recommendedApp.name}`,
        appIcon: `${recommendedApp.artworkUrl100}`,
        genre: `${recommendedApp.genres[0].name}`,
        author: `${recommendedApp.artistName}`
      }
    )))
    .then(recommendedApps => dispatch({
      //console.log("in fetchRecommended:",data.feed.results)
      type: FETCH_RECOMMENDED,
      payload: recommendedApps
    }))
    .catch(err => console.log('fetchRecommended: ', err))
}

export const fetchAppList = (num) => dispatch => {
  fetch(`https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-free/all/${num}/explicit.json`)
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.feed.results.map(listedApp => (
      {
        id: `${listedApp.id}`,
        name: `${listedApp.name}`,
        appIcon: `${listedApp.artworkUrl100}`,
        genre: `${listedApp.genres[0].name}`,
        author: `${listedApp.artistName}`
      }
    )))
    .then(listedApps => dispatch({
      type: FETCH_APPLIST,
      payload: listedApps
    }))
    .catch(err => console.log('fetchAppList: ', err))
}
