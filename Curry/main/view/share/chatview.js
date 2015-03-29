define([
	'backbone',
	'view/share/usrdetailcardview',
	'view/share/spaceview',
	'view/share/chatcontentview',
	'view/share/quninviteview',
	'view/share/expressionview',
	'text!tpl/share/chatcontainertpl.html',
	'global'
	], function(Backbone,UsrDetailCardView,SpaceView,ChatContentView,QunInviteView,ExpressionView,conttpl,global) {
	
	
	// 联系列表视图
	var receiver, sender;
	var chatContentView;
	var ChatView = Backbone.View.extend({
		el: "#container-fluid",
		template: _.template(conttpl),
		parent: null,
		initialize: function(){
			this.$el.off();
			this.listenTo(this.model,"change",this.render);
			receiver = this.model.get("id");
			sender = global.usrinfo.id;
			// this.render();
			//$('.chatbox .container-content').niceScroll();
			
		},
		setParent: function(parent){
        	this.parent = parent;
        },
		setCollection: function(data){
			
		},
		
		events: {
			"click .singlechat .btn-close": "closePage",
			"click .detailcard": "detailCard",
			"click .indvspace": "space",
			"click .msgsendbtn":"postMsg",
			"click .inviteto":"qunInvite",
			"keypress #msgsend":"postKeypress",
			"change #uploadpic":"uploadChatPic",
			"click .btn-exp":"expression",
			
		},
		render: function() {
			//赋予当前聊天对象，以便过滤推送消息
			global.currentChat = this.model.get("id");
			this.$el.html(this.template(this.model.toJSON()));
			this.chatContent();
			//$el解绑后，用delegateEvents重新绑定事件
			this.delegateEvents();
			return this;
		},
		chatContent: function(){
			var self = this;
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/friendMessage/queryFriendMessage?userId="+sender+"&friendId="+ receiver,
	            success: function(data) {
	            	//获取消息发送者的头像信息
	            	_.each(data, function(item){
	            		if (item.senderid == global.usrinfo.id ){
	            			item.userphoto = global.usrinfo.photo;
	            		} else {
	            			item.userphoto = self.model.get("photo");
	            		}
	            	});
	            	chatContentView = new ChatContentView();
					chatContentView.setCollection(data);
					chatContentView.render();
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
			
		},
		postMsg: function(){
			//定义变量，过滤出图片以外的所有html标签
			var chatinput = this.$el.find("#msgsend"),chatmsg = chatinput.html().replace(/<(?!img)[^>]*>/gi,""), type="msg_talk";
			var expfaces = chatinput.find("img.expface[unicode]"), count = expfaces.length;
			for ( i=0; i < count; i++ ) {
				var ucode = "&#x" + expfaces.eq(i).attr("unicode") + ";";
				chatmsg = chatmsg.replace(/<img.*?class=\"expface\".*?(?:>|\/>)/i, ucode);
			}
			var msg = {
				senderid:sender,
				receiverid:receiver,
				messagecontent:chatmsg,
			};
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/friendMessage/sendFriendMessage",
	            data: {newMsg: JSON.stringify(msg)},
	            success: function(data) {
	            	msg.usernickname = global.usrinfo.nickname;
	            	msg.userphoto = global.usrinfo.photo;
	            	chatContentView.insertCollection(msg);
         			chatinput.html("");
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
			

		},
		postKeypress: function(e){
			if (e.keyCode == 13){//回车键的键值是13
				this.$el.find(".msgsendbtn").click();
				return false;
			}
			
		},
		receiveMsg: function(){
			
		},
		closePage: function(){
			//关闭后渲染父视图
			this.parent.render();
			//关闭窗口清空当前聊天对象
			global.currentChat = null;
			
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
			    			console.log('data:'+data)
				       
				    },
				    error: function (XMLHttpRequest, textStatus, errorThrown) {
					}
					
		        });
    		}else{
    			usrDetailCardView.dialog();
    		}
    		
    		
    	},
    	space:function(){
    		var spaceView = new SpaceView({
    			model: this.model
    		});
    		if ( this.model.get('gender') == null ){
    			$.ajax({
		            type: "post",
		            url: global.url + "/Curry/relation/checkIfFriendAndGetUser?userId=" + sender + "&fid=" + receiver,
		            success: function(data) {
			    		spaceView.model.set(data,{silent: true});
			    		spaceView.render();
			    		
			    		console.log(data)
				       
				    },
				    error: function (XMLHttpRequest, textStatus, errorThrown) {
					}
					
		        });
    		}else{
    			spaceView.render();
    		}
    		spaceView.setParent(this);
    		global.currentChat = null;
    	},
    	qunInvite: function(){
    		var qunInviteView = new QunInviteView();
    		qunInviteView.setCollection(global.quns);
    		qunInviteView.dialog();
    	},
    	uploadChatPic: function(){
    		$.ajaxFileUpload({
		        url: global.url + "/Curry/file/upload",//处理上传用的后台程序,可以是PHP,也可以是ASP等
		        type: 'post',
		        secureuri: false,//异步
		        fileElementId: 'uploadpic',//上传控件ID
		        dataType: 'text',//返回的数据信息格式
		        success: function(data, status) {
		        	console.log(data);
		        	var html = '<img src=' + global.url + '/Curry/upload/' + data + '>';
		        	$("#msgsend").focus();
    				insertHtmlAtCaret(html);
		        }, 
		        error: function(data, status, e) {
		           //alert(e);
		        }
		    });
    	},
    	expression: function(){
    		var expressionView = new ExpressionView();
    		//传入弹窗形式，表情输入文本框，定位元素
    		expressionView.expressionDialog("top left","#msgsend","chatmark");
    	}
		
     });
     
     
     return ChatView;
 });