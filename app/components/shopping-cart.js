import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['shopping-cart'],
	actions: {
		remove: function(product){
			this.sendAction)('remove', product);
		}
	},
	items: []
});
