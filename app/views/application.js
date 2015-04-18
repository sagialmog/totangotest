import Ember from "ember";

export default Ember.View.extend({
 	 didInsertElement: function(){
 	    var self = this;
 	 	setTimeout(function(){self.$('#search-bar').addClass('in')} , 300);
 	 }


});