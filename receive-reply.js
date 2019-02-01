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
  var handler = function (msg) {
    console.log(msg)
    platform.post('/account/~/extension/~/sms', {
      from: { phoneNumber: process.env.RINGCENTRAL_USERNAME },
      to: [
        { phoneNumber: msg.body.from.phoneNumber }
      ],
      text: 'This is an automatic reply'
    }).then(response => {
      console.log('SMS replied: ' + response.json().id)
    }).catch(e => {
      console.error(e)
    })
  }
  const subscription = rcsdk.createSubscription()
  subscription.on(subscription.events.notification, handler)
  subscription
    .setEventFilters(['/account/~/extension/~/message-store/instant?type=SMS'])
    .register().then(response => {
      console.log(response.json())
    })
}).catch(e => {
  console.error(e)
})
