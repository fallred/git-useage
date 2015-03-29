/*
* 主页面Router
* 基于AMD (Asynchronous Module Definition) 规范实现
*/

define(['backbone','view/tnno/indexview','view/class/classview','view/contact/contactview','view/share/spacecontainerview','view/relation/relationview', 'view/street/streetview', 'global'], 
	function(Backbone, IndexView, ClassView, ContactView, SpacecontainerView,RelationView,StreetView, global) {
    	
	    navEventbinding();
	    
	    var IndexRouter = Backbone.Router.extend({
	        routes: {
	            '': 'indexRoute',
	            '*path': 'defaultRoute'
	        },
	        
	        indexRoute: function(){
	        	
	            //进入主页面，初始化主页面并加载
	            var indexView = new IndexView();
	            indexView.render();
	            
	            // console.log("indexRoute end");
	        },
	
	        defaultRoute: function (path) {
	        	var index = path.substr(5);
	            navToPage(index);    
	            // console.log("defaultRoute end");
	        },
	        
	        destroyView: function(tabId){
	        	switch(tabId) {
		        	
		            default:
		                break;
	        	}
	        	// console.log("destroyView end");
	        }
    });
    
    function navEventbinding(){
    	$(".menu-main").on("click","ul li", function(){
    		var index = $(this).attr("id");
    		global.router.navigate('menu/'+index, {  
			     trigger: true  
			});
    	});
    };
    
    function navToPage(index){
    	var menu = $(".menu-main ul li");
    		menu.removeClass("selected");
    		$(".menu-main ul").find("#"+index).addClass("selected");
    		
    	if(index == "dynamic"){
    		//进入主页面，初始化主页面并加载
    		// $(".content-container .container-fluid").html(temp);
    		// var indexContainerView = new IndexContainerView();
            // indexContainerView.render();
            var indexView = new IndexView();
          	indexView.render();
     
    	} else if(index == "classes"){
    		var classView = new ClassView();
    		// $(".content-container > div").hide();
    	}else if(index == "contacts"){
    		// $(".infopanel").html("");
    		$(".main-list").empty();
    		$("#container-fluid").empty();
    		var contactView = new ContactView();
    		contactView.render();
    	}else if(index == "circle"){
    		// $(".infopanel").html("");
    		$(".main-list").empty();
            $("#container-fluid").empty();
    		//$(".content-container > div").hide();
            var relationView = new RelationView();
            relationView.render();
    	}else if(index == "streets"){
    		$(".main-list").empty();
            $("#container-fluid").empty();
            // $(".content-container > div").hide();
            var streetView=new StreetView();
            streetView.render();
    	}else if(index == "setting"){
    		// $(".infopanel").html("");
    		$(".list-container").html("");
    		//$(".content-container > div").hide();
    	}else if(index == "space"){
    		var spacecontainerView = new SpacecontainerView();
    		spacecontainerView.render();
    	}
    };
    
    return IndexRouter;
});