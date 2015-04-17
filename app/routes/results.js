import Ember from 'ember';
import config from '../config/environment';
import Video from '../models/video';

export default Ember.Route.extend({
  model: function(params){
  	var url = config.youtubeApiURL + "/search?key="+ config.youtubeApiKey + "&part=snippet&maxResults=10&q=" + params['query_str'];
  	return $.getJSON(url).then(
      function(data) {
        return data.items.map(function (item) {
            return Video.create({
              id: item.id.videoId,
              img: item.snippet.thumbnails.default.url,
              title: item.snippet.title
            });
        });
      }
    );
  },
  serialize: function( model ) {
    return { id: model.get('id') };
  }
});