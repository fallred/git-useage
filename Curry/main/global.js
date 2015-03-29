/*
* 全局对象模块
* 基于AMD (Asynchronous Module Definition) 规范实现
*/

define(['jquery', 'underscore', 'backbone', 'js/collection'], function($, _, Backbone){

	var global = {};
	//全局高度控制
	global.listHeight = function (){
			//var wHeight = $(window).height(),
			//listContainer = $(".list-container"),
			//contentContainer = $(".content-container"),
			tnstar = $(".tnstar .border-container"),
			//paddingTop = listContainer.position().top;
			//listContainer.height(wHeight - paddingTop -70 );
			//contentContainer.height(wHeight - contentContainer.position().top);
			_.each(tnstar, function(item){
				var itempic = $(item).find("img");
				if(itempic.width() > itempic.height()){
					itempic.css({
						height:"100%",
						
						});
					$(item).height($(item).width());
					$(item).find(".profpic").height($(item).width());
					itempic.css({
						"margin-left": - + ( itempic.width() -  $(item).width()) / 2,
						});
				}else{
					itempic.css("width","100%");
					$(item).height($(item).width());
					$(item).find(".profpic").height($(item).width());
					// itempic.css({
						// "margin-top": - + ( itempic.height() -  $(item).height()) / 2,
						// });
				};
				$(item).css({
					"margin-top": ( tnstar.eq(2).width() - $(item).outerHeight()) / 2,
					"margin-left": ($(item).parent("div").width() - $(item).outerWidth(true) ) / 2
				});
				
			});
			var colwidth = tnstar.closest(".col-xs-2");
			
			tnstar.eq(2).closest(".col-xs-2").css({
				"margin-left": colwidth.innerWidth() * 0.2 ,
				"margin-right": colwidth.innerWidth() * 0.2,
			});
			tnstar.eq(0).closest(".col-xs-2").css({
				"margin-left": colwidth.innerWidth() * 0.3,
			});
			
			//聊天界面高度
			//$(".chatbox .container-content").height(wHeight - 356);
		};
	//全局url
	global.url="http://localhost:8080";
	
	global.temp;
	
	
	//当前会话对象
	global.currentChat = null;
	
	global.friendview = null;
	//用户信息
	global.usrinfo = null;
	//好友分组
	global.groups = [];
	
	//好友列表
	global.friends = null;
	
	//用户的有群
	global.quns=[];
	//群分类
	global.qunsort = [];
	
	//好友关系
	global.relation;
	
	//群成员邀请
	global.qundrag = [];
	
	//保存当前栏目首页，用于关闭页面返回首页
	global.homepage = null;
	//全局路由，使用程序进行手动路由时使用
	global.router = null;
	
	//首页面，路由判断系统是否已加载时使用
	global.view = null;
	
	//各模块view缓存
	global.views = new HashMap();
	
	//首页面tab相关数据
	global.tab = {};
	
	//tab配置数据
	//id: [对应的html页面, tab的label, tab是否已打开, 路由路径]
	global.tab.tabContent = {
		"01" : [ "module/sample/sample1.html", "首页", 0, "sample01" ],
		"02" : [ "module/sample/sample1.html", "系统", 0 ],
		"0201" : [ "module/sample/sample1.html", "日志管理", 0, "sample0201" ],
		"0202" : [ "module/sample/sample1.html", "网络安全", 0, "sample0202" ]
	};
	
	//根据路由路径获取tab配置数据的id
	global.tab.getTabIdByPath = function(path){
		
		var tab = global.tab.tabContent,
			tabId = null;
		for(i in tab){
			if(path === tab[i][3]){
				tabId = i;
				break;
			}
		}
		
		return tabId;
	};
	
	//支持在navTab（非AMD规范）中使用
	window.global = global;
	
	return global;
});
