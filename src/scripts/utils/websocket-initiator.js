import NotifHelper from './notif-helper'
import CONFIG from '../globals/config'

const WebSocketInitiator = {
  init (url) {
    const webSocket = new WebSocket(url)
    webSocket.onmessage = this._onMessageHandler
  },

  _onMessageHandler (message) {
    NotifHelper.sendNotification({
      title: `restaurant hari ini ${message.data}`,
      options: {
        body: 'Ada rekomendasi restaurant baru untuk Anda',
        icon: './favicon.png',
        image: `${CONFIG.BASE_IMAGE_URL + message.data || CONFIG.BASE_IMAGE_URL + '03'}`,
        vibrate: [200, 100, 200]
      }
    })
  }
}

export default WebSocketInitiator
