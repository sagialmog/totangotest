import Ember from "ember";
export default Ember.ArrayController.extend({
 actions:{
  addToPlayList:function(video){
  	  video.set('isInPlayList' , true);
   	  this.get('playList').pushObject(video);
   	  this._setToLocalStorage();
  },
  removeFromPlayList:function(video){
   	  this.get('playList').removeObject(video);
   	  video.set('isInPlayList' ,false);
   	  this._setToLocalStorage();
  }
 },
 _setToLocalStorage:function(){
 	localStorage.setItem('playList' , JSON.stringify(this.get('playList')));
 }
});