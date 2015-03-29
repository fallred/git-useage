define([
	'backbone',
	'view/share/qundetailcardview',
	'view/share/spaceview',
	'view/share/qunchatcontentview',
	'view/contact/qunmemberview',
	'view/share/qunaddmemberview',
	'view/share/expressionview',
	'text!tpl/share/qunchatcontainertpl.html',
	'global'
	], function(Backbone,QunDetailCardView,SpaceView,QunChatContentView,QunMemberView,QunAddMemberView,ExpressionView,conttpl,global) {
	
	
	// 联系列表视图
	var self, receiver, sender;
	var qunChatContentView;
	var QunChatView = Backbone.View.extend({
		el: "#container-fluid",
		template: _.template(conttpl),
		parent: null,
		initialize: function(){
			this.$el.off();
			self = this;
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
			"click .qunchat .btn-close": "closePage",
			"click .detailcard": "detailCard",
			"click .msgsendbtn":"postMsg",
			"click .invitein":"qunAddMember",
			"keypress #msgsend":"postKeypress",
			"change #uploadpic":"uploadChatPic",
			"click .btn-exp":"expression",
			"click .qunmember":"qunMember",
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
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/groupMessage/queryGroupMessage?userId="+sender+"&groupId="+ receiver,
	            success: function(data) {
	            	qunChatContentView = new QunChatContentView();
					qunChatContentView.setCollection(data);
					qunChatContentView.render();
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
				loginId: currLoginId
			};
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/groupMessage/sendGroupMessage",
	            data: {newMsg: JSON.stringify(msg)},
	            success: function(data) {
	            	msg.usernickname = global.usrinfo.nickname;
	            	msg.userphoto = global.usrinfo.photo;
	            	qunChatContentView.insertCollection(msg);
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
	        var qunDetailCardView = new QunDetailCardView({
    			model: self.model
    		});
    		qunDetailCardView.dialog();
    	},
    	qunMember: function(){
    		var qunMemberView = new QunMemberView({
    			model:this.model
    		});
    		qunMemberView.setParent(this);
    		qunMemberView.render();
    	},
    	qunAddMember: function(){
    		var qunAddMemberView = new QunAddMemberView();
    		qunAddMemberView.dialog();
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
     
     
     return QunChatView;
 });