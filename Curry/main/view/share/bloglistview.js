/*
* 班级博客内容模块
*/
define(['backbone','model/share/blogmodel','view/share/blogview','view/share/forwardview','text!tpl/share/bloglisttpl.html','global'], function(Backbone,BlogCollection,BlogView,ForwardView,tpl,global) {   
    // 访问元素视图
	var BlogListItemView = Backbone.View.extend({
		tagName: 'div',
		className: 'container-box blog-listitem',
		template: _.template(tpl),
		initialize:function(){
			this.listenTo(this.model, "change", this.render);
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
			"click .blog-title,.blog-content": "readBlog",
			"click .btn-praise": "praise",
			"click .btn-fav": "fav",
			"click .btn-forward":"forward",
			"click .btn-comment":"comment",
		},
		readBlog: function(){
			var self = this;
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
		comment:function(){
			var self = this;
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blog/getBlogByBlogId",
	            data: "blogId=" + self.model.get("id") + "&userId=" + global.usrinfo.id,
	            success: function(data) {
		    		var blogView = new BlogView({
						model: self.model
					});
					blogView.setModel(data,"comment");
					//blogView.render();
					console.log(data);
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
			
		},
		praise: function(){
			var userId = global.usrinfo.id, flag, blogId = this.model.get("id"), self = this;
			if(this.model.get("assisted") == 1){
				flag = 0;
			} else {
				flag = 1;
			};
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blog/updateBlogAssistByBlogId",
	            data: "blogId=" + blogId + "&userId=" + userId + "&flag=" + flag,
	            success: function(data) {
		    		self.model.set(data);
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
			
		},
		fav: function(){
			var userId = global.usrinfo.id, flag, blogId = this.model.get("id"), self = this;
			if(this.model.get("favorited") == 1){
				flag = 1;
			} else {
				flag = 0;
			};
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blog/updateBlogFavoriteByBlogId",
	            data: "blogId=" + blogId + "&userId=" + userId + "&flag=" + flag,
	            success: function(data) {
	            	console.log(data)
		    		self.model.set(data);
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
			
		},
		forward: function(){
			var forwardView = new ForwardView({
				model: this.model
			});
			forwardView.dialog();
		},
		
	});
	
    
    var BlogListView = Backbone.View.extend({
        el: '.bloglistcontainer',
		setCollection: function(data){
			this.collection = new BlogCollection(_.compact(data));
		},
		render: function() {
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderItem(item);
			}, this);
		},
		renderItem: function(item) {
			var blogListItemView = new BlogListItemView({
				model: item
			});
			this.$el.append(blogListItemView.render().el);
		},

		
     });
     
     return BlogListView;
 });