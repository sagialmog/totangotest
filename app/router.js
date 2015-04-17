import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('results', { path: '/results/:query_str' });
  this.route('videos', { path: '/videos/:video_id' });
});
