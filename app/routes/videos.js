import Ember from 'ember';
import config from '../config/environment';
import Video from '../models/video';

export default Ember.Route.extend({
  model: function(params){
    return Video.create({
              id: params['video_id']
    });
   }
});