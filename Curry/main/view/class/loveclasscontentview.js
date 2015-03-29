/*
* 我爱我班内容模块
*/
define(['backbone','model/class/noticemodel','view/share/blogview','text!tpl/class/loveclasscontenttpl.html','global'], function(Backbone,NoticeCollection,BlogView, tpl,global) {   
    // 访问元素视图
	var LoveClassItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'container-box list-content blog-listitem',
		noticeTemplate: _.template(tpl),
		initialize: function() {

        },
		render: function() {
			this.$el.html(this.noticeTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"mouseenter .edit-delete": "showButton",
			"mouseleave .edit-delete": "hideButton",
			"click .blog-title,.blog-text,.blog-img img": "readBlog"
		},
		//博客详情
		readBlog: function(){
			var blogView = new BlogView({
				model: this.model
			});
			blogView.render();
		},
		// 编辑/删除
		showButton : function(e) {
			var str = $(e.target).find(".user-list");
			str.find(".nick-item").css("display","inline");
		},
		
		hideButton : function(e) {
			var str = $(e.target).find(".user-list");
			str.find(".nick-item").css("display","none");
		},

		
	});
	
    
    var LoveClassContentView = Backbone.View.extend({
        el: '.categoryShow',
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
			var blogView = new LoveClassItemview({
				model: item
			});
			this.$el.append(blogView.render().el);
		},
     });
     
     return LoveClassContentView;
 });