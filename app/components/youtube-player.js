import Ember from "ember";

export default Ember.Component.extend({
 	 tagName:'iframe',
 	 attributeBindings:['src'], 
	 src: function() {
	    var vidId = this.get('videoId');
	    return "http://www.youtube.com/embed/" + vidId;
	  }.property()


});
