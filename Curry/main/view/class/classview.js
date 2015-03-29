/*
* 班级主页面
* 基于AMD (Asynchronous Module Definition) 规范实现
*/
//班级信息选项
var classInfodata = {
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg",
	"schName": "华师一附中",
	"className": "2014级3班"
};
//创建班级信息
var createclass = {
	"schName": "华师一附中",
	"className": "2014级3班",
	"name":"",
	"phone":"",
	"plane":"",
	"teacherCertificate":""
}
// 班级信息详情
var classDetaildata = [{
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg",
	"nickName": "小喇叭",
	"listid":"horn",
    "content": "最新发送消息的前20字" 
},{
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg",
	"nickName": "班级群聊",
	"listid":"groupChat",
    "content": "最新发送消息的前20字" 
},{
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg",
	"nickName": "班级博客",
	"listid":"blog",
    "content": "最新发送消息的前20字" 
},{
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg",
	"nickName": "本校公众号",
	"listid":"public",
    "content": "最新发送消息的前20字" 
},{
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg",
	"nickName": "我爱我班",
	"listid":"loveClass",
    "content": "最新发送消息的前20字" 
},{
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg",
	"nickName": "本班成员",
	"listid":"member",
    "content": "最新发送消息的前20字" 
},{
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg",
	"nickName": "云课堂",
	"listid":"classroom",
    "content": "最新发送消息的前20字" 
}];
define(['backbone', 
			'view/class/classinfoview',
			'view/class/classdetailview',
			'view/class/addclassview', 
			'view/class/establishclassview',
            //'text!tpl/categorytpl.html',
            'global'], 
    function(Backbone, ClassInfoView, ClassDetailView, AddClassView, EstablishClassView, global) {
       var self;

    var ClassView = Backbone.View.extend({
 		el: $("#main-container"),
    	containerBuild : function(){
    		var container = $('<div class="category fn-clear"></div><div class="categoryShow"></div>');
    		listcontainer = $('<div class="list-top"></div><div class="list-container"></div>');
    		//this.$el.find("#container-fluid").html(container);
    		this.$el.find(".main-list").attr("id","classlist").html(listcontainer);
    	},
 		initialize: function(){
 			this.containerBuild();
 			self = this;
 		 	this.render();
 		},

        render: function(){	
        	this.getClassinfo();
        	this.getClassdetail();
            //this.getAddclass();
        },
        
        getClassinfo : function(){
        	var classInfoView = new ClassInfoView();
	            classInfoView.setModel(classInfodata);
	            classInfoView.render();
	            if(global.usrinfo.role == 1 || global.usrinfo.role == 3){
	            	var addclassView = new AddClassView();
			            addclassView.render();
				}else if (global.usrinfo.role == 2) {
					var establishClassView = new EstablishClassView();
						establishClassView.render();
				}
	  
	   //      $.ajax({
	   //           type: "GET",
	   //           // url: global.url + "/Curry/group/getAllGroupAndUsers",
	   //           url: "classInfodata.json",
	             
	   //           success: function(data) {
	   //           	console.log(global.usrinfo);
	   //           	//global.quns = null;
		  //           var classInfoView = new ClassInfoView();
		  //           classInfoView.setModel(data);
		  //           classInfoView.render();
		  //           //global.quns = data;
			 //     },
			 //     error: function (XMLHttpRequest, textStatus, errorThrown) {
				// }
	   //       });
        },
        getClassdetail : function(){
        	var classDetailView = new ClassDetailView();
	            classDetailView.setCollection(classDetaildata);
	            classDetailView.setParent(this);
	            classDetailView.render(); 
	   //          $.ajax({
	   //           type: "GET",
	   //           //url: global.url + "/Curry/group/getAllGroupAndUsers",
	   //           url: "classDetaildata.json",
	             
	   //           success: function(data) {
	   //           	//global.quns = null;
			 //        var classDetailView = new ClassDetailView();
		  //           classDetailView.setCollection(data);
		  //           classDetailView.setParent(this);
		  //           classDetailView.render(); 
		  //           //self.$el.find(".list-container").append(classDetailView.$el);
		  //           //global.quns = data;
			 //     },
			 //     error: function (XMLHttpRequest, textStatus, errorThrown) {
				// }
	   //       });
        },

        // 加入班级
        // getAddclass : function(){
        // 	var addclassView = new AddClassView();
	       //      // categoryView.setModel();
	       //      addclassView.render();
	       //      this.$el.find("#container-fluid").append(addclassView.$el);
        // },
        
  });


    return ClassView;
});
