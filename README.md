# Word of the Day API

Small Node app to display a "Word of the Day" with a submit form to add words with a defined language.

## Requirements

Before installing and running this app you will need the following other components installed:

- [MongoDB](https://docs.mongodb.com/master/administration/install-community/)
- [NodeJS](https://nodejs.org/en/download/)

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

## CAUTION: Scripts for Development Only Below!

* `api-get-all.sh`: Get all words existing in database.
* `api-get-single.sh`: Get a single word defined by input. Example: `sh api-get-single.sh forest`.
* `api-get-wotd.sh`: Get current word of the day.
* `api-remove-single.sh`: Remove a single word defined by input. Example: `sh api-remove-single.sh forest`.
* `api-reset.sh`: Reset current database and fill it with sample data.
* `api-setround.sh`: Set current active rotation round for Word of the Day rotation.
* `api-settings-delete.sh`: Delete current settings.
* `api-settings-get.sh`: Get current settings.
* `api-settings-reset.sh`: Reset current settings to default.

## Improvements

### Structure

1. Clone word-of-the-day for the web client
2. Install the API to run the WOTD API (npm i -g word-of-the-day-api)
3. Run the API service (wotd run)
4. Run the web client, or connect to the API from another webapp
