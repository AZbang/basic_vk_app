export function searchMovies(query) {
  return {type: 'FETCH_SEARCH_MOVIES', query}
}

export function getPopularMovies() {
  return {type: 'FETCH_POPULAR_MOVIES'}
}

export function addBookmarks(movie) {
  return {type: 'ADD_TO_BOOKMARKS', movie}
}

export function removeBookmarks(movie) {
  return {type: 'REMOVE_FROM_BOOKMARKS', movie}
}
