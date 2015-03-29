/*
* 班级成员内容模块
*/
define(['backbone',
	'model/street/streetmembermodel',
		'view/share/usrdetailcardview',
	'text!tpl/street/streetmembercontpl.html',
	'text!tpl/street/streetmemberitemtpl.html',
	'global'], function(Backbone,MemberCollection, UsrDetailCardView,contpl, itemtpl, global) {   
    // 访问元素视图
    var MemberItemView = Backbone.View.extend({
		tagName: 'tr',
		template: _.template(itemtpl),
		initialize: function(){
			//self =this;
			//this.listenTo(this.model, "change", this.render);
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	var StreetMemberTableView = Backbone.View.extend({
		el:".categoryShow",
		memberTemplate: _.template(contpl),
		initialize: function() {
			//this.containerBuild();
        },
        setData: function(data){
			//this.collection = new MemberCollection(data);
			this.data = data;
		},
		events: {
		 	"click .management": "showOperateMenu",
		 	"click .cancel": "hideOperateMenu",
		 	"click .setmanager":"setManagerData",
		 	"click .assignqun":"assignQunData",
		 	"click .detailcard": "detailCard"
		},
		detailCard: function(){
    		var usrDetailCardView = new UsrDetailCardView({
	    		model: this.model
    		});
    	  if ( this.model.get('gender') == null ){
    			$.ajax({
		            type: "post",
		            url: global.url + "/Curry/relation/checkIfFriendAndGetUser?userId=" + sender + "&fid=" + receiver,
		            success: function(data) {
			    		usrDetailCardView.model.set(data);
			    		usrDetailCardView.dialog();
			    		console.log(data)
				       
				    },
				    error: function (XMLHttpRequest, textStatus, errorThrown) {
					}
					
		        });
    		}else{
    			usrDetailCardView.dialog();
    		}
    		
    		
    	},
		setManagerData:function(){
         this.setManagerDialog();
		},
		setManagerDialog:function(){
        	var d = dialog({
			    title: '设为管理员',
			    content: '<span style="display:inline-block;line-height:50px;margin-left:10px">设为管理员成功！</span>',
			    cancelValue: '完成',
			    cancel: function () {
			    	this.remove();
			    },
			});
			d.showModal();
			setTimeout(function () {
			    d.close().remove();
			}, 1000);
		},
		assignQunData:function(){
         this.assignQunDialog();
		},
		assignQunDialog:function(){
         	var d = dialog({
			    title: '转让群',
			    content: '<span style="display:inline-block;line-height:50px;margin-left:10px">转让群成功！</span>',
			    cancelValue: '完成',
			    cancel: function () {
			    	this.remove();
			    },
			});
			d.showModal();
			setTimeout(function () {
			    d.close().remove();
			}, 1000);
		},
		showOperateMenu:function(e){
			$(e.target).css({"display":"none"});
			this.$el.find(".cancel").css({"display":"block"});
			this.$el.find(".operatemenu").css({"display":"block"});
			this.$el.find(".inputDiv").css({"display":"block"});
		},
	    hideOperateMenu:function(e){
			$(e.target).css({"display":"none"});
			this.$el.find(".management").css({"display":"block"});
			this.$el.find(".operatemenu").css({"display":"none"});
			this.$el.find(".inputDiv").css({"display":"none"});
		},
		containerBuild: function() {
			this.$el.html(this.memberTemplate(this.data));
		},
		render: function() {			
			_.each(this.collection.models, function(item) {
				this.renderItem(item);
			}, this);
		},
		renderItem: function(item) {
			var memberItemView = new MemberItemView({
				model: item
			});
			this.$el.find("tbody").append(memberItemView.render().el);
		},
		setParent : function(parent){
			this.parent = parent;
		},
		getAllData: function(){
			this.$el.find("tbody").empty();
			this.collection = new MemberCollection(this.data);
			this.render();
		}
	});

     return StreetMemberTableView;
 });