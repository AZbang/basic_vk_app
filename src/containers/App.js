import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ConfigProvider, Root, View} from '@vkontakte/vkui';
import {isWebView} from '@vkontakte/vkui/src/lib/webview';
import '@vkontakte/vkui/dist/vkui.css';

import * as vkSelectors from '../store/vk/reducer';
import * as vkActions from '../store/vk/actions';
import CameraPanel from './CameraPanel';
import GalleryPanel from './GalleryPanel';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(vkActions.initApp());
    this.props.dispatch(vkActions.fetchAccessToken());
  }

  render() {
    let routes = {
      'gallery': 'galleryPanel',
      'camera': 'cameraPanel',
      'default': 'galleryPanel'
    }

    return (
      <ConfigProvider insets={this.props.insets} isWebView={isWebView}>
        <Root activeView="mainView">
          <View id="mainView" activePanel={routes[this.props.pageId] || routes.default}>
            <GalleryPanel id="galleryPanel" accessToken={this.props.accessToken}/>
            <CameraPanel id="cameraPanel"/>
          </View>
        </Root>
      </ConfigProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    accessToken: vkSelectors.getAccessToken(state),
    insets: vkSelectors.getInsets(state),
  }
}

export default connect(mapStateToProps)(App);
