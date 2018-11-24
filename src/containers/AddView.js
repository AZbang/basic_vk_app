import React from 'react';
import {connect} from 'react-redux';
import {View, Panel, PanelHeader, Group} from '@vkontakte/vkui';
import {searchMovies} from '../actions';

class AddView extends React.Component {
  componentDidMount() {
    this.props.dispatch(searchMovies('Шучу'));
  }

  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <PanelHeader>#ЧТОПОСМОТРЕТЬ</PanelHeader>

        <Group title="СОВЕТУЮ ФИЛЬМ">
        </Group>

        <Group title="ПОСОВЕТУЙТЕ ФИЛЬМ">
        </Group>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(AddView);
