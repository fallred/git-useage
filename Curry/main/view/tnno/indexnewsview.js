define(['backbone','model/share/newsmodel','text!tpl/tnno/indexnewstpl.html'], function(Backbone,NewsCollection,tpl) {   
    // 访问元素视图
	var IndexNewsItemview = Backbone.View.extend({
		tagName: 'li',
		indexnewsTemplate: _.template(tpl),
		render: function() {
			this.$el.html(this.indexnewsTemplate(this.model.toJSON()));
			return this;
		},
		
	});
	
    var ul = $("<ul/>");
    var IndexNewsView = Backbone.View.extend({
    	className: 'news fn-clear',
		setCollection: function(data){
			this.collection = new NewsCollection(data);
		},
		render: function() {
			ul.empty();
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderIndexnews(item);
			}, this);
			this.$el.html(ul);
		},
		renderIndexnews: function(item) {
			var indexNewsItemView = new IndexNewsItemview({
				model: item
			});
			
			ul.append(indexNewsItemView.render().el);
			
		},
     });
     
     return IndexNewsView;
 });