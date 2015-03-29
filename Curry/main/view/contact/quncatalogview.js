define([
	'backbone',
	'text!tpl/contact/quncatalogtpl.html',
	'global'
	], function(Backbone,tpl,global) {
	var QunCatalogView = Backbone.View.extend({
		tagName: 'li',
		menuTemplate: _.template(tpl),
		render: function() {
			this.$el.html(this.menuTemplate(this.model.toJSON()));
			return this;
		},
	});
	 return QunCatalogView;
 });