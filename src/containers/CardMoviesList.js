import React from 'react'
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';
import CardMovie from '../components/CardMovie';
import {addBookmarks, removeBookmarks} from '../actions';

class CardMoviesList extends React.Component {
  getCardMoviesList = () => (
    this.props.movies.map((movie) => (
      <Col xs={6} key={movie.id}>
        <CardMovie isBookmarks={this.props.bookmarks.some((m) => m.id === movie.id)} onRemoveBookmarks={() => this.removeBookmarks(movie)} onAddBookmarks={() => this.addBookmarks(movie)} data={movie}/>
      </Col>
    ))
  )

  addBookmarks = (movie) => {
    this.props.dispatch(addBookmarks(movie));
  }
  removeBookmarks = (movie) => {
    this.props.dispatch(removeBookmarks(movie));
  }

  render = () => (
    <Grid fluid className='card-movies-list'>
      <Row>
        {this.getCardMoviesList()}
      </Row>
    </Grid>
  )
}

function mapStateToProps(state) {
  return {
    bookmarks: state.movies.bookmarks
  }
}

export default connect(mapStateToProps)(CardMoviesList);
