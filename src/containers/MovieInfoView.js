import React from 'react';
import {connect} from 'react-redux';
import {View, Panel, Group} from '@vkontakte/vkui';
import CardMovie from '../components/CardMovie';
import {addBookmarks, removeBookmarks} from '../actions';

class MovieInfoView extends React.Component {
  addBookmarks = () => {
    this.props.dispatch(addBookmarks(this.props.movie));
  }
  removeBookmarks = () => {
    this.props.dispatch(removeBookmarks(this.props.movie));
  }

  render = () => (
    <View id={this.props.id}>
      <Panel id={this.props.id}>
        <div style={{marginTop: '-60px'}}>
          <CardMovie
            isBookmarks={this.props.bookmarks.some((m) => m.id === this.props.movie.id)}
            onRemoveBookmarks={this.removeBookmarks}
            onAddBookmarks={this.addBookmarks}
            data={this.props.movie}/>
        </div>
        <Group title={this.props.movie.title}>
          {this.props.movie.desctription}
        </Group>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    movie: state.movies.movie,
    bookmarks: state.movies.bookmarks
  }
}

export default connect(mapStateToProps)(MovieInfoView);
