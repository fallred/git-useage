define([
	'backbone',
	'model/share/usermodel',
	'model/share/selectormodel',
	'view/share/selectorview',
	'text!tpl/contact/frienditemtpl.html',
	'text!tpl/contact/friendgrouptpl.html',
	'text!tpl/share/usrcardtpl.html'
	], function(Backbone,UserCollection, SelectorCollection,SelectorView,frienditemtpl,friendgrouptpl,cardtpl) {
	
	
	
	var checked=[],groupval,member=[];
	// 联系列表视图
	var FriendItemview = Backbone.View.extend({
		tagName: 'li',
		className: 'friend-item',
		itemTemplate: _.template(frienditemtpl),
		initialize: function(){
			checked=[];
		},
		render: function() {
			this.$el.html(this.itemTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"click .nowcheck":"checkedGroup"
		},
		checkedGroup: function(){
			var _exist=$.inArray(this.model,checked);
			if( _exist >= 0 ){
				checked.splice(_exist,1);
			}else{
				checked.push(this.model);
			}
		}
	});
	
    var FriendGroupView = Backbone.View.extend({
    	el:'.frienditembox',
    	initialize: function(){
			self = this;
			this.containerBuild();
			
			// this.render();
			
		},
		events: {
			"click .groupmgsavebtn": "postData",
			"click .selecter-options li a": "Validate",
			"click .nowcheck": "Validate",
		},
    	//与好友列表共用model
		setCollection: function(data){
			this.collection = new UserCollection(data);
		},
		containerBuild: function() {
			this.$el.html(friendgrouptpl);
		},
		render: function() {
			this.$el.find(".list-container ul").empty();
			_.each(this.collection.models, function(item) {
				this.renderContact(item);
			}, this);
			this.renderGroup();
		},
		renderGroup: function(){
			this.setCollection(global.groups);
			_.each(this.collection.models, function(item) {
				this.renderGroupItem(item);
			}, this);
			//下拉框初始化方法
			selecter();
		},
		renderGroupItem: function(item){
			var friendGroupSelector = new SelectorView({
				model:item
			});
			var options = friendGroupSelector.render().el;
			this.$el.find(".selecter-options").append(options);
		},
		renderContact: function(item) {
			var friendItemview = new FriendItemview({
				model: item
			});
			this.$el.find(".list-container ul").append(friendItemview.render().el);
		},
		transGroup:function(){
			member=[];
			 groupval = this.$el.find(".selecter input").attr("data-id");
			_.each(checked,function(item){
				member.push({
					id:item.get('id'),
					friendgroup:groupval
					});
			});
		},
		postData: function(){
			this.transGroup();
			_.each(member,function(item){
				if(item.friendgroup == 0){
					self.error();
				}else{
					console.log(JSON.stringify(member));
					$.ajax({
			            type: "post",
			            url: global.url + "/Curry/relagrp/updateUserrelagrpBatchForUser?userId="+ global.usrinfo.id,
			            dataType:"json",      
			            data: {groups: JSON.stringify(member)},
			            success: function(data) {
			             	if(data == true) {
			             		console.log(data)
					        	self.send();
			             	} else {
			             		self.error();
			             	}
			             	
						},
					    error: function (XMLHttpRequest, textStatus, errorThrown) {
						}
					
			         });
				}
			});
			
		},
		send: function(){
			var d = dialog({
				id: 'friendmgsuccess',
			    title: '保存成功',
			    content: '<span style="display:inline-block;line-height:50px;margin-left:10px">保存成功！</span>',
			    cancelValue: '完成',
			    cancel: function () {
			    	this.remove();
			    },
			    width: 150
			});
			d.showModal();
			setTimeout(function () {
			    d.close().remove();
			}, 1000);
		},
		error: function(){
			var d = dialog({
				id: 'friendmgerror',
			    title: '错误',
			    content: '<span style="display:inline-block;line-height:50px;margin-left:10px">请选择分组与用户！</span>',
			    cancelValue: '完成',
			    cancel: function () {
			    	this.remove();
			    },
			    width: 150
			});
			d.showModal();
			setTimeout(function () {
			    d.close().remove();
			}, 1000);
		},
		Validate: function(e){
			//选中验证
			if($(e.target).is('.selecter-options li a')){
				groupval = $(e.target).attr('value');
			}
			
			if (groupval > 0 && $('input:checked').length > 0) {
				this.$el.find('.groupmgsavebtn').addClass('btn btn-r-r-lg').removeClass('btn-r-d-lg');
			} else{
				this.$el.find('.groupmgsavebtn').addClass('btn-r-d-lg').removeClass('btn btn-r-r-lg');
			}
		},
     });
     
     return FriendGroupView;
 });