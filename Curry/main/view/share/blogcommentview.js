define([
	'backbone',
	'model/share/commentmodel',
	'text!tpl/share/commentmaintpl.html',
	'text!tpl/share/commentsubtpl.html',
	'global'
	], function(Backbone,CommentCollection,cmaintpl,csubtpl,global) {
	// 二级评论列表视图
	var self;
	var CommentSubView = Backbone.View.extend({
		tagName: 'li',
		className: 'subcomment',
		template: _.template(csubtpl),
		initialize: function(){
			this.listenTo(this.model, "change", this.render);
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
			"click .pagehref": "visitSpace",
			"click .btn-sub-delete":"deleteDialog",
		},
		deleteDialog: function(){
			self = this;
			var d = dialog({
				id:'deleteComment',
			    title: '删除评论',
			    content: '确定删除这条评论吗？',
			    okValue: '确定',
			    ok: self.comDelete,
			    cancelValue: '取消',
			    cancel: function () {},
			    width: 200,
			});
			d.showModal();
		},
		comDelete: function(){
			var uid = self.model.get("createdby"),
			mid = self.model.get("id"),
			cid = self.model.get("commentid"),
			userId = global.usrinfo.id;
			console.log(mid);
			console.log(cid);
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blog/deleteBlogComment",
	            data: "userId=" + userId + "&id=" + mid + "&commentId=" + cid,
	            success: function(data) {
	            	if(data==true){
	            		self.model.collection.remove(self.model);
	            	}
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
		},
		visitSpace: function(e){
			var userId = global.usrinfo.id,
			receiverId = $(e.target).attr("data-id");
			if ($(e.target).is('.addbtn'))
	            return;
	        else{
	        	var src = "http://192.168.1.110:8080/Curry/web/space.html?userId=" + userId + "&receiverId=" + receiverId +"#menu/space";
				window.open(src);
			}
		},
	});
	// 一级评论列表视图
	var CommentMainView = Backbone.View.extend({
		tagName: 'li',
		className: 'maincomment',
		template: _.template(cmaintpl),
		setCollection: function(data){
			this.collection = new CommentCollection(data);
			this.listenTo(this.collection, "remove", this.render);
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			var rendercontent = this.$el;
			self = this;
			//解析评论内表情
			_.each(rendercontent.find("dd"),function(item){
				var newmsg = self.expFilter(item.innerHTML);
				item.innerHTML = newmsg;
			});
			_.each(this.collection.models, function(item) {
				this.renderItem(item);
			}, this);
			return this;
		},
		events: {
			"click .pagehref": "visitSpace",
			"click .btn-main-delete":"deleteDialog",
		},
		deleteDialog: function(){
			self = this;
			var d = dialog({
				id:'deleteComment',
			    title: '删除评论',
			    content: '确定删除这条评论吗？',
			    okValue: '确定',
			    ok: self.comDelete,
			    cancelValue: '取消',
			    cancel: function () {},
			    width: 200,
			});
			d.showModal();
		},
		comDelete: function(){
			var uid = self.model.get("createdby"),
			mid = self.model.get("id"),
			cid = 0,
			userId = global.usrinfo.id;
			console.log(mid);
			console.log(cid);
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blog/deleteBlogComment",
	            data: "userId=" + userId + "&id=" + mid + "&commentId=" + cid,
	            success: function(data) {
	            	if(data==true){
	            		self.model.collection.remove(self.model);
	            	}
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
		},
		renderItem:function(item){
			var commentSubView = new CommentSubView({
				model:item
			});
			commentSubView.render();
			var rendercontent = commentSubView.$el;
			self = this;
			//解析评论内表情
			_.each(rendercontent.find("dd"),function(item){
				var newmsg = self.expFilter(item.innerHTML);
				item.innerHTML = newmsg;
			});
			this.$el.find("ul").append(rendercontent);
		},
		replyComment: function(){
			var uid = this.model.get("createdby"),
			mid = this.model.get("id"),
			unick = this.model.get("nickname");
			var html ="<input type='button' disabled='true' data-uid='" + uid + "' data-mid='" + mid + "' value='回复 " + unick + "：'>";
			$("#msgsend").focus();
			insertHtmlAtCaret(html,"comment");
		},
		visitSpace: function(e){
			var userId = global.usrinfo.id,
			receiverId = $(e.target).attr("data-id");
			if ($(e.target).is('.addbtn'))
	            return;
	        else{
	        	var src = "http://192.168.1.110:8080/Curry/web/space.html?userId=" + userId + "&receiverId=" + receiverId +"#menu/space";
				window.open(src);
			}
		},
		expFilter:function(what){
	        var newmsg = ioNull.emoji.parse(what);
	        return newmsg;
		},
	});
	//评论视图
    var CommentView = Backbone.View.extend({
    	el: '.blog-comment > ul',
		setCollection: function(data){
			this.collection = new CommentCollection(data);
			this.listenTo(this.collection, "add", this.render);
			this.listenTo(this.collection, "remove", this.render);
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
			var commentMainView = new CommentMainView({
				model:item
			});
			commentMainView.setCollection(item.get("comment"));
			commentMainView.render();
			var rendercontent = commentMainView.$el;
			self = this;
			//解析评论内表情
			_.each(rendercontent.find("dd"),function(item){
				var newmsg = self.expFilter(item.innerHTML);
				item.innerHTML = newmsg;
			});
			this.$el.append(rendercontent);
		},
		expFilter:function(what){
	        var newmsg = ioNull.emoji.parse(what);
	        return newmsg;
		}
     });
     
     return CommentView;
 });