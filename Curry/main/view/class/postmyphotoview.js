/*
* 我的博客模块
*/
var photodata1 = [{
	"title": "我发布的照片1",
	"nickName": "阿佛搭",
	"date":"10:05:40",
	"content":"毕节市8所思源实验学校是由有关县（区）政府出资和香港言爱基金捐助新建的九年一贯制义务教育公办寄宿制学校，旨在整体迁移部分处于生态核心保护区和边远贫困地区的农村中小学生到该学校接受较高质量的义务教育，是一项教育移民扶贫工程，是贵州省委、省政府改善民生促进贵州经济社会发展的重点工程。",
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
	"img": "http://localhost:8080/Curry/images/usrcardbg2.jpg",
	"comment":"0",
	"forwarding":"30",
	"praise":"430",
	"collect":"20",
	"read":"70"
},{
	"title": "我发布的照片2",
	"nickName": "陈晓星星",
	"date":"10:05:40",
	"content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"img": "http://localhost:8080/Curry/images/usrcardbg2.jpg",
	"comment":"0",
	"forwarding":"30",
	"praise":"430",
	"collect":"20",
	"read":"70"
}];
define(['backbone',
	'model/class/noticemodel',
	'view/share/blogcontentview',
	'text!tpl/class/postmyphototpl.html',
	'global'], function(Backbone,NoticeCollection,BlogContentView, tpl,global) {  

    var PostMyPhotoView = Backbone.View.extend({
        el: $('#container-fluid'),
		classInfoTemplate: _.template(tpl),
		
		setModel:function(){
			this.model = new NoticeCollection();
		},
		initialize: function() {

        },

		render: function() {
			var container = $('<div class="category fn-clear"></div><div class="categoryShow"></div>');
			this.$el.html(container);
			this.$el.find(".category").html(tpl);
			
			this.getMessage(photodata1);
			//this.parent.intercept();
			
        },
        // 发布关闭
        events: {
			"click .close-photo": "closePage"
		},
		setParent : function(parent){
			this.parent = parent;
		},
		closePage: function(){
			//判断当前视图
			this.parent.render();
			
    	},
		
		getMessage: function(data){
			var blogContentView = new BlogContentView();
            blogContentView.setCollection(data);
            blogContentView.render();
            this.$el.find(".categoryShow").html(blogContentView.$el);
		},

     });
     
     return PostMyPhotoView;
 });