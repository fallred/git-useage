/*
* 班级详情模块
*/
var classroomdata = [{	
	"groupname":"语文",
	"id":"1",	
	"list":[{"title": "语文",
			"nickName": "adwa",
			"date":"2015年1月15日",
			"content":"某小学关于举行运动会的通知",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"img": "http://localhost:8080/Curry/images/1111.jpg",
			"data": "100",
			"comment":"0",
			"forwarding":"30",
			"praise":"430",
			"collect":"20",
			"read":"70",
		},{"title": "语文",
			"nickName": "kuykyu",
			"date":"2015年1月15日",
			"content":"某小学关于举行运动会的通知",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"img": "http://localhost:8080/Curry/images/1111.jpg",
			"data": "100",
			"comment":"0",
			"forwarding":"30",
			"praise":"430",
			"collect":"20",
			"read":"70",
		}]
},{	
	"groupname":"数学",
	"id":"2",
	"list":[{"title": "数学",
			"nickName": "jhyjt",
			"date":"2015年1月15日",
			"content":"某小学关于举行运动会的通知",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"img": "http://localhost:8080/Curry/images/1111.jpg",
			"data": "100",
			"comment":"0",
			"forwarding":"30",
			"praise":"430",
			"collect":"20",
			"read":"70",
		},{"title": "数学",
			"nickName": "vdgvdf",
			"date":"2015年1月15日",
			"content":"某小学关于举行运动会的通知",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"img": "http://localhost:8080/Curry/images/1111.jpg",
			"data": "100",
			"comment":"0",
			"forwarding":"30",
			"praise":"430",
			"collect":"20",
			"read":"70",
		}]
},{
	"groupname":"英语",
	"id":"3",
	"list":[{
			"title": "英语",
			"nickName": "334e",
			"date":"2015年1月15日",
			"content":"某小学关于举行运动会的通知",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"img": "http://localhost:8080/Curry/images/1111.jpg",
			"data": "100",
			"comment":"0",
			"forwarding":"30",
			"praise":"430",
			"collect":"20",
			"read":"70",
		},{"title": "英语",
			"nickName": "vdsfgvs",
			"date":"2015年1月15日",
			"content":"某小学关于举行运动会的通知",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"img": "http://localhost:8080/Curry/images/1111.jpg",
			"data": "100",
			"comment":"0",
			"forwarding":"30",
			"praise":"430",
			"collect":"20",
			"read":"70",
		}]
}];
var publicdata1 = {
	"pageView1":"675",
	"pageView2":"989",
	"nickName": "童年乐园",
	"number":"4545436545",
	"content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"spaceBg": "http://localhost:8080/Curry/images/usrcardbg4.jpg"
};
// 班级成员
// var memberdata = {
// 	"classname": "2014级301班",
// 	"schname": "湖北省武汉市华师一附中",
// 	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
// 	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
// 	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg"
// };
var memberdata1 = {
	"classname": "2014级301班",
	"id":"301",
 	"schname": "湖北省武汉市华师一附中",
 	"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
	"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
 	"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
 	"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
	"teacher":[{
			"identity": "群主",
			"username": "刘德华",
			"groupmember": "小乖乖",
			"time":"10:05:40",
			"number":"45785465",
			"role":"教师",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg"
		},{
			"identity": "管理员",
			"username": "陈晚秋",
			"groupmember": "飞天猪",
			"time":"10:05:40",
			"number":"45785465",
			"role":"教师",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg"
		}],
	"student":[{
			"identity": "成员",
			"username": "刘盼盼",
			"groupmember": "帅帅安",
			"time":"10:05:40",
			"number":"45785465",
			"role":"学生",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg"
		},{
			"identity": "成员",
			"username": "五天",
			"groupmember": "可可兔",
			"time":"10:05:40",
			"number":"45785465",
			"role":"学生",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg"
		}],
	"parent":[{
			"identity": "群主",
			"username": "张兰兰",
			"groupmember": "冰扬",
			"time":"10:05:40",
			"number":"45785465",
			"role":"家长",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg"
		},{
			"identity": "成员",
			"username": "卡哈哈",
			"groupmember": "天使之吻",
			"time":"10:05:40",
			"number":"45785465",
			"role":"家长",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg"
		}]
};

