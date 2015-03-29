define(['backbone','model/share/groupmodel','text!tpl/contact/groupmgtpl.html','text!tpl/contact/groupedittpl.html','global',], function(Backbone, GroupCollection,mgtpl,edittpl,global) {   
    // 访问元素视图
    var self,removedModel, data = [];
    var GroupItemView = Backbone.View.extend({
    	tagName: 'li',
    	mgtemplate: _.template(mgtpl),
    	edittemplate: _.template(edittpl),
    	initialize: function(){
			this.listenTo(this.model,"change",this.render);
		},
    	render: function(){
    		this.$el.html(this.mgtemplate(this.model.toJSON()));
    		return this;
    	},
    	events: {
			"click .delete": "deleteGroup",
			"click .edit": "editGroup",
			"click .cancel": "editCancel",
			"click .submit": "editSubmit",
		},
		deleteGroup: function(){
			removedModel = this.model;
			data.push({
				groupname:"",
				value: this.model.get("id")
			});
		},
		editGroup: function(){
			this.$el.html(this.edittemplate(this.model.toJSON()));
		},
		editCancel: function(){
			this.render();
		},
		editSubmit: function(){
			var text = this.$el.find("input").val();
			if(text == ""){
				return false;
			}else{
				this.model.set({
					groupname: text
				});
				
			}
		},
    });
	var GroupMgView  = Backbone.View.extend({
		tagName: 'ul',
		className: 'groupmglist',
		initialize: function(){
			self =this;
			data = [];
		},
		setCollection: function(data){
			this.collection = new GroupCollection(data);
			this.listenTo(this.collection,"add",this.render);
			this.listenTo(this.collection,"remove",this.render);
		},
		insertCollection: function(data,index){
			this.collection.add(data, {at: index});
		},
		events: {
			"click .addnewgroup a": "addNewGroup",
			"click .delete": "removeModel",
		},
		dialog: function(){
			this.render();
			var d = dialog({
				id:'groupmgdialog',
			    title: '自定义好友分组',
			    //不取innerHTML导致弹窗消失后el元素依然留在页面上
			    content: this.$el,
			    okValue: '确定',
			    ok: this.postData,
			    cancelValue: '取消',
			    cancel: function () {
			    },
			    width: 300
			});
			d.showModal();
		},
		render: function(){
			this.$el.empty();
			_.each(this.collection.models, function(item) {
				//过滤分组信息，id为0为系统默认分组，不显示
				if (item.get('id') !== 0 && item.get('nickname') !==""){
					this.renderItem(item);
				};
			}, this);
			this.$el.append('<li class="addnewgroup"><a href="javascript:void(0)"><i class="iconfont">&#xe60d;</i>新增分组</a></li>');
			return this;
		},
		renderItem: function(item){
			var groupItemView = new GroupItemView({
				model:item
			});
			this.$el.append(groupItemView.render().el);
		},
		getData: function(){
			_.each(this.collection.models, function(item) {
				var Vdata = function(){
					if (item.get("id") > 0){
						return item.get("id");
					} else if ( item.get("id") == 0 ) {
						return 0;
					} else {
						return item.get("value");
					}
				};
				
				data.push({
					groupname: item.get("groupname"),
					value: Vdata()
				});
			}, this);
		},
		postData: function(){
			self.getData();
			console.log(data);
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/relagrp/updateUserrelagrpBatch?userId="+ global.usrinfo.id,
	            dataType:"json",      
	            data: {groups: JSON.stringify(data)},
	            success: function(data) {
	             	console.log(data) ;
			        self.send();
			        
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
			
         });
		},
		send: function(){
			var d = dialog({
			    title: '添加好友',
			    content: '<span style="display:inline-block;line-height:50px;margin-left:10px">您的好友请求已发送成功！</span>',
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
		removeModel: function(){
			this.collection.remove(removedModel);
		},
		addNewGroup: function(){
			//新建分组默认value为-1
			this.insertCollection({
				groupname: '未命名',
				value: -1
			});
		},
		
	});
     
     return GroupMgView;
 });