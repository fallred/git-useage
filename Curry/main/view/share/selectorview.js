define([
	'backbone',
	'text!tpl/share/selectortpl.html',
	'global'
	], function(Backbone,tpl,global) {
	var SelectorView = Backbone.View.extend({
		tagName: 'li',
		menuTemplate: _.template(tpl),
		render: function() {
			this.$el.html(this.menuTemplate(this.model.toJSON()));
			return this;
		},
	});
	 return SelectorView;
 });