const SDK = require('ringcentral')
const dotenv = require('dotenv')

dotenv.config()

const rcsdk = new SDK({
  server: process.env.RINGCENTRAL_SERVER_URL,
  appKey: process.env.RINGCENTRAL_CLIENT_ID,
  appSecret: process.env.RINGCENTRAL_CLIENT_SECRET
})

const platform = rcsdk.platform()

platform.login({
  username: process.env.RINGCENTRAL_USERNAME,
  extension: process.env.RINGCENTRAL_EXTENSION,
  password: process.env.RINGCENTRAL_PASSWORD
}).then(response => {
  platform.get('/account/~/extension/~/message-store', {
    dateFrom: '2018-04-20T06:33:00.000Z'
  }).then(response => {
    const messages = response.json().records
    console.log(`Retrieving ${messages.length} messages`)
    const message = messages[0]
    platform.put(`/account/~/extension/~/message-store/${message.id}`, {
      readStatus: 'Read'
    }).then(response => {
      console.log(`Message status has been changed to ${response.json().readStatus}`)
    }).catch(e => {
      console.error(e)
    })
    platform.delete(`/account/~/extension/~/message-store/${message.id}`).then(response => {
      console.log(`Message ${message.id} has been deleted`)
    }).catch(e => {
      console.error(e)
    })
  }).catch(e => {
    console.error(e)
  })
}).catch(e => {
  console.error(e)
})
