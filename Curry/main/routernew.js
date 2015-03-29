/*
* 主页面Router
* 基于AMD (Asynchronous Module Definition) 规范实现
*/

define(['backbone','view/indexview','view/classview','view/contactview', 'global'], 
    function(Backbone, IndexView, ClassView, ContactView, global) {
        
        navEventbinding();
        
        var IndexRouter = Backbone.Router.extend({
            routes: {
                '': 'indexRoute',
                '*path': 'defaultRoute'
            },
            
            indexRoute: function(){
                //进入主页面，初始化主页面并加载
                var indexView = new IndexView();
               
                
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
            var index = $(this).index();
            global.router.navigate('menu/'+index, {  
                 trigger: true  
            });
        });
    };
    
    function navToPage(index){
        var menu = $(".menu-main ul li");
            menu.removeClass("selected");
            menu.eq(index).addClass("selected");
            
        if(index == "0"){
            //进入主页面，初始化主页面并加载
            // $(".content-container .container-fluid").html(temp);
            // var indexContainerView = new IndexContainerView();
            // indexContainerView.render();
            var indexView = new IndexView();
          
     
        } else if(index == "1"){
            var classView = new ClassView();
            
            // $(".content-container > div").hide();
        }else if(index == "2"){
            // $(".infopanel").html("");
            $(".main-list").empty();
            $("#container-fluid").empty();
            var contactView = new ContactView();
        }else if(index == "3"){
            // $(".infopanel").html("");
            $(".list-container").html("");
            $(".content-container > div").hide();
        }else if(index == "4"){
            // $(".infopanel").html("");
            $(".list-container").html("");
            $(".content-container > div").hide();
        }
    };
    
    return IndexRouter;
});