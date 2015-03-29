define(['backbone','model/share/blogmodel','text!tpl/tnno/hotblogtpl.html'], function(Backbone,BlogCollection,tpl) {   
    // 访问元素视图
	var HotblogItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'row',
		hotblogTemplate: _.template(tpl),
		render: function() {
			this.$el.html(this.hotblogTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"click a": "alert"
		},
		alert: function(){
			alert();
		},
		
	});
	
    
    var HotblogView = Backbone.View.extend({

		setCollection: function(data){
			this.collection = new BlogCollection(data);
		},
		render: function() {
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderHotblog(item);
			}, this);
		},
		renderHotblog: function(item) {
			var hotblogView = new HotblogItemview({
				model: item
			});
			this.$el.append(hotblogView.render().el);
		},
     });
     
     return HotblogView;
 });