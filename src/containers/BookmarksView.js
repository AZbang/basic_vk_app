import React from 'react';
import {connect} from 'react-redux';
import {View, Panel, PanelHeader, Group} from '@vkontakte/vkui';
import CardMoviesList from './CardMoviesList';

class BookmarksView extends React.Component {
  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <PanelHeader>#ЧТОПОСМОТРЕТЬ</PanelHeader>

        <Group title="ХОЧУ ПОСМОТРЕТЬ">
          <CardMoviesList movies={this.props.bookmarks}/>
        </Group>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    bookmarks: state.movies.bookmarks
  }
}

export default connect(mapStateToProps)(BookmarksView);
