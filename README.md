# My Clash Of Clans Stats - web app that fetches real-time clan stats

## Deployed app on Heroku dyno
http://clash-of-clans-api.herokuapp.com/

## Stack
- [Express.js](https://expressjs.com/) `4.14.0` to run the Node.js web application
- [Nodemon](http://nodemon.io/) `1.10.12` to monitor for any changes in the source and automatically restart the server
- [Morgan](https://expressjs.com/en/resources/middleware/morgan.html) `1.7.0` to log HTTP requests for node.js
- [Body-parser](https://expressjs.com/en/resources/middleware/body-parser.html) `0.12.7` to parse the request body for Node.js
- [Moment.js](http://momentjs.com/) `2.15.0` to parse, validate, manipulate, and display dates in JavaScript
- [Webpack](https://webpack.github.io/) `1.13.2` to take modules with dependencies and emits static assets representing those modules

## For Developers
### Requirements
- [Node.js](https://nodejs.org) `6.x` or newer
- [npm](https://docs.npmjs.com/getting-started/installing-node) `3.8.6` or newer
- [Clash of Clans Development Account](https://developer.clashofclans.com) API key is needed to run the project on localhost

### Get the source code
Clone the repo and install node components in package.json
```shell
$ git clone https://github.com/aganita/clash-of-clans-d3.git my-clan-stats
$ cd my-clan-stats
$ npm install
```

### Create Clash of Clans API key
- Get you [public IP]
```shell
$ wget http://ipinfo.io/ip -qO -
```
- Register at https://developer.clashofclans.com/#/register
- Login 
- Go to https://developer.clashofclans.com/#/account 
- Name your key, write short description, paste your [public IP]
- Create Key
- Copy the [generated token] 

### Set up .env file with API URL and key
```shell
$ touch .env
$ echo export COC_KEY=[generated token] >> .env
$ echo export COC_CLAN_ID_PATH=https://api.clashofclans.com/v1/clans/%23 >> .env
$ source .env
```
### Start the application
```shell
$ npm start
```
go to http://localhost:3030/

