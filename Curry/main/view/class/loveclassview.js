/*
* 我爱我班模块
*/
var loveclassdata = [{
	"blogtitle": "很多时候，帮助别人同时也是在帮助自己",
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
	"blogtitle": "漏洞有时是致命的",
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
define(['backbone',
	//'model/classblogmodel',
	'view/share/blogcontentview',
	// 'view/class/loveclasscontentview',
	'view/class/postphotoview',
	'view/class/postmyphotoview',
	'text!tpl/class/loveclasstpl.html',
	'global'], function(Backbone,BlogContentView,PostPhotoView,PostMyPhotoView,tpl, global) {  

    var LoveClassView = Backbone.View.extend({
        el: $('#container-fluid'),
		classInfoTemplate: _.template(tpl),
		
		// setModel:function(){
		// 	this.model = new ClassBlogModel();
		// },
		initialize: function() {

        },

		render: function() {
			var container = $('<div class="category fn-clear"></div><div class="categoryShow"></div>');
			this.$el.html(container);
			this.$el.find(".category").html(tpl);
			
			this.getMessage();
			this.intercept();
        },
        events: {
        	"click .post-photo": "postPhoto",
        	"click .post-myphoto": "postMyPhoto"
        },
        setParent : function(parent){
			this.parent = parent;
		},
		// 发照片
        postPhoto: function() {
        	var postPhotoView = new PostPhotoView();
	            postPhotoView.render();
	            postPhotoView.setParent(this);
        		this.$el.append(postPhotoView.$el);
        },
        // 我发布的照片
        postMyPhoto: function(e) {
        	var postMyPhotoView = new PostMyPhotoView();
	            postMyPhotoView.render();
	            postMyPhotoView.setParent(this);
	            this.$el.append(postMyPhotoView.$el);
        		//this.parent.getLoveClass();
        },
        
		// 我爱我班
		getMessage: function(){
			var blogContentView = new BlogContentView();
	            blogContentView.setCollection(loveclassdata);
	            blogContentView.render();
			// var loveclassContentView = new LoveClassContentView();
	  //           loveclassContentView.setCollection(loveclassdata);
	  //           loveclassContentView.render();
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
		}
     });
     
     return LoveClassView;
 });