define(['backbone','view/contact/qundragfriendview','text!tpl/contact/quninvitetpl.html','global',], function(Backbone,ContactsFriendView,invitetpl,global) {   
    // 访问元素视图
    var self,usrid=[],newgroup=[],
    	qunObj = {};
	var QunAddMemberView  = Backbone.View.extend({
		tagName: 'div',
		className: 'qunaddmember',
		initialize: function(){
			self =this;
			//清空群成员选择
			//global.qundrag =[];
			// this.getData();
			// this.$el.listenTo(".newgroupbtn","click", this.newGroup());
		},
		setCollection: function(data){
			this.collection = new SelectorCollection(data);
		},
		events: {
		},
		dialog: function(){
			this.render();
			var d = dialog({
				id:'qunaddmemberdialog',
			    title: '群成员邀请',
			    //不取innerHTML导致弹窗消失后el元素依然留在页面上
			    content: this.$el,
			    button: [
			        {
			            id: 'ok',
			            value: '确定',
			           	callback: function () {
			           		self.postData();
							global.qundrag =[];
			            },
			             autofocus: true
			        },
			        {
			            id: 'cancel',
			            value: '取消',
			           	callback: function () {
			           		//清空群成员选择
							global.qundrag =[];
			            },
			        }
			    ],
			    width: 600
			});
			d.showModal();
		},
		render: function(){
			this.$el.html(invitetpl);
			var contactsFriendView = new ContactsFriendView();
            contactsFriendView.setCollection(global.friends);
            contactsFriendView.render();
            self.$el.find(".listcontainer").html(contactsFriendView.$el);
			//修改el指向，承接事件代理（导致itemview事件绑定失效）
			// this.setElement($(".groupmglist"));
			
			return this;
		},
		postData: function(){
			this.getData();
			console.log(JSON.stringify(newgroup));
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/group/greateGroup",
	            dataType:"json",      
	            data: {quncreate: JSON.stringify(newgroup)},
	            success: function(data) {
	             	console.log(data.str);
			        self.send(data);
			        
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
			
         	});
		},
		send: function(data){
			var d = dialog({
			    title: '提示',
			    content: '<span style="display:inline-block;line-height:50px;margin-left:10px">'+ data.str +'</span>',
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
		getData: function(){
			usrid =[];
			newgroup = [];
			_.each(global.qundrag,function(item){
				usrid.push(item.get("id"));
			});
			newgroup.push(qunObj,{id:usrid});
		},
		
	});
     
     return QunAddMemberView;
 });