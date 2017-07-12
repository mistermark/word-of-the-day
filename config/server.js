//=== app config ===
var configLocal         = require('./local');

module.exports = {
    port: configLocal.server.port,
    XOallowedDomains: configLocal.server.XOallowedDomains,
} 