define([
	'backbone',
	'model/share/usermodel',
	'model/share/groupmodel',
	'view/share/chatview',
	'text!tpl/contact/contactsgrouptpl.html',
	'text!tpl/contact/contactsfriendtpl.html',
	'text!tpl/share/usrcardtpl.html','global'
	], function(Backbone,UserCollection,GroupCollection,ChatView,contgtpl,contftpl,cardtpl,global) {
	
	// var handler;
	// var UserCardView  = Backbone.View.extend({
		// hander:null,
		// el: $(".usrcard"),
		// usrcardTemplate: _.template(cardtpl),
		// render: function() {
			// this.$el.html(this.usrcardTemplate(this.model.toJSON()));
			// return this;
		// },
		// events: {
			// "mouseenter .usercardContainer": "showUsrcard",
			// "mouseleave .usercardContainer": "hideUsrcard",
		// },
		// showUsrcard: function() {
// 
			// clearTimeout(handler);
// 			
		// },
		// hideUsrcard: function() {
			// clearTimeout(handler);
			// handler = setTimeout(function() {
				// $(".usrcard").stop().fadeOut(200).empty();
			// }, 500);
		// },
	// });
	
	
	// 联系列表视图
		var ContactsFriendItemview = Backbone.View.extend({
		tagName: 'div',
		contactitemTemplate: _.template(contftpl),
		initialize: function(){
			self =this;
			this.listenTo(this.model, "change", this.render);
		},
		render: function() {
			this.$el.html(this.contactitemTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"mouseenter .usrpic-ms": "showUsrcard",
			"mouseleave .usrpic-ms": "hideUsrcard",
			"click .list-item": "chatWindow",
		},

		// showUsrcard: function(e) {
// 		
			// var userCardView = new UserCardView({
				// model: this.model,
				// hander:handler
			// });
			// userCardView.render();
// 			
			// clearTimeout(handler);
// 		
			// var thisHeight = $(e.target).closest('.list-item').offset().top,
				// botmHeight = $(window).height() - $(".usrcard").height() - 10;
			// if (thisHeight > botmHeight) {
				// $(".usrcard").stop().fadeIn(100).animate({
					// top: botmHeight,
					// left: 350
				// }, 200);
			// } else {
				// $(".usrcard").stop().fadeIn(100).animate({
					// top: thisHeight,
					// left:350
				// }, 200);
			// };
// 			
		// },
		// hideUsrcard: function() {
			// clearTimeout(handler);
			// handler = setTimeout(function() {
				// $(".usrcard").stop().fadeOut(200).empty();
			// }, 500);
// 
		// },
		chatWindow: function(){
			var chatView = new ChatView({
				model:this.model
			});
			chatView.render();
			chatView.setParent(global.homepage);
		},
	});
	// 分组列表视图
	var ContactsGroupItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'group-item',
		contactitemTemplate: _.template(contgtpl),
		setCollection: function(data){
			this.collection = new UserCollection(data);
		},
		render: function() {
			this.$el.html(this.contactitemTemplate(this.model.toJSON()));
			_.each(this.collection.models, function(item) {
				this.renderFriend(item);
			}, this);
			return this;
		},
		events: {
			"click .groupname": "slideGroup",
		},
		renderFriend:function(item){
			var contactsFriendItemView = new ContactsFriendItemview({
				model:item
			});
			contactsFriendItemView.render();
			this.$el.append(contactsFriendItemView.$el);
		},
		slideGroup: function(){
			//好友分组展开收起
			var citem = this.$el,
				nitem = citem.find('.list-item').length,
				citemheight = citem.find('.list-item').height();
			if( citem.height() == 36 && nitem !== 0 ){
				citem.stop().animate({
					height: citemheight * nitem + 36,
					overflow: 'auto'
				},100);
				citem.find('.groupicon').html("&#xe61e;");
			}else{
				citem.stop().animate({
					height: 36,
					overflow: 'hidden'
				},100);
				citem.find('.groupicon').html("&#xe61f;");
			}
		},
	});
	//联系人视图
    var ContactsFriendView = Backbone.View.extend({
    	el: "#btn-contacts .list-container",
		setCollection: function(data){
			this.collection = new GroupCollection(data);
		},
		insertCollection: function(data,index)
		{
			this.collection.add(data, {at: index});
			var col = new UserCollection(data);
			
			_.each(col.models, function(item) {
				this.renderContact(item);
			}, this);
		},
		initialize: function(){
			global.friendview = this;
		},
		render: function() {
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderContact(item);
			}, this);
			this.getGroups();
		},
		renderContact: function(item) {
			var contactsGroupItemView = new ContactsGroupItemview({
				model:item
			});
			contactsGroupItemView.setCollection(item.attributes.member);
			contactsGroupItemView.render();
			this.$el.append(contactsGroupItemView.$el);
		},
		getGroups: function() {
			global.groups = [];
			_.each(this.collection.models, function(group){
				//获取好友分组，存入global.groups
				var id = group.get('id'), groupname = group.get('groupname'), groupflag = group.get('groupflag'), temp= {};
				temp = {
					text: groupname,
					value: id,
					flag:groupflag
				};
				global.groups.push(temp);
			});
			
		},
     });
     
     return ContactsFriendView;
 });