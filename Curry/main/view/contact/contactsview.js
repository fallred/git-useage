define([
	'backbone',
	'view/contact/contactsfriendview',
	'view/contact/friendmgview',
	'view/contact/quncreateview',
	'view/contact/contactqunview',
	'text!tpl/contact/ctscontainertpl.html',
	'global'
	], function(Backbone,ContactsFriendView,FriendMgView,QunCreateView,ContactQunView,tpl,global) {
	
	
	// 联系列表视图
	var self;
	var ContactsView = Backbone.View.extend({
		initialize: function(){
			self = this;
			this.containerBuild();
		},
		parent: null,
		setParent: function(parent){
			this.parent = parent;
		},
		events: {
			"click .friendmgbtn": "friendMg",
			"click .qunmgbtn": "qunCreate",
		},
    	containerBuild : function(){
    		var container = tpl;
    		this.$el.html(container);
    	},
		// setCollection: function(data){
			// this.collection = new ContactsCollection(data);
		// },
		// insertCollection: function(data,index) {
			// this.collection.add(data, {at: index});
			// var col = new ContactsCollection(data);
// 			
			// _.each(col.models, function(item) {
				// this.renderContact(item);
			// }, this);
		// },
		render: function() {
			this.getContactsFriend();
			this.getContactsGroup();
			this.getContactsPublic();
		},
		getContactsGroup: function(){
			//初始化群信息
		    $.ajax({
	             type: "post",
	             url: global.url + "/Curry/group/getAllGroupAndUsers",
	             data: "userId=" + global.usrinfo.id,
	             success: function(data) {
		            global.quns = data;
		            var contactQunView = new ContactQunView();
		            contactQunView.setCollection(global.quns);
		            contactQunView.render();
			     },
			     error: function (XMLHttpRequest, textStatus, errorThrown) {
				 }
	        });
		},
		getContactsPublic: function(){
			self.$el.find("#btn-public .list-container").html("3");
		},
		getContactsFriend: function(){
			//初始化好友信息
			$.ajax({
	             type: "post",
	             url: global.url + "/Curry/relation/getAllFriend",
	             data: "userId=" + global.usrinfo.id,
	             success: function(data) {
		            global.friends = data;
		            var contactsFriendView = new ContactsFriendView();
		            contactsFriendView.setCollection(global.friends);
		            contactsFriendView.render();
			     },
			     error: function (XMLHttpRequest, textStatus, errorThrown) {
				 }
		    });
	       
    	},
    	qunCreate: function(){
    		var qunCreateView = new QunCreateView();
				qunCreateView.render();
    	},
    	friendMg: function(){
    		var friendMgView = new FriendMgView();
    		friendMgView.setCollection(global.friends);
    		//set全部好友
    		friendMgView.insertCollection({
    			groupname: "全部好友",
    			id: -1,
    			member: _.compact(_.flatten(_.pluck(global.friends, 'member')))
    		},0);
    		friendMgView.setParent(global.homepage);
    		friendMgView.render();
    	},
		
     });
     
     return ContactsView;
 });