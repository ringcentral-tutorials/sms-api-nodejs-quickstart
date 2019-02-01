# SMS Application Walk-through

Welcome to the SMS Application Walk-through and tour of a fully functional SMS application powered by RingCentral. In this walk through you will learn:

* How to setup your repository to work with multiple environments.
* How to send a simple SMS.
* How to send a image in an SMS message, a.k.a. "MMS."
* How to track the delivery state of a message.
* How to modify the message history.
* How to reply to an SMS message. 

## Setup and Installation

**Prerequisites**

- Node.js >= 8.10
- Yarn

### Setup the Project

```
git clone git@github.com:ringcentral-tutorials/sms-api-nodejs-quickstart.git
cd sms-api-nodejs-quickstart
yarn install
```

### Create Your Proxy

If you are developing on your local machine, you may need to create a proxy/tunnel to the outside world so that your bot can receive webhooks properly. You can do this easily by executing the following command in a separate terminal:

```
cd sms-api-nodejs-quickstart
yarn proxy
```

*Make note of the ngrok HTTPS URL for use later.*

### Create Your SMS App

Once you have a local server running, you need to create an App inside of RingCentral. This can be done easily by clicking the link/button below:

<a target="_new" href="https://developer.ringcentral.com/new-app?name=Sample+SMS+App&desc=A+sample+app+created+by+the+SMS+App+Walk-through&public=false&type=ServerOther&carriers=7710,7310,3420&permissions=SMS,ReadMessages&redirectUri=" class="btn btn-primary">Create SMS App</a>

After clicking the link above, you will have the opportunity to enter in your Callback URL. Enter in the URL that was created for me when you setup your local proxy via ngrok.

## Contributing

This repository is not only a fully functional application, but also a tutorial that can be viewed online at https://ringcentral-tutorials.github.io/sms-api-nodejs-quickstart/. If you would like to contribute to the documentation effort, clone this repository and run the documentation server locally via the following commands:

```
$ yarn install
$ yarn docs
```

Then visit http://localhost:8888 to read this tutorial locally.

You can edit docs/tutorial/index.jade and refresh http://localhost:8888 to see your changes.

