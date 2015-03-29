define([
	'backbone',
	'model/share/usermodel',
	'model/share/groupmodel',
	'view/contact/qundragedfriendview',
	'text!tpl/contact/contactsgrouptpl.html',
	'text!tpl/contact/qundragfriendtpl.html',
	'global'
	], function(Backbone,UserCollection,GroupCollection,QunDragedFriendView,contgtpl,contftpl,global) {
	
	
	// 联系列表视图
		var ContactsFriendItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'dragfriend-container',
		contactitemTemplate: _.template(contftpl),
		initialize: function() {

		// 监听模型change事件
		
		this.listenTo(this.model, "change", this.render);
		
		},
		render: function() {
			this.$el.html(this.contactitemTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"click .list-item": "selected",
		},

		selected: function(){
			var _exist=$.inArray(this.model,global.qundrag);
			if( _exist >= 0 || global.qundrag.length >= 50){
				return false;
			}else{
				global.qundrag.push(this.model);
			}
			//模型设置以选中属性为true
				this.model.set({
					draged: true
				});
				this.render();
			var qunDragedFriendView = new QunDragedFriendView();
				qunDragedFriendView.setCollection(global.qundrag);
				qunDragedFriendView.render();
				
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
				var id = group.get('id'), groupname = group.get('groupname'), temp= {};
				temp = {
					text: groupname,
					value: id
				};
				global.groups.push(temp);
			});
			
		},
     });
     
     return ContactsFriendView;
 });