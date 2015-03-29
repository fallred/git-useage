define(['backbone','model/share/usermodel','text!tpl/share/blogpraisetpl.html'], function(Backbone,UserCollection,tpl) {   
    // 访问元素视图
	var BlogPraiseItemView = Backbone.View.extend({
		tagName: 'li',
		template: _.template(tpl),
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
		},
		
	});
	
    
    var BlogPraiseView = Backbone.View.extend({
        el: '.blog-operation-praise ul',
		setCollection: function(data){
			this.collection = new UserCollection(_.compact(data));
			this.listenTo(this.collection, "change", this.render);
		},
		insertCollection: function(data,index){
			this.collection.add(data, {at: index});
		},
		render: function() {
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderItem(item);
			}, this);
		},
		renderItem: function(item) {
			var blogPraiseItemView = new BlogPraiseItemView({
				model: item
			});
			this.$el.append(blogPraiseItemView.render().el);
		},

		
     });
     
     return BlogPraiseView;
 });