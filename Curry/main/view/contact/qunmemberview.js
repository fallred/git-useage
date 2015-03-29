define(['backbone',
		'view/share/memberlistview',
		'text!tpl/contact/qunmembertpl.html',
		'global'], 
    function(Backbone,MemberListView,tpl,global) {
    var self,receiverId;
    var QunMemberView = Backbone.View.extend({
    	el: '#container-fluid',
        template: _.template(tpl),
        parent: null,
        initialize: function(){
        	//空间与聊天窗口共用一个el，解绑事件会导致空间关闭后，聊天窗口绑定事件失效
        	//this.$el.off();
        	self = this;
        },
        render: function(){
        	//只存第一次进入前的值
			this.$el.html(this.template(this.model.toJSON()));
			this.getMember();
			//$el解绑后，用delegateEvents重新绑定事件
			this.delegateEvents();
			return this;
        },
        setParent: function(parent){
        	this.parent = parent;
        },
       	events:{
       		"click .tab-xg a": "shiftmenu",
       		"click .qunmembermg .btn-close": "closePage",
       		"click .btn-advedit": "advEdit",
			"click .btn-cancel": "cancelEdit",
       	},
       	getMember: function(){
       		var memberListView = new MemberListView;
       		var param = this.model.get('id');
       		memberListView.setCollection(this.model.get("member"));
       		memberListView.render(param);
       		//把当前view传到下个视图，以便关闭时返回当前veiw
       		memberListView.setParent(this);
       	},
       	advEdit: function(){
        	var temp = '<a href="javascript:void(0)" class="fn-right btn btn-r-r-xs btn-ok">确定</a><a href="javascript:void(0)" class="fn-right btn btn-r-b-xs btn-cancel">取消</a>';
        	this.$el.find(".editbtn").html(temp);
        },
		cancelEdit: function(){
        	var temp = '<a href="javascript:void(0)" class="fn-right btn btn-r-r-md btn-advedit">高级编辑</a>';
        	this.$el.find(".editbtn").html(temp);
       	},
        closePage: function(){
        	//判断当前视图
        	this.parent.render();
        	
        	
    	},
    	
    });
    
    return QunMemberView;
});