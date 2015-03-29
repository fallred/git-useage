/*
* 班级博客内容模块
*/
define(['backbone','model/class/noticemodel','view/share/blogview','text!tpl/class/blogcontenttpl.html'], function(Backbone,NoticeCollection,BlogView, tpl) {   
    // 访问元素视图
	var BlogItemview = Backbone.View.extend({
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
		//博客详情
		readBlog: function(){
			var blogView = new BlogView({
				model: this.model
			});
			blogView.render();
		},
		
	});
	
    
    var BlogContentView = Backbone.View.extend({
        //el: $('.categoryShow'),
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
			var blogView = new BlogItemview({
				model: item
			});
			this.$el.append(blogView.render().$el);
		},

		/* 添加单条博客记录*/
		addBlog : function(blogtitle, blogcontent) {
			if (!blogtitle  || !blogcontent)
				return ;
			var data = {
				"noticeTitle": blogtitle,
				"nickName": "陈晓星星",
				"time":"10:05:40",
				"content": blogcontent,
				"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
				"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
				"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
				"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
				"spaceBg": "http://localhost:8080/Curry/images/usrcardbg2.jpg"
			};
			//var BlogModel = Backbone.Model.extend(data);
			var collection = new NoticeCollection(data);
			var blogView = new BlogItemview({
				model: collection.models[0]
			});
			// add to page
			this.$el.prepend(blogView.render().$el);
			// add to datebase
			// TODO ajax to server
		}
     });
     
     return BlogContentView;
 });