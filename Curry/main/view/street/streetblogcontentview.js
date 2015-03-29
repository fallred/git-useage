/*
* 街区博客内容模块
*/
define(['backbone','model/street/streetblogmodel','view/share/blogview','text!tpl/street/streetblogcontenttpl.html'], function(Backbone,StreetBlogCollection,BlogView, tpl) {   
    // 访问元素视图
	var BlogItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'container-box blog-listitem',
		noticeTemplate: _.template(tpl),
	    initialize: function() {

        },	
		render: function(index,blogtitle) {
			if(typeof index=='number'&&typeof blogtitle=='string'){
			  if(index==0){
				var str="<div class='box-title-b fn-clear'>"+blogtitle+"</div>";
				this.$el.html(str);
			   }
			}
			this.$el.append(this.noticeTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"click .blog-title,.blog-text,.blog-img img,.comment,.readBlog": "readBlog",	
		},
		//博客详情
		readBlog: function(){
			var blogView = new BlogView({
				model: this.model
			});
			blogView.render();
		}
	});
    var StreetBlogContentView = Backbone.View.extend({
        // el: $('.categoryShow'),
		setCollection: function(data){
			this.collection = new StreetBlogCollection(data);
		},
		insertCollection: function(data,index){
			this.collection.add(data, {at: index});
		},
		render: function(blogtitle) {
			this.$el.html("");
			_.each(this.collection.models, function(item,index) { 
				this.renderTnbox(item,index,blogtitle);
			}, this);
		},
		renderTnbox: function(item,index,blogtitle) {
			var blogView = new BlogItemview({
				model: item
			});
			this.$el.append(blogView.render(index,blogtitle).$el);
		},
		/* 添加单条博客记录*/
		addBlog : function(blogtitle, blogcontent) {
			if (!blogtitle  || !blogcontent)
				return ;
			var data = {
				"streettype":"奔跑吧兄弟",
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
			var collection = new StreetBlogCollection(data);
			var blogView = new BlogItemview({
				model: collection.models[0]
			});
			// add to page
			this.$el.prepend(blogView.render().$el);
			// add to datebase
			// TODO ajax to server
		}
     });
     return StreetBlogContentView;
 });