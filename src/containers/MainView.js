import React from 'react';
import {connect} from 'react-redux';
import {View, Panel, PanelHeader, Group} from '@vkontakte/vkui';
import {getPopularMovies} from '../actions';
import CardMoviesList from './CardMoviesList';
import Loading from '../components/Loading';

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
        <Loading show={this.props.loading}/>
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
