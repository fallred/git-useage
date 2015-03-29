/*
* 班级群聊模块
*/
define(['backbone',
	'model/class/noticemodel',
	'text!tpl/class/groupchattpl.html','global'], function(Backbone,NoticeCollection,tpl, global) {  

    var GroupChatView = Backbone.View.extend({
        el: $('#container-fluid'),
		classInfoTemplate: _.template(tpl),
		
		setModel:function(){
			this.model = new NoticeCollection();
		},
		initialize: function() {

        },

		render: function() {
			var container = $('<div class="category fn-clear"></div><div class="categoryShow"></div>');
			this.$el.html(container);
			this.$el.find(".category").html(tpl);
			
			//this.getCategoryNotice();
			
        },
        
		// 公告
		// getCategoryNotice: function(){
		// 	var noticeView = new NoticeView();
  //           noticeView.setCollection(noticedata);
  //           noticeView.render();
  //           this.$el.find(".categoryShow").html(noticeView.$el);
		// },
     });
     
     return GroupChatView;
 });