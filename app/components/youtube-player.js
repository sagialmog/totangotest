import Ember from "ember";
import config from '../config/environment';

export default Ember.Component.extend({
 	 tagName:'iframe',
 	 attributeBindings:['src' ,'frameborder'], 
 	 frameborder:0,
	 src: function() {
	    var vidId = this.get('videoId');
	    return config.youtubeEmbedURL + "/" + vidId;
	  }.property()


});
