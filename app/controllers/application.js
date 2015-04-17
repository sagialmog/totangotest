import Ember from "ember";
export default Ember.Controller.extend({
 querystr:"",
 actions:{
  search:function(){
       this.transitionToRoute('results', this.get('querystr'));
  },
  home:function(){
   	this.transitionToRoute('index');
   }
 }
});