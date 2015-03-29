define(['backbone','model/share/selectormodel','view/share/selectorview','text!tpl/share/addfriendtpl.html','global',], function(Backbone, SelectorCollection,SelectorView,tpl,global) {   
    // 访问元素视图
    var self,groupSelecter,nickname,remark,lPhoto,receiver,name,type;
	var AddFriendView  = Backbone.View.extend({
		tagName: 'div',
		className: 'fn-clear',
		template: _.template(tpl),
		initialize: function(){
			self =this;
			this.getData();
			// this.$el.listenTo(".newgroupbtn","click", this.newGroup());
		},
		setCollection: function(data){
			this.collection = new SelectorCollection(data);
		},
		events: {
			// "change select.selectgroup": "newGroup",
			// "click .btn-cancel": "cancelGroup",
			// "click .btn-ok": "addGroup"
		},
		dialog: function(){
			this.render();
			var d = dialog({
				id:'addfrienddialog',
			    title: '将'+ name + '加为好友？',
			    content: this.$el,
			    okValue: '确定',
			    ok: this.postData,
			    cancelValue: '取消',
			    cancel: function () {},
			    width: 400,
			    onremove: function () {
			        self.$el.remove();
			    },
			});
			d.showModal();
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			this.renderGroup();
			return this;
		},
		renderGroup: function(){
			this.setCollection(global.groups);
			_.each(this.collection.models, function(item) {
				this.renderGroupItem(item);
			}, this);
			//下拉框初始化方法
			selecter();
			//自动选择第一项
			var val = this.$el.find(".selecter-options li a").eq(0).attr("value"),
				text = this.$el.find(".selecter-options li a").eq(0).text();
				this.$el.find(".selecter-trigger input").val(text).attr("data-id",val);
				this.$el.find(".selecter-options li").eq(0).addClass("selected");
		},
		renderGroupItem: function(item){
			var friendGroupSelector = new SelectorView({
				model:item
			});
			var options = friendGroupSelector.render().el;
			this.$el.find(".selecter-options").append(options);
		},
		
		postData: function(){
			var sender = global.usrinfo.id,
				sendmsg = $("#textmsg").val(),
				group = $(".friendremark .selecter input").attr("data-id");
				msg = {
					senderid:sender,
					receiverid:receiver,
					messagecontent:sendmsg,
					group: group
				};
				
				$.ajax({
		            type: "post",
		            url: global.url + "/Curry/relation/sendRelationInfo",
		            data: {newMsg: JSON.stringify(msg)},
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
			    content: '<img class="usrpic-md fn-left" src=' + lPhoto + ' alt=' + name + '> ' + '<span style="display:inline-block;line-height:50px;margin-left:10px">您的好友请求已发送成功！</span>',
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
		getData:function(){
			nickname = this.model.get('nickname');
			remark = this.model.get('remark');
			lPhoto = this.model.get('photo');
			receiver = this.model.get("id");
			if( remark !== null){
				name = remark;
			}else{
				name = nickname;
			};
		},

	});
     
     return AddFriendView;
 });