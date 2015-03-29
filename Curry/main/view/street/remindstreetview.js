var remindcontent = [{ 
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
    "lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
     "img": "http://localhost:8080/Curry/images/1111.jpg",
    "nickName": "陈晓星星",
    "reply":"哇，好近啊，我看到科比",
    "invitationtitle": "我在湖人，你在哪里？",
    "streettype":"篮球吧",
    "date":"10:05:40",
    "content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知"
},{
    "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
    "lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
     "img": "http://localhost:8080/Curry/images/1111.jpg",
    "nickName": "陈晓星星",
    "reply":"好看吗？",
    "invitationtitle": "我在看蜡笔小新",
    "streettype":"动漫吧",
    "date":"10:05:40",
    "content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知"
},{
    "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
    "lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
     "img": "http://localhost:8080/Curry/images/1111.jpg",
    "nickName": "陈晓星星",
    "reply":"好好学习天天向上，好孩子。",
    "invitationtitle": "今天你学习了吗？",
    "streettype":"篮球吧",
    "date":"10:05:40",
    "content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知"
}];

/*我的提醒*/
define(['backbone',
	'view/street/remindcontentview',
	'global'], function(Backbone,RemindContentView, global) {  
    var RemindStreetView = Backbone.View.extend({
        el: $('#container-fluid'),
		initialize: function() {

        },
		render: function() {
			this.getRemindStreet();
        },
        events: {
        	// "click .release-blog": "releaseInfo",
        	// "click .myrelease": "myPublish"
        },
		getRemindStreet: function(){
			remindContentView = new RemindContentView();
            remindContentView.setCollection(remindcontent);
            remindContentView.render();
            this.$el.find(".remind").html(remindContentView.$el);
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
     });  
     return RemindStreetView;
 });