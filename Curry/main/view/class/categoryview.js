/*
* 小喇叭模块
*/
// 公告内容
var noticedata123 = [{
	"noticetitle": "举行运动会",
	"nickName": "黄晓明",
	"time":"10:05:40",
	"content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg"
},{
	"noticetitle": "香港言爱基金捐助",
	"nickName": "小玉老师",
	"time":"10:05:40",
	"content":"毕节市8所思源实验学校是由有关县（区）政府出资和香港言爱基金捐助新建的九年一贯制义务教育公办寄宿制学校，旨在整体迁移部分处于生态核心保护区和边远贫困地区的农村中小学生到该学校接受较高质量的义务教育，是一项教育移民扶贫工程，是贵州省委、省政府改善民生促进贵州经济社会发展的重点工程。",
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg"
},{
	"noticetitle": "公告标题",
	"nickName": "黄晓明",
	"time":"10:05:40",
	"content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;",
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg"
},{
	"noticetitle": "公告标题",
	"nickName": "黄晓明",
	"time":"10:05:40",
	"content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;",
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg"
}];
// 作业内容
// var workdata = [{
// 	"subject":"语文",
// 	"workTitle": "作业1",
// 	"nickName": "黄晓明",
// 	"time":"10:05:40",
// 	"content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
// 	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
// 	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg"
// },{
// 	"subject":"数学",
// 	"workTitle": "作业2",
// 	"nickName": "陈晓",
// 	"time":"10:05:40",
// 	"content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
// 	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
// 	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg"
// }];
//课程表
// var syllabusdata = [{
// 	"subject":"语文",
// 	"workTitle": "课程表1",
// 	"nickName": "黄晓明",
// 	"time":"10:05:40",
// 	"content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
// 	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
// 	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg"
// },{
// 	"subject":"语文",
// 	"workTitle": "课程表2",
// 	"nickName": "陈晓",
// 	"time":"10:05:40",
// 	"content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
// 	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
// 	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg"
// }];
//值日表
var dutytabledata = [{
	"subject":"语文",
	"workTitle": "值日表1",
	"nickName": "黄晓明",
	"time":"10:05:40",
	"content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg"
},{
	"subject":"数学",
	"workTitle": "值日表2",
	"nickName": "陈晓",
	"time":"10:05:40",
	"content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg"
}];
define(['backbone',
	//'model/categorymodel',
	'view/class/noticeview',
	'view/class/classworkview',
	'view/class/classsyllabusview',
	'view/class/classdutytableview',
	'view/class/releasenoticeview',
	'text!tpl/class/categorytpl.html',
	'global'], function(Backbone,NoticeView,ClassWorkView,ClassSyllabusView,ClassDutytableView,ReleaseNoticeView,tpl, global) {   
    var CategoryView = Backbone.View.extend({
        el: $('#container-fluid'),
		classInfoTemplate: _.template(tpl),
		
		// setModel:function(){
		// 	this.model = new CategoryModel();
		// },
		initialize: function() {
			self = this;
        },

		render: function() {
			var container = $('<div class="category fn-clear"></div><div class="categoryShow"></div>');
			this.$el.html(container);
			this.$el.find(".category").html(tpl);
			
			this.getCategoryNotice();
			
        },
        events: {
        	"click .category-notice": "getCategoryNotice",
        	"click .category-work": "getCategoryWork",
        	"click .category-syllabus": "getCategorySyllabus",
        	"click .category-dutytable": "getCategoryDutyTable",
        	"mouseenter .edit-delete": "showButton",
			"mouseleave .edit-delete": "hideButton",
			"mouseenter .class-release": "releaseinfoshow",
			"mouseleave .class-release": "releaseinfohide",
			"click .release-info": "hideinfo",
			"click .release-notice": "getReleaseNotice",
        	"click .release-work": "getReleaseWork",
        	"click .release-syllabus": "getReleaseSyllabus",
        	"click .release-dutytable": "getReleaseDutyTable"
		},
		// 类别切换
		// 公告
		getCategoryNotice: function(){
            var category = this.$el.find(".category");
            category.find("li").removeClass("category-selected");
			category.find(".category-notice").addClass("category-selected");
			category.find(".box-footer").css("display","none");

			var noticeView = new NoticeView();
	            noticeView.setCollection(noticedata123);
	            noticeView.render();
	            self.intercept();
		
			// $.ajax({
	  //            type: "GET",
	  //            //url: global.url + "/Curry/group/getAllGroupAndUsers",
	  //            url: "noticedata.json",
	             
	  //            success: function(data) {
	  //            	//global.quns = null;
			// 		var noticeView = new NoticeView();
		 //            noticeView.setCollection(data);
		 //            noticeView.render();
		 //            self.$el.find(".categoryShow").html(noticeView.$el);
		 //            self.intercept();
		 //            //global.quns = data;
		 //            //console.log(data);
			//      },
			//      error: function (XMLHttpRequest, textStatus, errorThrown) {
			// 	}
	  //        });

		},
		// 作业
		getCategoryWork: function(){
			var category = this.$el.find(".category");
			category.find("li").removeClass("category-selected");
			category.find(".category-work").addClass("category-selected");
			category.find(".box-footer").css("display","block");

			$.ajax({
	             type: "GET",
	             //url: global.url + "/Curry/group/getAllGroupAndUsers",
	             url: "workdata.json",
	             
	             success: function(data) {
	             	//global.quns = null;
			        var workView = new ClassWorkView();
		            workView.setCollection(data);
		            workView.render();
		            self.$el.find(".categoryShow").html(workView.$el);
		            self.intercept();
		            //global.quns = data;
		            console.log(data);
			     },
			     error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
	         });
		},
		// 课程表
		getCategorySyllabus: function(){
			var syllabusView = new ClassSyllabusView();
            syllabusView.setModel();
            syllabusView.render();
            this.$el.find(".categoryShow").html(syllabusView.$el);
			// this.$el.find(".categoryShow").html("3");
			var category = this.$el.find(".category");
			category.find("li").removeClass("category-selected");
			category.find(".category-syllabus").addClass("category-selected");
			category.find(".box-footer").css("display","none");

		},
		// 值日表
		getCategoryDutyTable: function(){
			var dutytableView = new ClassDutytableView();
            dutytableView.setCollection(dutytabledata);
            dutytableView.render();
            this.$el.find(".categoryShow").html(dutytableView.$el);
            this.intercept();
			// this.$el.find(".categoryShow").html("4");
			var category = this.$el.find(".category");
			category.find("li").removeClass("category-selected");
			category.find(".category-dutytable").addClass("category-selected");
			category.find(".box-footer").css("display","none");

		},

		// 发布
		releaseinfoshow: function(e) {
		    $(e.target).find(".release-info").slideDown(100);
		},
		releaseinfohide: function(e) {
		    $(e.target).find(".release-info").slideUp(100);
		},
		hideinfo: function(e) {
			$(e.currentTarget).hide();
		},
		// 发布公告
		getReleaseNotice:function(){
			var releaseNoticeView = new ReleaseNoticeView({
				model: this.model
			});
			releaseNoticeView.render();
		},
		// 发布作业
		getReleaseWork:function(){
			console.log("发布作业");
		},
		// 发布课程表
		getReleaseSyllabus:function(){
			console.log("发布课程表");
		},
		// 发布值日表
		getReleaseDutyTable: function() {
			console.log("发布值日表");
		},
		
		// 编辑/删除
		showButton : function(e) {
			var str = $(e.target).find(".user-list");
			str.find(".nick-item").css("display","inline");
		},
		
		hideButton : function(e) {
			var str = $(e.target).find(".user-list");
			str.find(".nick-item").css("display","none");
		},
		//公告标题文字截取
		intercept : function() {
			$(".text-content").each(function(i,el) {
	    		var str = $(el).text();
	    		var name = str.substr(0,200);
	    		if (str.length > 200) {
	    			var newname = name + '...';
	    			$(this).text(newname);
	    			$(this).siblings("div").find(".notice-open").show();
	    		}else {
	    			$(this).text(str);
	    			$(this).siblings("div").find(".notice-open").hide();
	    		}
    		});
		}

     });
     
     return CategoryView;
 });