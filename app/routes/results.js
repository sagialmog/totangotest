import Ember from 'ember';
import config from '../config/environment';
import Video from '../models/video';

export default Ember.Route.extend({
  //load playListFrom localStorage;
  beforeModel: function(transition){
    this.controllerFor('results').set('playList' , []);
    var storedItems =  JSON.parse(localStorage.getItem('playList'));
    if (storedItems){
        var items = this.controllerFor('results').get('playList');
        storedItems.forEach(function(item){
          var video = Video.create({
            id: item.id,
            img: item.img,
            title: item.title,
            isInPlayList: true
          });
          items.pushObject(video);
      });
    }
  },
  model: function( params ){
  	var url = config.youtubeApiURL + "/search?key="+ config.youtubeApiKey + "&part=snippet&maxResults=10&q=" + params['query_str'];
  	var selfController = this.controllerFor('results');
    return $.getJSON(url).then(
      function(data) {
        var mergedData = [];
        var video = null;
        //merge data from YouTube search  + localStorage data;
        data.items.forEach(function(item){
            if (selfController.get('playList').filterProperty('id' , item.id.videoId) == 0){
              video =  Video.create({
                id: item.id.videoId,
                img: item.snippet.thumbnails.default.url,
                title: item.snippet.title,
                isInPlayList : false
                });
            }
            else{
              video = selfController.get('playList').filterProperty('id' , item.id.videoId)[0];
            }
            mergedData.pushObject(video);
        });
        return mergedData;
      }
    );
  },
  serialize: function( model ) {
    return { id: model.get('id') };
  }
});