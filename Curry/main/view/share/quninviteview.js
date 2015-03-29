define(['backbone','model/share/qunmodel','text!tpl/share/quninviteitemtpl.html','global',], function(Backbone,QunCollection,tpl,global) {   
    // 访问元素视图
    var self;
    var QunInviteItemView = Backbone.View.extend({
		tagName: 'div',
		className: 'list-item',
		qunItemTemplate: _.template(tpl),
		initialize: function() {

		// 监听模型change事件
		
		this.listenTo(this.model, "change", this.render);
		
		},
		render: function() {
			this.$el.html(this.qunItemTemplate(this.model.toJSON()));
			return this;
		},
		events: {
		},

	});
	var QunInviteView  = Backbone.View.extend({
		tagName: 'div',
		className: 'quninvitelist fn-clear',
		initialize: function(){
			self =this;
			// this.$el.listenTo(".newgroupbtn","click", this.newGroup());
		},
		setCollection: function(data){
			this.collection = new QunCollection(data);
		},
		events: {
			// "change select.selectgroup": "newGroup",
			// "click .btn-cancel": "cancelGroup",
			// "click .btn-ok": "addGroup"
		},
		dialog:function(){
			this.render();
			var d = dialog({
				id:'quninvitedialog',
			    title: '我的群列表',
			    content: this.el,
			    cancelValue: '取消',
			    cancel: function () {},
			    width: 400
			});
			d.showModal();
		},
		render: function(){
			//判断用户有没有群
			if (this.collection.length > 0){
				_.each(this.collection.models, function(item) {
					this.renderItem(item);
				}, this);
			} else {
				this.$el.html("您还没有加入任何群");
			}
			
			return this;
		},
		renderItem: function(item){
			var qunInviteItemView = new QunInviteItemView({
				model:item
			});
			this.$el.append(qunInviteItemView.render().el);
		},
		
		postData: function(){
			var uid = 38,
				smess = $("#textmsg").val(),
				grou= $(".friendremark .selecter input").attr("data-id");
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/relation/sendRelationInfo",
	            data: "uid=" + uid + "&fid=" + fid + "&smess=" + smess + "&grou=" + grou,
             
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
		

	});
     
     return QunInviteView;
 });