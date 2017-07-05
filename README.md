# word-of-the-day
Small Node app to display a "word of the day" with a submit form to add words

## Requirements

Before installing and running this app you will need the following other components installed:

- MongoDB
- NodeJS

## Installation

To install the app run the following command:
```
npm install -g word-of-the-day-api
```

To run the app run the following command:

```
wotd run
```

If you want to run the app in the background you can configure to run at server start by following this guide (Linux): 
[Install and Start Services](https://certsimple.com/blog/deploy-node-on-linux#-a-name-node-linux-service-systemd-a-install-and-start-services)

## Structure

1. Clone word-of-the-day for the web client
2. Install the API to run the DB API (npm i -g word-of-the-day-api)
3. Run the API service (wotd run)
4. Run the web client, or connect to the API from another webapp