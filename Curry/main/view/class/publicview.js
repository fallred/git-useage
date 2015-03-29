/*
* 本校公众号模块
*/
var publicdata = [{
	"title": "义务教育公办寄宿制学校-陈晓星星",
	"nickName": "陈晓星星",
	"date":"2015年2月4日",
	"content":"某小学关于举行运动会的通知经学校研究体比赛项目另行通知望各位老师及同学高度重视积极参与,各班报名截止日期;具体比赛项目另行通知望各位老师及同学高度重视积极参与,各班报名截止日期",
	"img": "http://localhost:8080/Curry/images/1111.jpg",
	"comment":"0",
	"forwarding":"30",
	"praise":"430",
	"collect":"20",
	"read":"70"
},{
	"title": "香港言爱基金捐助",
	"nickName": "阿佛搭",
	"date":"2015年2月4日",
	"content":"毕节市8所思源实验学校是由有关县（区）中小学生到该学校接受较高质量的义务教育，是一项教育移民扶贫工程，是贵州省委、省政府改善民生促进贵州经济社会发展的重点工程。",
	"img": "http://localhost:8080/Curry/images/usrcardbg4.jpg",
	"comment":"0",
	"forwarding":"30",
	"praise":"430",
	"collect":"20",
	"read":"70"
}];
define(['backbone',
	'model/class/noticemodel',
	'view/class/publiccontentview',
	'text!tpl/class/publictpl.html',
	'global'], function(Backbone, NoticeCollection, PublicContentView,tpl, global) {  

    var PublicView = Backbone.View.extend({
        el: $('#container-fluid'),
		classInfoTemplate: _.template(tpl),
		
		setCollection: function(data){
			this.data = data;
		},
		initialize: function() {

        },

		render: function() {
			var container = $('<div class="category fn-clear"></div><div class="bloglistcontainer"></div>');
			this.$el.html(container);
			this.$el.find(".category").html(this.classInfoTemplate(this.data));
			
			this.getMessage();
			this.intercept();
        },
         events: {
			"mouseenter #reportshow": "reportShow",
			"mouseleave #reportshow": "reportHide"
		},
		reportShow:function(e) {
			$(e.target).find(".btn-report").show();
		},
        reportHide:function(e) {
			$(e.target).find(".btn-report").hide();
		},
		// 公告
		getMessage: function(){
			var publicContentView = new PublicContentView();
            publicContentView.setCollection(publicdata);
            publicContentView.render();
            this.$el.find(".bloglistcontainer").html(publicContentView.$el);
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
     
     return PublicView;
 });