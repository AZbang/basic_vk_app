import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {Panel, PanelHeader, Group, List, Cell, Avatar, Gallery, HeaderButton} from '@vkontakte/vkui';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/cancel';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import { colors } from '@vkontakte/vkui';

class GalleryPanel extends React.Component {
  render() {
    return (
      <Panel id={this.props.id}>
        <PanelHeader left={<HeaderButton onClick={this.openCamera.bind(this)}>{<Icon24Add />}</HeaderButton>}>
          Gallery
        </PanelHeader>

        <Group title="ALL IMAGES">
          <Gallery slideWidth="90%" style={{ height: 150 }}>
            <div style={{ height: 150, backgroundColor: colors.red }} />
            <div style={{ height: 150, backgroundColor: colors.green }} />
            <div style={{ height: 150, backgroundColor: colors.blue_300 }} />
          </Gallery>
        </Group>
        <Group title="image" description="Используется для остальных случаев. Например, для музыки и плейлистов.">
          <List>
            <Cell before={<Avatar type="image" src="https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg" />} description="Arctic Monkeys" asideContent={<Icon24MoreHorizontal fill={colors.accentBlue}/>}>I Wanna Be Yours</Cell>
            <Cell before={<Avatar type="image" src="https://pp.userapi.com/c845220/v845220642/7cacc/XzhH5b7FSKY.jpg" />} description="Лето (звери)" asideContent={<Icon24MoreHorizontal fill={colors.accentBlue}/>}>6 утра</Cell>
            <Cell before={<Avatar type="image" src="https://pp.userapi.com/c837628/v837628453/39175/4JRjMaFvCrw.jpg" />} description="Depeche Mode" asideContent={<Icon24MoreHorizontal fill={colors.accentBlue}/>}>Enjoy the Silence</Cell>
          </List>
        </Group>
      </Panel>
    )
  }
  openCamera() {
    this.props.dispatch(push('/camera'));
  }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(GalleryPanel);
