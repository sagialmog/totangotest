import Ember from "ember";

export default Ember.View.extend({
	 keyPress:function(e){
	    if (e.which === 13) {
	        this.get('controller').send('search');
        }		
	 },
 	 didInsertElement: function(){
 	    var self = this;
 	 	setTimeout(function(){self.$('#search-bar').addClass('in')} , 300);
 	 }


});