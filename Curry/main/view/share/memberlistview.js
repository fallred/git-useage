/*
* 成员列表
*/
define(['backbone','model/share/usermodel','view/share/usrdetailcardview','view/share/chatview','text!tpl/contact/qunmemberlisttpl.html','global'], function(Backbone,UserCollection,UsrDetailCardView,ChatView,tpl,global) {   
    // 访问元素视图
    var qunId,self,parentView;
	var MemberListItemView = Backbone.View.extend({
		tagName: 'tr',
		template: _.template(tpl),
		initialize:function(){
			this.listenTo(this.model, "change", this.render);
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
			"click .btn-detailcard": "detailCard",
			"click .btn-groupremark": "groupremark",
			"blur input.groupremarkinput": "groupremarkUpdata",
			"click .btn-chat": "chatWindow",
		},
		detailCard: function(){
			var userId = global.usrinfo.id, fId = this.model.get("id");
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
    	groupremark: function(){
			var remarkinput = "<input class='groupremarkinput' placeholder='" + this.model.get("groupremarkname") + "'>";
			this.$el.find(".groupremark").html(remarkinput).find(".groupremarkinput").focus();
    		
    		
    	},
    	groupremarkUpdata: function(){
			var userId = global.usrinfo.id, fId = this.model.get("id");
    		if ( this.$el.find('.groupremarkinput').val() == "" || this.$el.find('.groupremarkinput').val() == this.model.get('groupremarkname') ){
    			this.render();
    			return;
    		}else{
    			var groupRemarkName = this.$el.find('.groupremarkinput').val(), self = this;
    			var filejson = {
    				userId: userId,
    				groupId: qunId,
    				groupRemarkName: groupRemarkName
    			};
    			$.ajax({
		            type: "post",
		            url: global.url + "/Curry/group/updateGroupRemarkName",
		            data: {filejson: JSON.stringify(filejson)},
		            success: function(data) {
			    		self.model.set({
			    			groupremarkname: data.url
						});
				       
				    },
				    error: function (XMLHttpRequest, textStatus, errorThrown) {
					}
					
		        });
    		}
    		
    		
    	},
    	chatWindow: function(){
			var chatView = new ChatView({
				model:this.model
			});
			chatView.setParent(parentView);
			chatView.render();
			
		},
		
	});
	
    
    var MemberListView = Backbone.View.extend({
        el: '.memberlist',
		setCollection: function(data){
			this.collection = new UserCollection(_.compact(data));
		},
		
		render: function(param) {
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderItem(item);
			}, this);
			qunId = param;
		},
		renderItem: function(item) {
			var memberListItemView = new MemberListItemView({
				model: item
			});
			this.$el.append(memberListItemView.render().el);
		},
		setParent: function(parent){
        	parentView = parent;
        },
        
     });
     
     return MemberListView;
 });