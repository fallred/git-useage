/*当前街区模块*/
var memberdata=[{
			"identity": "成员",
			"username": "刘盼盼",
			"time":"10:05:40",
			"number":"45785465",
			"gender":"男",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg"
		},{
			"identity": "成员",
			"username": "五天",
			"time":"10:05:40",
			"number":"45785465",
			"gender":"女",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg"
		},{
			"identity": "群主",
			"username": "张兰兰",
			"time":"10:05:40",
			"number":"45785465",
			"gender":"男",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg"
		},{
			"identity": "成员",
			"username": "卡哈哈",
			"time":"10:05:40",
			"number":"45785465",
			"gender":"女",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg"
		}];
define(['backbone','model/street/currentstreetmodel','text!tpl/street/currentstreettpl.html','global'], function(Backbone,CurrentStreetModel,tpl,global) {   
    var self,page;
    var CurrentStreetView = Backbone.View.extend({
		CurrentStreetTemplate: _.template(tpl),
		el:".category",
		initialize:function() {
			self = this;
		},
		events:{
            "click .btn-close": "closePage",
            "click .addfocus":"setaddFocusDialog",
    		"click .cancelfocus":"setcancelFocusDialog",
    		"click .invitation":"renderMessage",
            "click .fans":"getStreetMember",
            "click .writeblog":"writeBlog",
        },
         renderMessage:function(){
         	this.parent.getMessage();
         },
         getStreetMember:function(){
         	this.parent.getStreetMember();
         },
         writeBlog:function(){
         	this.parent.renderEdit();
         },
		 setcancelFocusDialog:function(){
			var d = dialog({
				title:'提示',
				content: '<span style="display:inline-block;line-height:50px;margin-left:10px">确定不关注<span style="color:#f65d58">篮球吧</span>吗？</span>',
				okValue: '确定',
				ok: function () {
					 self.model.set({focusstatus:true});
				},
				cancelValue: '取消',
				cancel: function () {
				 this.remove();
				},
		  });
		  d.showModal();
		},
		setaddFocusDialog:function(){
			var d = dialog({
				 title: '关注街区成功提示',
				 content: '<span style="display:inline-block;line-height:50px;margin-left:10px">恭喜您成功成为本街区的第<span style="color:#f65d58">888</span>位成员</span>',
				 okValue: '知道了',
				 ok: function () {
					  self.model.set({focusstatus:false});
				 },
			});
			d.showModal();
		},
		closePage: function(){
			this.$el.html("");
    		//关闭后渲染父视图
			this.parent.render();
    	},
		setParent:function(parent){
			this.parent = parent;
		},
        setModel:function(data){
            this.model = new CurrentStreetModel(data);
            this.listenTo(this.model, "change", this.render);
        },
		render:function() {
    		this.$el.html(this.CurrentStreetTemplate(this.model.toJSON()));
    		// if(this.flag==false){
      //         $(".category .addfocus").html('取消关注').removeClass("addfocus").addClass("cancelfocus");
    		// }
    	},
	})
   return CurrentStreetView;
 });