define(['backbone',
	'model/class/noticemodel',
	'view/class/categoryview',
    'view/class/groupchatview', 
    'view/class/classblogview', 
    'view/class/loveclassview', 
    'view/class/memberview',
    'view/class/membertableview', 
    'view/class/publicview',
    'view/class/classroomview', 
	'text!tpl/class/classdetailtpl.html',
	'global'], 
	function(Backbone,NoticeCollection, CategoryView, GroupChatView,ClassBlogView,LoveClassView, MemberView, MemberTableView, PublicView, ClassRoomView, tpl, global) {   
    // 访问元素视图
	var DetailItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'class-item',
		classDetailTemplate: _.template(tpl),
		
		render: function() {
			this.$el.html(this.classDetailTemplate(this.model.toJSON()));
			return this;
		},
		events: {
        	"click .horn": "showHorn",
        	"click .groupChat": "showGroupChat",
        	"click .blog": "showBlog",
        	"click .loveClass": "showLoveClass",
        	"click .member": "showMember",
        	"click .classroom": "showClassroom",
        	"click .public": "showPublic"
		},
		setParent : function(parent){
			this.parent = parent;
		},

		// 小喇叭
		showHorn : function(e) {
			$(".class-item div").removeClass("itemback");
			$(e.currentTarget).addClass("itemback");
			var categoryView = new CategoryView();
	            categoryView.render();
		},
		// 班级群聊
		showGroupChat : function(e) {
			$(".class-item div").removeClass("itemback");
			$(e.currentTarget).addClass("itemback");
			var groupchatView = new GroupChatView();
	            //groupchatView.setCollection();
	            groupchatView.render();
		},
		// 班级博客
		showBlog : function(e) {
			$(".class-item div").removeClass("itemback");
			$(e.currentTarget).addClass("itemback");
			var classblogView = new ClassBlogView();
        		//classblogView.setParent(this);
	            //groupchatView.setCollection();
	            classblogView.render();
		},
		// 我爱我班
		showLoveClass : function(e) {
			$(".class-item div").removeClass("itemback");
			$(e.currentTarget).addClass("itemback");
			var loveclassView = new LoveClassView();
	            loveclassView.render();
	            loveclassView.setParent(this);
		},
		// 班级成员
		showMember : function(e) {
			$(".class-item div").removeClass("itemback");
			$(e.currentTarget).addClass("itemback");
			
			// render base info
			var memberView = new MemberView();
	             memberView.setData(memberdata1);
	           // memberView.setModel(memberdata123);
	            memberView.render();
	        // render member info
	        var memberTableView = new MemberTableView();
	        	memberdata1.all = _.union(memberdata1.teacher,memberdata1.student,memberdata1.parent);
	        	memberdata1.count = memberdata1.all.length;
				memberTableView.setData(memberdata1);
				memberTableView.containerBuild();
	            memberTableView.getAllData();
		},
		// 云课堂
		showClassroom : function(e) {
			$(".class-item div").removeClass("itemback");
			$(e.currentTarget).addClass("itemback");
			var classroomView = new ClassRoomView();
				classroomView.setCollection(classroomdata);
				classroomView.insertCollection({
					groupname: "全部",
					id: 0,
					list: _.compact(_.flatten(_.pluck(classroomdata,'list')))
				},0);
	            classroomView.render();
		},
		// 本校公众号
		showPublic : function(e) {
			$(".class-item div").removeClass("itemback");
			$(e.currentTarget).addClass("itemback");
			var publicView = new PublicView();
	            publicView.setCollection(publicdata1);
	            publicView.render();
		}
		
	});
	
    
    var ClassDetailView = Backbone.View.extend({
        el: '.list-container',
		setCollection: function(data){
			if(typeof data == "string") {
				var classData = JSON.parse(data);
				this.collection = new NoticeCollection(classData);
			}else {
				this.collection = new NoticeCollection(data);
			}
			//this.collection = new NoticeCollection(data);
		},
		setParent : function(_parent){
			this.parent = _parent;
		},
		render: function() {
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderTnbox(item);
			}, this);
		},
		renderTnbox: function(item) {
			var classDetailView = new DetailItemview({
				model: item
			});
			classDetailView.setParent(this.parent);
			this.$el.append(classDetailView.render().el);
		},
     });
     
     return ClassDetailView;
 });