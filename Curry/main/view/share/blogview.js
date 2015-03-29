define([
	'backbone',
	'view/share/blogpraiseview',
	'view/share/blogcommentview',
	'view/share/expressionview',
	'view/share/forwardview',
	'text!tpl/share/blogtpl.html',
	'text!tpl/share/blogmaintpl.html',
	'text!tpl/share/blogtitletpl.html',
	'global'], 
	function(
		Backbone,
		BlogPraiseView,
		BlogCommentView,
		ExpressionView,
		ForwardView,
		blogtpl,
		blogmaintpl,
		blogtitletpl,
		global) {   
    // 访问元素视图
    var blogPraiseView,self,blogCommentView,currentPage;
	var BlogView = Backbone.View.extend({
		el: '.blogpage',
		template: _.template(blogmaintpl),
		titletemplate:_.template(blogtitletpl),
		initialize:function(){
			currentPage=0;
			this.$el.off();
			var blogPraiseView = new BlogPraiseView();
			this.$el.html(blogtpl);
			self = this;
			this.call();
		},
		setModel:function(data,type){
			this.model.set(data);
			this.listenTo(this.model, "change", this.render);
			// //加载评论不放在render内，以免监听model数据变化时自动刷新评论
			this.render();
			this.getComment(type);
		},
		render: function() {
			
			//渲染博客主体
			this.$el.find(".blog-content").html(this.template(this.model.toJSON()));
			//渲染博客标题
			this.$el.find(".blog-header").html(this.titletemplate(this.model.toJSON()));
			this.getPraised();
			
			return this;
		},
		events: {
			"click .btn-close": "closePage",
			"click .btn-praise": "praise",
			"click .btn-fav": "fav",
			"keypress #comsend":"call",
			"click .btn-exp":"expression",
			"click .comsendbtn":"postMsg",
			"click .btn-more":"getComment",
			"click .blog-container-layer":"postShift",
			"click .btn-forward":"forward",
			"click .btn-comment":"srollCom",
		},
		closePage: function(){
			this.$el.off();
			this.$el.empty();
			blogCommentView=null;
		},
		postShift: function(e){
			var postInput = $(".blog-post");
			//输入框位子切换
			if($(e.target).is(".btn-reply")){
				//点击回复时，将输入框移动到当前评论下，并将回复者信息置入输入框
				var uid = $(e.target).attr("data-uid"),
				mid = $(e.target).attr("data-mid"),
				cid = $(e.target).attr("data-cid"),
				unick = $(e.target).attr("data-unick"),
				html ="<input type='button' disabled='true' data-uid='" + uid + "' data-mid='" + mid +"' data-cid='" + cid + "' value='回复 " + unick + "：'>",
				postDiv = $(e.target).closest(".maincomment");
				postInput.appendTo(postDiv);
				$("#comsend").focus();
				insertHtmlAtCaret(html,"comment");
			} else if($(e.target).is(".btn-exp") || $(e.target).is(".btn-exp i") || $(e.target).is("#comsend")|| $(e.target).is(".btn-delete")){
				return;
			} else {
				postInput = $(".blog-post");
				postInput.prependTo($(".blog-footer"));
			}
			
		},
		praise: function(){
			var userId = global.usrinfo.id, flag;
			if(this.model.get("assisted") == 1){
				flag = 0;
			} else {
				flag = 1;
			};
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blog/updateBlogAssistByBlogId",
	            data: "blogId=" + self.model.get("id") + "&userId=" + userId + "&flag=" + flag,
	            success: function(data) {
	            	console.log(data)
		    		blogPraiseView.setCollection(data.assistMember);
		    		blogPraiseView.render();
		    		self.model.set(data);
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
			
		},
		fav: function(){
			var userId = global.usrinfo.id, flag;
			if(this.model.get("favorited") == 1){
				flag = 1;
			} else {
				flag = 0;
			};
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blog/updateBlogFavoriteByBlogId",
	            data: "blogId=" + self.model.get("id") + "&userId=" + userId + "&flag=" + flag,
	            success: function(data) {
	            	console.log(data)
		    		self.model.set(data);
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
			
		},
		getPraised: function(){
			blogPraiseView = new BlogPraiseView();
			blogPraiseView.setCollection(this.model.get("assistMember"));
			blogPraiseView.render();
			
		},
		getComment: function(type){
			currentPage++;
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blog/getBlogCommentByBlogId",
	            data: "blogId=" + self.model.get("id") + "&currentPage=" + currentPage,
	            success: function(data) {
	            	console.log(data)
	            	if(data){
	            		if(blogCommentView){
			    			blogCommentView.insertCollection(data.cList);
			    		} else{
			    			blogCommentView = new BlogCommentView();
			    			blogCommentView.setCollection(data.cList);
			    		};
						blogCommentView.render();
						currentPage = data.currentPage;
	            	}
	            	//判断是否点击评论按钮触发编辑窗口聚焦
					if ( type == "comment") {
						self.srollCom();
					}
		    		
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
			    	return;
				}
				
	        });
		},
		expression: function(){
    		var expressionView = new ExpressionView();
    		expressionView.expressionDialog("bottom left","#comsend","commark");
    	},
    	postMsg: function(){
    		//定义变量，过滤出图片以外的所有html标签
			var cominput = this.$el.find("#comsend"),commsg = cominput.html().replace(/<(?!img)[^>]*>/gi,"");
			var userId = global.usrinfo.id,
    		receiverId = cominput.find("input").attr("data-uid"),
    		id = cominput.find("input").attr("data-mid"),
    		commentid = cominput.find("input").attr("data-cid"),
    		call = [];
    		_.each(this.$el.find("#comsend span.atwho-inserted"),function(item){
    			call.push(Number(item.dataset.id));
    		});
			var expfaces = cominput.find("img.expface[unicode]"), count = expfaces.length;
			for ( i=0; i < count; i++ ) {
				var ucode = "&#x" + expfaces.eq(i).attr("unicode") + ";";
				commsg = commsg.replace(/<img.*?class=\"expface\".*?(?:>|\/>)/i, ucode);
				
			}
			var com = {
				userId: userId,
				receiverId: receiverId,
				commentcontent: commsg,
				blogId: this.model.get("id"),
				id: id,
				commentid: commentid,
				call: call
			};
			//设置默认值
			com = _.defaults(com,{userId:0,receiverId:0,blogId:0,id:0,commentid:0});
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blog/createBlogComment",
	            data: {newCom: JSON.stringify(com)},
	            success: function(data) {
	            	console.log(data)
	            	if(!blogCommentView){
		    			blogCommentView = new BlogCommentView();
		    		};
		    		blogCommentView.setCollection(data);
					blogCommentView.render();
         			cominput.html("");
         			var blogtotalcomment = self.model.get("blogtotalcomment");
         			blogtotalcomment++;
         			self.model.set({blogtotalcomment:blogtotalcomment});
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
			

		},
		call: function(){
			// var emojis = $.map(getEmojiList, function(value, i) {
				// return {key: value, name:value}
				// });
// 
		    // var emoji_config = {
		      // at: ":",
		      // data: emojis,
		      // displayTpl: "<li>${name} <img src='https://assets-cdn.github.com/images/icons/emoji/${key}.png'  height='20' width='20' /></li>",
		      // insertTpl: ':${key}:',
		      // delay: 400
		    // }
			var names = _.flatten(_.pluck(global.friends, 'member'));
			var names = $.map(names,function(value,i) {
				return {'id':value.id,'name':value.nickname,'tnno':value.tnno};
			});

		    var at_config = {
			    at: "@",
			    data: names,
			    displayTpl: "<li data-id='${id}'>${name} <small>${tnno}</small></li>",
			    limit: 200
		    };
			$('#comsend').atwho(at_config);
			
		},
		forward: function(){
			var forwardView = new ForwardView({
				model: this.model
			});
			forwardView.dialog();
		},
		//列表点击评论滚动
		srollCom: function(){
			$(".blog-main").scrollTop($('.blogpage .blog-content').height() - 100);
			$("#comsend").focus();
		}
	});
     
     return BlogView;
 });