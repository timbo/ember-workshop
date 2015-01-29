import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
	beforeModel: function(){
		// check authentication...
		// this.transitionTo('login')
	},
	model: function(){
	  return ajax('api/products')
	  .then(function(response){
	  	return response.products;
	  });
	},
	afterModel: function(){
		//check permissions?
	},
	// setupController: function(){
	// 	// late loading AJAX call instead of model hook
	// }
});
