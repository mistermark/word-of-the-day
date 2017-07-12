var configLocal         = require('./local');

module.exports = {
  "site": {
    "title": configLocal.view.site.title,
  },
  "page": {
    "title": configLocal.view.pages.index.title,
    "description": configLocal.view.pages.index.description,
  },
  "notfound": {
    "title": configLocal.view.pages.notfound.title,
    "message": configLocal.view.pages.notfound.message,
    "urlLabel": configLocal.view.pages.notfound.urlLabel,
  }
}
