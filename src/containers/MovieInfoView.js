import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {View, Panel, Group, Div, List, Cell, InfoRow} from '@vkontakte/vkui';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon16Recent from '@vkontakte/icons/dist/16/recent';
import CardMovie from '../components/CardMovie';
import {addBookmarks, removeBookmarks} from '../actions';

class MovieInfoView extends React.Component {
  componentDidMount() {
    !this.props.movie.title && this.props.dispatch(push('/main'));
  }

  addBookmarks = () => {
    this.props.dispatch(addBookmarks(this.props.movie));
  }
  removeBookmarks = () => {
    this.props.dispatch(removeBookmarks(this.props.movie));
  }

  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <div style={{marginTop: '-65px'}}>
          <CardMovie
            isBookmarks={this.props.bookmarks.some((m) => m.id === this.props.movie.id)}
            onRemoveBookmarks={this.removeBookmarks}
            onAddBookmarks={this.addBookmarks}
            data={this.props.movie}/>
        </div>
        <Group title={this.props.movie.title}>
          <Div>
            <InfoRow title="Описание">
              {this.props.movie.overview}
            </InfoRow>
          </Div>
          <List>
            <Cell before={<Icon16Recent/>}>
              <InfoRow title="Дата выхода">
                {this.props.movie.release_date || this.props.movie.first_air_date}
              </InfoRow>
            </Cell>
            <Cell before={<Icon16Like/>}>
              <InfoRow title="Оценка">
                {this.props.movie.vote_average}
              </InfoRow>
            </Cell>
          </List>
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
