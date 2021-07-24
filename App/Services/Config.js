import Network from '../Network/Network'

const API_URLS = Object.freeze({
  baseURL: 'https://api.themoviedb.org/3/',
  upcomingMovies: 'movie/upcoming',
  popularMovies: 'movie/popular',
  topRatedMovies: 'movie/top_rated',
  genreList: 'genre/movie/list',
  movieDetails: id => `movie/${id}`,
  movieCredits: id => `movie/${id}/credits`
})

const BASE_IMAGE_URL = 'https://www.themoviedb.org/t/p/w1280'

const API_HEADERS = undefined

const API_PARAMS = {
  api_key: '4f298a53e552283bee957836a529baec'
}

function onInternetConnectionFail() {
  // show a toast or something
}

const NetworkInstance = new Network({
  baseURL: API_URLS.baseURL,
  commonHeaders: API_HEADERS,
  onInternetConnectionFail: onInternetConnectionFail
})

export { NetworkInstance, API_URLS, API_PARAMS, BASE_IMAGE_URL }
