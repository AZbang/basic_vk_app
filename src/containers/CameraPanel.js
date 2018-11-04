import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {Panel, PanelHeader, HeaderButton} from '@vkontakte/vkui';
import Icon24Add from '@vkontakte/icons/dist/24/add';

class CameraPanel extends React.Component {
  cameraStream = null;

  render() {
    return (
      <Panel id={this.props.id}>
        <PanelHeader right={<HeaderButton onClick={this.openGallery.bind(this)}>{<Icon24Add />}</HeaderButton>}>
          Camera
        </PanelHeader>
        <video autoPlay id="stream-camera"></video>
      </Panel>
    )
  }
  componentDidMount() {
    const video = document.getElementById('stream-camera');
    video.width = window.innerWidth;

    navigator.mediaDevices.getUserMedia({audio: false, video: true})
      .then(stream => {
        console.log(stream)
        this.cameraStream = stream.getTracks()[0];
        video.srcObject = stream;
      })
      .catch(error => {
        console.log('getUserMedia() error', error);
      })
  }
  componentWillUnmount() {
    this.cameraStream.stop();
  }
  openGallery() {
    this.props.dispatch(push('/gallery'));
  }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(CameraPanel);
