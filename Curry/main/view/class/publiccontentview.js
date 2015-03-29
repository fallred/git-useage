/*
* 本校公众号内容模块
*/
define(['backbone','model/class/noticemodel','view/share/blogview','text!tpl/class/publiccontenttpl.html','global'], function(Backbone,NoticeCollection,BlogView,tpl, global) {   
    // 访问元素视图
	var PublicItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'container-box blog-listitem',
		noticeTemplate: _.template(tpl),
		initialize: function() {

        },
		render: function() {
			this.$el.html(this.noticeTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"click .blog-title,.blog-text,.blog-img img": "readBlog"
		},

		readBlog: function(){
			var blogView = new BlogView({
				model: this.model
			});
			blogView.render();
		}
		
	});
	
    
    var PublicContentView = Backbone.View.extend({
        // el: $('.bloglistcontainer'),
		setCollection: function(data){
			this.collection = new NoticeCollection(data);
		},
		render: function() {
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderTnbox(item);
			}, this);
		},
		renderTnbox: function(item) {
			var publicView = new PublicItemview({
				model: item
			});
			this.$el.append(publicView.render().el);
		},
     });
     
     return PublicContentView;
 });