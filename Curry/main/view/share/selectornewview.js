define([
	'backbone',
	'model/share/selectormodel',
	'text!tpl/share/selectortpl.html',
	'global'
	], function(Backbone,SelectorCollection,tpl,global) {
	var SelectorOptionView = Backbone.View.extend({
		tagName: 'li',
		template: _.template(tpl),
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
	});
	var SelectorView = Backbone.View.extend({
		tagName: 'ul',
		className: 'selecter-options',
		setCollection: function(data){
			this.collection = new SelectorCollection(data);
		},
		render: function() {
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderOptions(item);
			}, this);
		},
		renderOptions: function(item){
			var selectorOptionView = new SelectorOptionView({
				model:item
			});
			this.$el.append(selectorOptionView.render().el);
		}
	});
	 return SelectorView;
 });