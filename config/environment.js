/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'totangotest',
    environment: environment,
    baseURL: '/',
    youtubeApiURL: 'https://www.googleapis.com/youtube/v3',
    youtubeEmbedURL: "http://www.youtube.com/embed",
    youtubeApiKey:'AIzaSyCeF6B4F5kDd219G3tYN21Ch8sE4P6Ba7k',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
     contentSecurityPolicy: {
      'default-src': "*",
      'script-src': "*",
      'font-src': "*",
      'connect-src': "*",
      'img-src': "*",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
