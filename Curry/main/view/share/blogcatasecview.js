define([
	'backbone',
	'model/share/blogcatamodel',
	'view/share/bloglistview',
	'text!tpl/share/blogcatatpl.html',
	'global'
	], function(Backbone,BlogCataCollection,BlogListView,tpl,global) {
	var self;
	var BlogCataSecItemView = Backbone.View.extend({
		tagName: 'li',
		template: _.template(tpl),
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
	});
	var BlogCataSecView = Backbone.View.extend({
		el: '.seccata',
		setCollection: function(data){
			this.collection = new BlogCataCollection(data);
		},
		initialize: function(){
			self = this;
		},
		render: function() {
			this.$el.empty();
			_.each(this.collection.models, function(item) {
				this.renderItem(item);
			}, this);
			
		},
		renderItem: function(item){
			var blogCataSecItemView = new BlogCataSecItemView({
				model:item
			});
			this.$el.append(blogCataSecItemView.render().el);
		},
	});
	 return BlogCataSecView;
 });