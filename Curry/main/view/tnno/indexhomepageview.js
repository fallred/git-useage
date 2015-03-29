/*
* 主页面Router
* 基于AMD (Asynchronous Module Definition) 规范实现
*/
//首页新闻
var indexnewsdata = [{
	"rank": 1,
	"author": "黄晓明",
	"title": "中国军队派舰机参与亚航客机搜救",
	"titlefull": "中国军队派舰机参与亚航客机搜救1111"
},{
	"rank": 2,
	"author": "黄晓明",
	"title": "官员举报大老虎后落马",
	"titlefull": "中国军队派舰机参与亚航客机搜救1111"
},{
	"rank": 3,
	"author": "黄晓明",
	"title": "安徽退休检察官自我举报办错案",
	"titlefull": "中国军队派舰机参与亚航客机搜救1111"
},{
	"rank": 4,
	"author": "黄晓明",
	"title": "油价跌回6元时代 国际油价创5年新低",
	"titlefull": "中国军队派舰机参与亚航客机搜救1111"
},{
	"rank": 5,
	"author": "黄晓明",
	"title": "中国军队派舰机参与亚航客机搜救",
	"titlefull": "中国军队派舰机参与亚航客机搜救1111"
},{
	"rank": 6,
	"author": "黄晓明",
	"title": "官员举报大老虎后落马",
	"titlefull": "中国军队派舰机参与亚航客机搜救1111"
}];
var hotblogdata = [{
	"rank": 1,
	"author": "黄晓明",
	"title": "中国军队派舰机参与亚航客机搜救"
},{
	"rank": 2,
	"author": "黄晓明",
	"title": "官员举报大老虎后落马"
},{
	"rank": 3,
	"author": "黄晓明",
	"title": "安徽退休检察官自我举报办错案"
},{
	"rank": 4,
	"author": "黄晓明",
	"title": "油价跌回6元时代 国际油价创5年新低"
},{
	"rank": 5,
	"author": "黄晓明",
	"title": "中国军队派舰机参与亚航客机搜救"
},{
	"rank": 6,
	"author": "黄晓明",
	"title": "官员举报大老虎后落马"
},{
	"rank": 7,
	"author": "黄晓明",
	"title": "安徽退休检察官自我举报办错案"
},{
	"rank": 8,
	"author": "黄晓明",
	"title": "油价跌回6元时代 国际油价创5年新低"
}];
//与我相关
var myconcerndata = [{
	"type": "visit",
    "nickName": "黄晓明",
    "action": "访问",
    "subject": "空间",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "date": "14.12.29",
    "time": "10:00"
},{
	"type": "comment",
    "nickName": "黄晓明",
    "action": "评论",
    "subject": "空间",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "date": "14.12.29",
    "time": "10:00"
},{
	"type": "call",
    "nickName": "黄晓明",
    "action": "@",
    "subject": "空间",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "date": "14.12.29",
    "time": "10:00"
},{
	"type": "collect",
    "nickName": "黄晓明",
    "action": "收藏",
    "subject": "空间",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "date": "14.12.29",
    "time": "10:00"
},{
	"type": "like",
    "nickName": "黄晓明",
    "action": "点赞",
    "subject": "空间",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "date": "14.12.29",
    "time": "10:00"
},{
	"type": "forward",
    "nickName": "黄晓明",
    "action": "转发",
    "subject": "空间",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "date": "14.12.29",
    "time": "10:00"
},{
	"type": "reply",
    "nickName": "黄晓明",
    "action": "回复",
    "subject": "空间",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "date": "14.12.29",
    "time": "10:00"
}];
//童年之星
var tnstardata = [{
	"nickname": "黄晓明",
	"rank": 4,
	"schoolName": "华中师范大学",
	"mPhoto": "http://localhost:8080/Curry/images/lg01.jpg"
},{
	"nickname": "张惠妹",
	"rank": 2,
	"schoolName": "武汉大学",
	"mPhoto": "http://localhost:8080/Curry/images/lg02.jpg"
},{
	"nickname": "小牛牛",
	"rank": 1,
	"schoolName": "华中科技大学",
	"mPhoto": "http://localhost:8080/Curry/images/lg03.jpg"
},{
	"nickname": "汤姆克鲁斯",
	"rank": 3,
	"schoolName": "中南财经",
	"mPhoto": "http://localhost:8080/Curry/images/lg04.jpg"
},{
	"nickname": "Beyonce",
	"rank": 5,
	"schoolName": "湖北大学",
	"mPhoto": "http://localhost:8080/Curry/images/lg05.jpg"
}];
//首页幻灯片
var sliderdata = [{
	"pic" : "http://localhost:8080/Curry/images/pic01.jpg",
	"title" :"春节高峰",
},{
	"pic" : "http://localhost:8080/Curry/images/pic02.jpg",
	"title" :"春节高峰",
},{
	"pic" : "http://localhost:8080/Curry/images/pic03.jpg",
	"title" :"春节高峰",
},{
	"pic" : "http://localhost:8080/Curry/images/pic04.jpg",
	"title" :"春节高峰",
},{
	"pic" : "http://localhost:8080/Curry/images/1111.jpg",
	"title" :"春节高峰",
},{
	"pic" : "http://localhost:8080/Curry/images/4-141114135I9.jpg",
	"title" :"春节高峰",
}];
define(['backbone', 
            'view/tnno/tnstarview',
            'view/tnno/interestview',
            'view/tnno/sliderview', 
            'view/tnno/myconcernview',
            'view/tnno/hotblogview', 
            'view/tnno/indexnewsview',
            'text!tpl/tnno/indexcontainertpl.html',
            'global'], 
    function(Backbone, TnstarView, InterestView, SliderView, MyconcernView, HotblogView, IndexNewsView, indexcontainertpl, global) {
    var self;
    var IndexHomePageView = Backbone.View.extend({
    	el: "#container-fluid",
    	containerBuild : function(){
    		this.$el.html(indexcontainertpl);
    	},
 		initialize: function(){
 			self = this;
 			$(window).on("resize", function(){
				global.listHeight();
			});
 			global.homepage = this;
 		},
        render: function(){
        	this.containerBuild();
           //$(".content-container .container-fluid").html(container);
            //进入主页面，初始化主页面并加载
            this.getTnstar();
            this.getInterest();
            this.getSlider();
            this.getMyconcern();
            this.getHotblog();
            this.getIndexnews();
            global.listHeight();
       		
        },
        getIndexnews : function(){
        	var indexNewsView = new IndexNewsView();
	            indexNewsView.setCollection(indexnewsdata);
	            indexNewsView.render();
	            this.$el.find(".sliderbox").append(indexNewsView.$el);
        },
        getHotblog : function(){
        	var hotblogView = new HotblogView();
	            hotblogView.setCollection(hotblogdata);
	            hotblogView.render();
	            this.$el.find(".hotblog-title").html(hotblogView.$el);
        },
        getMyconcern : function(){
        	var myconcernView = new MyconcernView();
	            myconcernView.setCollection(myconcerndata);
	            myconcernView.render();
	            this.$el.find(".myconcern").html(myconcernView.$el);
        },
        getSlider : function(){
        	var sliderView = new SliderView();
	            sliderView.setCollection(sliderdata);
	            sliderView.render();
	            this.$el.find(".sliderbox").append(sliderView.$el);
	            sliderView.glide();
        },
        getTnstar : function(){
        	var tnstarView = new TnstarView();
	            tnstarView.setCollection(tnstardata);
	            tnstarView.render();
	            this.$el.find(".tnbox .box-content-fluid").append(tnstarView.$el);
        },
    	getInterest: function(){
         $.ajax({
             type: "GET",
             url: global.url + "/Curry/user/getUsers",
             
             success: function(data) {    
		        var interestView = new InterestView();
	            interestView.setCollection(data);
	            interestView.render();
	            console.log(data);
	            console.log(interestView.$el);
	            self.$el.find(".tnbox .box-content-fluid").append(interestView.$el);
		     },    
		     error: function (XMLHttpRequest, textStatus, errorThrown) {
			}
			
         });
         
    	},
        
    });
    
    
      
    
    return IndexHomePageView;
});