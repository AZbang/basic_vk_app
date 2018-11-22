import React from 'react';
import {connect} from 'react-redux';
import {View, Panel, PanelHeader, Group} from '@vkontakte/vkui';
import {Grid, Row, Col} from 'react-flexbox-grid';
import CardMovie from '../components/CardMovie';

class MainView extends React.Component {
  getCardMoviesList = (amt) => (
    new Array(amt).fill(0).map((v, i) => (
      <Col xs={6} key={i}>
        <CardMovie/>
      </Col>
    ))
  )

  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <PanelHeader>#ЧТОПОСМОТРЕТЬ</PanelHeader>

        <Group title="СОВЕТЫ ДРУЗЕЙ">
          <Grid fluid>
            <Row>
              {this.getCardMoviesList(2)}
            </Row>
          </Grid>
        </Group>

        <Group title="ЧТО СМОТРЯТ СЕГОДНЯ">
          <Grid fluid>
            <Row>
              {this.getCardMoviesList(5)}
            </Row>
          </Grid>
        </Group>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(MainView);
