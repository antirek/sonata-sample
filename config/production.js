module.exports = {
  settings: {
    mongodb: 'mongodb://mongodb:27017/sonata',
  },
  logs: {
    mongodb: 'mongodb://mongodb:27017/sonata_log',
  },
  provision: {
    port: 3020,
  },
  manage: {
    port: 3021,
  },
  url: {
    provision: 'http://provision.myserver.com',
  },
  remove: {
    cron: '0 4 * * *',
  }
};
