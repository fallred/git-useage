define([
	'backbone',
	'model/share/selectormodel',
	'view/contact/friendgroupview',
	'view/contact/contacthomepage',
	'view/contact/groupmgview',
	'text!tpl/contact/friendmgitemtpl.html',
	'text!tpl/contact/friendmgcontainertpl.html',
	'global'
	], function(Backbone,SelectorCollection,FriendGroupView,ContactHomePage,GroupMgView,itemtpl,conttpl,global) {
	
	
	// 联系列表视图
	var self;
	var FriendMgItemView = Backbone.View.extend({
		tagName: 'li',
		template: _.template(itemtpl),
		initialize: function(){
			self =this;
			this.listenTo(this.model, "change", this.render);
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
			"click a":"shiftMenu"
		},
		shiftMenu: function(){
			var friendGroupView = new FriendGroupView();
	            friendGroupView.setCollection(this.model.get("member"));
	            friendGroupView.render();
		}

	});
	var FriendMgView = Backbone.View.extend({
		el: "#container-fluid",
		initialize: function(){
			self = this;
			this.containerBuild();
			
			// this.render();
			
		},
		setCollection: function(data){
			this.collection = new SelectorCollection(data);
		},
		insertCollection: function(data,index){
			this.collection.add(data, {at: index});
		},
		setParent: function(parent){
        	this.parent = parent;
        },
		events: {
			"click .tab-lg li": "shiftSel",
			"click .btn-close": "closePage",
			"click .groupmgbtn": "groupMg",
			
		},
		containerBuild: function() {
			this.$el.html(conttpl);
		},
		render: function() {
			
			_.each(this.collection.models, function(item) {
				this.renderItem(item);
			}, this);
			//默认选择第一项
			this.$el.find(".tab-lg li a").eq(0).click();
		},
		//加载好友分组信息
		renderItem: function(item){
			var friendMgItemView = new FriendMgItemView({
				model:item
			});
			this.$el.find(".tab-lg").append(friendMgItemView.render().el);
		},
    	shiftSel: function(e){
    		this.$el.find(".tab-lg li").removeClass("selected");
    		$(e.target).closest("li").addClass("selected");
    	},
    	closePage: function(){
    		//关闭后渲染父视图
			this.parent.render();
			//关闭窗口清空当前聊天对象
			global.currentChat = null;
    	},
    	groupMg: function(){
    		var editgroup = $.map( global.groups, function(obj){
				return $.extend(true,{},obj);//返回对象的深拷贝
			});
    		var groupMgView = new GroupMgView();
    		groupMgView.setCollection(global.friends);
    		groupMgView.dialog();
    	},
    	
		
     });
     
     
     return FriendMgView;
 });