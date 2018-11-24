import React from 'react'
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
import {getImage} from '../getters'
import './CardMovie.css'

class CardMovie extends React.Component {
  render = () => (
    <div className="card-movie" style={{backgroundImage: 'url(' + getImage(this.props.data.poster_path) + ')'}}>
      <span className="card-movie__bookmarks" onClick={this.props.isBookmarks ? this.props.onRemoveBookmarks : this.props.onAddBookmarks}>
        {this.props.isBookmarks ? <Icon24Favorite fill="#5181B8"/> : <Icon24FavoriteOutline fill="#5181B8"/>}
      </span>
    </div>
  )
}

export default CardMovie;
