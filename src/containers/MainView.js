import React from 'react';
import {connect} from 'react-redux';
import {View, Panel, PanelHeader, Group, Spinner} from '@vkontakte/vkui';
import CardMoviesList from './CardMoviesList';
import {getPopularMovies} from '../actions';

class MainView extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPopularMovies())
  }

  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <PanelHeader>#ЧТОПОСМОТРЕТЬ</PanelHeader>
        <Group title="НОВИНКИ КИНО">
          <CardMoviesList movies={this.props.popular}/>
        </Group>
        {this.props.loading ? (<div style={{height: 100}}><Spinner/></div>) : null}
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    popular: state.movies.popular,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(MainView);
