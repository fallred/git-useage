/*
* 发布云课堂博客模块
*/
define(['backbone',
	'model/class/noticemodel',
	'text!tpl/class/releasecoursewaretpl.html',
	'global'], function(Backbone,NoticeCollection,tpl,global) {  

    var ReleaseCourseView = Backbone.View.extend({
        el: $('#container-fluid'),
		classInfoTemplate: _.template(tpl),
		//parent: null,
		setModel:function(){
			this.model = new NoticeCollection();
		},
		initialize: function() {
			//$(this.el).off();
        },

		render: function() {
			var container = $('<div class="category fn-clear"></div><div class="categoryShow"></div>');
			this.$el.html(container);
			this.$el.find(".category").html(tpl);
			
			//this.getCategoryNotice();
			
        },
        // 发布关闭
        events: {
			"click .btn-close": "closePage"
			//"click .btn-release": "releaseBlog"
		},
		setParent : function(parent){
			this.parent = parent;
		},
		closePage: function(){
			this.parent.render();
			//this.$el.empty();
		},
		// returnParent: function(e) {
		// 	//this.parent.render();
		// 	var self = this;
		// 	var blogtitle = $.trim($("#blog-title").val());
		// 	var textedit = $.trim($("#textedit").val());
		// 	if(blogtitle=="" && textedit == "") {
		// 		self.parent.render();
		// 	} else {
		// 		var d = dialog({
		// 			id: "returnblog",
		// 		    title: '取消发布',
		// 		    content: '是否退出发布班级博客',
		// 		    okValue: '确定',
				    
		// 		    cancelValue: '取消',
		// 		    cancel: function () {
		// 		    	this.remove();
		// 		    },
		// 		    ok: function(){
		// 		    	self.parent.render();
		// 		    },
		// 		    width: 400
		// 		});
		// 		d.showModal();
				
		// 		//return this;
		// 	}
		// },
		// releaseBlog:function(e) {
		// 	var self = this;
		// 	var blogtitle = $.trim($("#blog-title").val());
		// 	var textedit = $.trim($("#textedit").val());
		// 	// remove !
		// 	if(blogtitle != "" && textedit != "") {
		// 		self.parent.render();
		// 		//self.parent.parent.getBlog(blogtitle,textedit);
		// 	} else {
		// 		var d = dialog({
		// 			id: "releaseblog",
		// 		    title: '发布',
		// 		    content: '请完善信息',
		// 		    okValue: '确定',
		// 		    // ok: function() {
		// 		    // 	this.remove();
		// 		    // },
		// 		    cancelValue: '取消',
		// 		    cancel: function () {
		// 		    	this.remove();
		// 		    },
		// 		    width: 400
		// 		});
		// 		d.showModal();
		// 	}
		// },
        
		// 公告
		// getCategoryNotice: function(){
		// 	var noticeView = new NoticeView();
  //           noticeView.setCollection(noticedata);
  //           noticeView.render();
  //           this.$el.find(".categoryShow").html(noticeView.$el);
		// },
     });
     
     return ReleaseCourseView;
 });