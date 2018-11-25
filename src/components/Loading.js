import React from 'react';
import {Spinner} from '@vkontakte/vkui';

class Loading extends React.Component {
  render = () =>
    this.props.show ? (<div style={{height: 100}}><Spinner/></div>) : null
}

export default Loading;
