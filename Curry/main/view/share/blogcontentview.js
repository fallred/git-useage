/*
* 班级博客内容模块
*/
define(['backbone','model/share/blogmodel','view/share/blogview','text!tpl/share/blogcontenttpl.html'], function(Backbone,BlogCollection, BlogView, tpl) {   
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
			"mouseenter .edit-delete": "showButton",
			"mouseleave .edit-delete": "hideButton",
			"click .blog-title,.blog-text,.blog-img img": "readBlog"
		},
		//博客详情
		// readBlog: function(){
		// 	var blogView = new BlogView({
		// 		model: this.model
		// 	});
		// 	blogView.render();

		// },
		readBlog: function(){
			self = this;
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blog/getBlogByBlogId", 
	            data: "blogId=" + self.model.get("id") + "&userId=" + global.usrinfo.id,
	            success: function(data) {
		    		var blogView = new BlogView({
						model: self.model
					});
					blogView.setModel(data);
					//blogView.render();
					console.log(data);
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
			
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
	
    
    var BlogContentView = Backbone.View.extend({
        el: '.categoryShow',
		setCollection: function(data){
			this.collection = new BlogCollection(data);
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
				"mPhoto": "http://cdn.tongnian.com/images/userpm.jpg",
				"lPhoto": "http://cdn.tongnian.com/images/userp-mid3.jpg",
				"sPhoto": "http://cdn.tongnian.com/images/userp-mid3.jpg",
				"tPhoto": "http://cdn.tongnian.com/images/userp-mid3.jpg",
				"spaceBg": "http://cdn.tongnian.com/images/usrcardbg2.jpg"
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