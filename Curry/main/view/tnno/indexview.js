/*
* 主页面Router
* 基于AMD (Asynchronous Module Definition) 规范实现
*/
define(['backbone', 
            'view/tnno/indexhomepageview',
            'view/tnno/latestmsgview',
            'global'], 
    function(Backbone, IndexHomePageView,LatestMsgView, global) {
    	var self;
    //
    var IndexView = Backbone.View.extend({
    	el: $("#main-container"),
    	containerBuild : function(){
    		var listcontainer = $('<div class="list-container"></div>');
    		this.$el.find(".main-list").removeAttr("id").html(listcontainer);
    	},
 		initialize: function(){
 			this.containerBuild();
 			self = this;
 		},
        render: function(){
           //$(".content-container .container-fluid").html(container);
            //进入主页面，初始化主页面并加载
	        //this.getUser();
            this.getLatestMsg();
       		this.indexHomePage();
        },
    	getLatestMsg: function(){
	        var latestMsgView = new LatestMsgView();
            latestMsgView.setCollection([1,2,3]);
            latestMsgView.render();
    	},
        indexHomePage: function(){
    		var indexHomePageView = new IndexHomePageView();
    		indexHomePageView.render();
    	},
    });
    
    
      
    
    return IndexView;
});