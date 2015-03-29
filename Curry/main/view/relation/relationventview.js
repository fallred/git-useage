/*
* 朋友圈
*/
var blogdata2 = [{
	"blogtitle": "慢慢享受生活——我的厦门之旅123",
	"nickname": "陈晓星星",
	"updatetime":"10:05:40",
	"blogabstract":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"img": "http://localhost:8080/Curry/images/1111.jpg",
	"blogtotalcomment":"0",
	"blogtotaltransmit":"30",
	"blogtotalassist":"430",
	"blogtotalfavorite":"20",
	"blogtotalvisit":"70",
	"id":1
},{
	"blogtitle": "香港言爱基金捐助",
	"nickname": "阿佛搭",
	"updatetime":"10:05:40",
	"blogabstract":"毕节市8所思源实验学校是由有关县（区）政府出资和香港言爱基金捐助新建的九年一贯制义务教育公办寄宿制学校，旨在整体迁移部分处于生态核心保护区和边远贫困地区的农村中小学生到该学校接受较高质量的义务教育，是一项教育移民扶贫工程，是贵州省委、省政府改善民生促进贵州经济社会发展的重点工程。",
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
	"img": "http://localhost:8080/Curry/images/1111.jpg",
	"blogtotalcomment":"0",
	"blogtotaltransmit":"30",
	"blogtotalassist":"430",
	"blogtotalfavorite":"20",
	"blogtotalvisit":"70",
	"id":2
}];
var writeblog123 = {
	"nickname":"张三",
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg"
};
define(['backbone',
	//'model/classblogmodel',
	'view/share/blogcontentview',
	'view/relation/writeblogview',
	'view/share/expressionview',
	'text!tpl/relation/relationventtpl.html',
	'global'], function(Backbone,BlogContentView,WriteBlogView,ExpressionView, tpl, global) {  

    var RelationVentView = Backbone.View.extend({
        el: '#container-fluid',
		classInfoTemplate: _.template(tpl),
		
		// setModel:function(){
		// 	this.model = new ClassBlogModel();
		// },
		initialize: function() {
			$(this.el).off();
        },
		render: function(blogtitle, blogcontent) {
			var container = $('<div class="category fn-clear"></div><div class="categoryShow"></div>');
			this.$el.html(container);
			this.$el.find(".category").html(tpl);

			this.getMessage(blogdata2);
        },
        events: {
        	"click .write-blog": "writeBlog",
			"click .msgsendbtn": "postMsg",
			"keypress #msgsend": "postKeypress",
			"change #uploadpic":"uploadChatPic",
			"click .btn-exp": "expression"
		},
        //setParent : function(parent){
			//this.parent = parent;
		//},
        // 写博客
        writeBlog: function() {
        	var writeBlogView = new WriteBlogView();
        		writeBlogView.setModel(writeblog123);
	            writeBlogView.render();
	            writeBlogView.setParent(this);
        		this.$el.append(writeBlogView.$el);
        },
       	
		getMessage: function(data){
			blogContentView = new BlogContentView();
            blogContentView.setCollection(data);
            blogContentView.render();
		},
		//内容截取
		intercept : function() {
			$(".text-content").each(function(i,el) {
	    		var str = $(el).text();
	    		var name = str.substr(0,200);
	    		if (str.length > 200) {
	    			var newname = name + '...';
	    			$(this).text(newname);
	    		}else {
	    			$(this).text(str);
	    		}
    		});
		},
		//发表
		postMsg: function(){
			//定义变量，过滤出图片以外的所有html标签
			var chatinput = this.$el.find("#msgsend"),chatmsg = chatinput.html().replace(/<(?!img)[^>]*>/gi,""), type="msg_talk";
			var expfaces = chatinput.find("img.expface[unicode]"), count = expfaces.length;
			for ( i=0; i < count; i++ ) {
				var ucode = "&#x" + expfaces.eq(i).attr("unicode") + ";";
				chatmsg = chatmsg.replace(/<img.*?class=\"expface\".*?(?:>|\/>)/i, ucode);
			};
			var blogauthorityid = this.$el.find('.selecter-trigger input').attr('data-id');
			//var blogcontent = this.$el.find(".blog-say").text();
			var blogdata = {
				"blogtitle":"@"+global.usrinfo.nickname+"的吐槽爆料",
				"blogfcategory":5,
				"blogscategory":0,
				"blogauthority":blogauthorityid,
				"userId": global.usrinfo.id,
				"blogcontent":chatmsg
			};
			$.ajax({
	            type: "post",
	            //url:"login.html",
	            url: global.url + "/Curry/blog/createBlog",
	            dataType:"json",
	            data: {newBlog: JSON.stringify(blogdata)},
	            success: function(data) {
	            	console.log(data)
	           //  	msg.usernickname = global.usrinfo.nickname;
	           //  	msg.userphoto = global.usrinfo.photo;
	           //  	chatContentView.insertCollection(msg);
         			// chatinput.html("");
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
		//上传
		uploadChatPic: function(){
    		$.ajaxFileUpload({
		        //url: global.url + "/Curry/file/upload",//处理上传用的后台程序,可以是PHP,也可以是ASP等
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
    		expressionView.expressionDialog("top left","#msgsend","expmark");
    	},

	});
     
     return RelationVentView;
 });

