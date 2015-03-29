define([
	'backbone',
	'model/tnno/latestmsgmodel',
	'view/share/chatview',
	'text!tpl/tnno/latestmsgtpl.html',
	'global'
	], function(Backbone,LatestMsgCollection,ChatView,msgtpl,global) {
	var self;
	// 联系列表视图
	var ContactItemview = Backbone.View.extend({
		tagName: 'div',
		contactitemTemplate: _.template(msgtpl),
		initialize:function(){
    		this.listenTo(this.model,"change",this.render);
    	},
		render: function() {
			this.$el.html(this.contactitemTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"click .list-item": "chatWindow",
		},
		chatWindow: function(){
			//判断消息类型，调用不同视图
			if(this.model.get("type") == "singledialog" ){
				var chatView = new ChatView({
					model:this.model
				});
				chatView.render();
				chatView.setParent(global.homepage);
			}
			
		},
	});
	
    
    var LatestMsgView = Backbone.View.extend({
    	el:'.list-container',
    	initialize:function(){
    		self = this;
    	},
		setCollection: function(data){
			this.collection = new LatestMsgCollection(data);
			this.listenTo(this.collection,"add",this.render);
		},
		insertCollection: function(data,index){
			this.collection.add(data, {at: index});
		},
		render: function() {
			latestCallBack(this.fun);
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderContact(item);
			}, this);
			global.temp = this.collection
		},
		renderContact: function(item) {
			var contactItemView = new ContactItemview({
				model: item
			});
			this.$el.append(contactItemView.render().el);
		},
		fun:function(type,message,date,senderid,receiverid,sendernickname,senderphoto){
			console.log(senderid);
			var itemext = null;
			_.each(self.collection.models, function(item){
				if (senderid == item.get("senderid")){
					itemext = item;
				};
			},self);
			if (itemext != null){
				itemext.set({
						message: message
					},{at: 0});
			} else {
				self.insertCollection({
				    nickname: sendernickname,
				    senderid: senderid,
				    photo: senderphoto,
				    message:message,
				    type:type
				 },0);
			}
			
			console.log(self.collection);
		   
		},
     });
     
     return LatestMsgView;
 });