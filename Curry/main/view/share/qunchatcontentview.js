define([
	'backbone',
	'model/share/chatmodel',
	'text!tpl/share/qunchatcontenttpl.html',
	'global'
	], function(Backbone,ChatCollection,tpl,global) {
	var self,flag;
	var QunChatContentItemView = Backbone.View.extend({
		tagName: 'div',
		template: _.template(tpl),
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			//判断消息是否为自己所发，并加上class
			// if(this.model.get("senderid") == global.usrinfo.id){
				// this.$el.addClass("sendermsg");
			// }
			return this;
		},
		events: {
			"click .msgpop img": "openImg"
		},
		openImg: function(e){
			if(e.target.className != 'expface'){
				var src = e.target.currentSrc;
				window.open(src);
			}
			
		}
	});
	var QunChatContentView = Backbone.View.extend({
		el:'.container-content',
		setCollection: function(data){
			this.collection = new ChatCollection(data);
			this.listenTo(this.collection,"add",this.render);
		},
		insertCollection: function(data,index){
			this.collection.add(data, {at: index});
		},
		initialize: function(){
			flag = true;
			self = this;
		},
		render: function() {
			callBack(this.fun);
			this.$el.empty();
			_.each(this.collection.models, function(item) {
				this.renderItem(item);
			}, this);
			this.scrollBtm();
		},
		renderItem: function(item){
			var qunChatContentItemView = new QunChatContentItemView({
				model:item
			});
			//解析信息表情，将UTF表情字符替换为图片
			var rendercontent = qunChatContentItemView.render().$el;
			var newmsg = this.expFilter(rendercontent.find(".msgpop").html());
			rendercontent.find(".msgpop").html(newmsg);
			this.$el.append(rendercontent);
		},
		fun:function(type,message,date,senderid,receiverid,sendernickname,senderphoto){
		    self.collection.add({
		    	usernickname: sendernickname,
		    	messagecontent:message,
		    	senderid:senderid,
		    	receiverid:receiverid,
		    	userphoto:sendernickname
		    });
		},
		scrollBtm: function(){
			if ( flag == true ){
				this.$el.scrollTop(this.$el[0].scrollHeight);
				flag = false;
			} else {
				this.$el.animate({
					scrollTop: this.$el[0].scrollHeight
				},300);
			}
			
		},
		expFilter:function(what){
	        var newmsg = ioNull.emoji.parse(what);
	        return newmsg;
		}
	});
	 return QunChatContentView;
 });