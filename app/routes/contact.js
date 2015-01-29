import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
	actions: {
		submitForm: function(name, message){
			ajax({
				url: 'api/contact',
				type: 'POST',
				contentType: 'application/json',
				data: JSON.stringify({
					name: name,
					message: message
				})
			})
		}
	}
});
