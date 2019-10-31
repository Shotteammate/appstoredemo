import { FETCH_RECOMMENDED } from './types';

export const fetchRecommended = () => dispatch => {
  fetch('https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-grossing/all/10/explicit.json')
    .then(res => res.json())
    .then(data => dispatch({
      //console.log("in fetchRecommended:",data.feed.results)
      //console.log(data.feed.results[0].genres[0].name)
      //data.feed.results is an array
      type: FETCH_RECOMMENDED,
      payload: data.feed.results
    }))
}
