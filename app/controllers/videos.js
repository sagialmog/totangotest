import Ember from "ember";
export default Ember.Controller.extend({
 needs: 'results',
 playList: Ember.computed.alias('controllers.results.playList'),
 actions:{
  play:function(video){
  	  this.set('model.id' , video.id);
  }
 }
});


