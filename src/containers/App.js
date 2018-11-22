import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {ConfigProvider, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon28KeyboardBotsOutline from '@vkontakte/icons/dist/28/keyboard_bots_outline';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
import {isWebView} from '@vkontakte/vkui/src/lib/webview';
import '@vkontakte/vkui/dist/vkui.css';

import AddView from './AddView';
import MainView from './MainView';
import BookmarksView from './BookmarksView';

class App extends React.Component {
  onStoryChange = (e) =>
    this.props.dispatch(push('/' + e.currentTarget.dataset.story));

  render() {
    let activeRoute = this.props.pageId || 'main';

    return (
      <ConfigProvider insets={this.props.insets} isWebView={isWebView}>
        <Epic activeStory={activeRoute} tabbar={
          <Tabbar>
            <TabbarItem
               onClick={this.onStoryChange}
               selected={activeRoute === 'add'}
               data-story="add"
            ><Icon28AddOutline/></TabbarItem>
            <TabbarItem
               onClick={this.onStoryChange}
               selected={activeRoute === 'main'}
               data-story="main"
               label="12"
            ><Icon28KeyboardBotsOutline/></TabbarItem>
            <TabbarItem
               onClick={this.onStoryChange}
               selected={activeRoute === 'bookmarks'}
               data-story="bookmarks"
            ><Icon24FavoriteOutline/></TabbarItem>
          </Tabbar>
        }>
          <MainView id="main" accessToken={this.props.accessToken}/>
          <AddView id="add" accessToken={this.props.accessToken}/>
          <BookmarksView id="bookmarks" accessToken={this.props.accessToken}/>
        </Epic>
      </ConfigProvider>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App);
