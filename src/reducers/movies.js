import Immutable from 'seamless-immutable';

const initialState = Immutable({
  searchQuery: '',
  search: [],
  bookmarks: [{
    cover: 'src',
    title: '',
    peoples: ['id', 'id'],
    description: '',
    link: 'imdb'
  }],
  friends: [],
  all: []
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCH_MOVIES':
      return state.merge({searchQuery: action.query})
    case 'SET_SEARCH_MOVIES':
      return state.merge({search: action.data});
    default:
      return state;
  }
}

export default reducer;
