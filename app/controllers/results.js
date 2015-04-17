import Ember from "ember";
export default Ember.ArrayController.extend({
 playList:[],
 actions:{
  addToPlayList:function(video){
  	  video.set('isInPlayList' , true);
   	  this.get('playList').pushObject(video);
  },
  removeFromPlayList:function(video){
   	  this.get('playList').removeObject(video);
   	  video.set('isInPlayList' ,false);
  }
  

 }
});