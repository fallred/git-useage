//关注的街区
var focusstreetdata1=[{
    "id":"0",
    "streetname":"奶茶吧0"
   },{
    "id":"1",
    "streetname":"奶茶吧1"
   },{
    "id":"2",
    "streetname":"奶茶吧2"
   },{
    "id":"3",
    "streetname":"奶茶吧3"
    },{
    "id":"4",
    "streetname":"奶茶吧4"
    },{
    "id":"5",
    "streetname":"奶茶吧5"
    },{
    "id":"6",
    "streetname":"奶茶吧6"
    },{
    "id":"7",
    "streetname":"奶茶吧7"
    },{
    "id":"8",
    "streetname":"奶茶吧8"
    }];
//精选街区数据
var hotstreetdata1=[{
    "id":"0",
    "streetname":"篮球吧0"
   },{
    "id":"1",
    "streetname":"篮球吧1"
   },{
    "id":"2",
    "streetname":"篮球吧2"
   },{
    "id":"3",
    "streetname":"篮球吧3"
    },{
    "id":"4",
    "streetname":"篮球吧4"
    },{
    "id":"5",
    "streetname":"篮球吧5"
    },{
    "id":"6",
    "streetname":"篮球吧6"
    },{
    "id":"7",
    "streetname":"篮球吧7"
    },{
    "id":"8",
    "streetname":"篮球吧8"
    }];
    var hotstreetdata2=[{
    "id":"0",
    "streetname":"篮球吧9"
   },{
    "id":"1",
    "streetname":"篮球吧10"
   },{
    "id":"2",
    "streetname":"篮球吧11"
   },{
    "id":"3",
    "streetname":"篮球吧12"
    },{
    "id":"4",
    "streetname":"篮球吧13"
    },{
    "id":"5",
    "streetname":"篮球吧14"
    },{
    "id":"6",
    "streetname":"篮球吧15"
    },{
    "id":"7",
    "streetname":"篮球吧16"
    },{
    "id":"8",
    "streetname":"篮球吧17"
    }];
//分类街区数据
 /*var classifystreetdata1=[{
    "classifyid":"entertainment",
    "streettype2":"娱乐明星",
    "streetname":["港台东南亚明星","内地明星","韩国明星","欧美明星","日本明星","内地明星","欧美明星","韩国明星","港台东南亚明星"]
   },{
    "classifyid":"sports",
    "streettype2":"体育",
    "streetname":["足球","篮球","羽毛球","健身"]
   },{
    "classifyid":"game",
    "streettype2":"游戏",
    "streetname":["客户端游戏","网页游戏","小游戏","单机游戏","网页游戏","客户端游戏"]
   },{
    "classifyid":"school",
    "streettype2":"学校",
    "streetname":["北京院校","福建院校","湖北院校","四川院校","上海院校","苏州院校"]
    }];*/
var classifydata1=[{
        "streettype1":"运动",
        "streettype2":[{
           "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
           "streetname":"童话乐园", 
           "fans":"119",
           "invitation":"898"    
           },{
           "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
           "streetname":"宝宝乐园", 
           "fans":"119",
           "invitation":"898" 
           },{
           "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
           "streetname":"成年乐园", 
           "fans":"119",
           "invitation":"898" 
           },{
            "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
            "streetname":"小孩乐园",
            "fans":"119",
            "invitation":"898"
           },{
           "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
           "streetname":"少年乐园", 
           "fans":"119",
           "invitation":"898" 
           },{
            "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
            "streetname":"美少女乐园",
            "fans":"119",
            "invitation":"898"
           }]
        },{
            "streettype1":"学习",
            "streettype2":[{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"数学", 
               "fans":"119",
               "invitation":"898"    
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"语文", 
               "fans":"119",
               "invitation":"898" 
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"英语", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"历史",
                "fans":"119",
                "invitation":"898"
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"地理", 
               "fans":"119",
               "invitation":"898" 
                },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"计算机",
                "fans":"119",
                "invitation":"898"
               }]
       },{
            "streettype1":"游戏",
            "streettype2":[{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"客户端游戏", 
               "fans":"119",
               "invitation":"898"    
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"网页游戏", 
               "fans":"119",
               "invitation":"898" 
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"多机游戏", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"单机游戏",
                "fans":"119",
                "invitation":"898"
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"小游戏", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"智力游戏",
                "fans":"119",
                "invitation":"898"
               }]
       },{
            "streettype1":"学校",
            "streettype2":[{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"北京院校", 
               "fans":"119",
               "invitation":"898"    
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"福建院校", 
               "fans":"119",
               "invitation":"898" 
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"湖北院校", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"四川院校",
                "fans":"119",
                "invitation":"898"
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"上海院校", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"苏州院校",
                "fans":"119",
                "invitation":"898"
               }]
       },{
            "streettype1":"娱乐明星",
            "streettype2":[{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"港台东南亚明星", 
               "fans":"119",
               "invitation":"898"    
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"内地明星", 
               "fans":"119",
               "invitation":"898" 
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"韩国明星", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"欧美明星",
                "fans":"119",
                "invitation":"898"
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"日本明星", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"中国明星",
                "fans":"119",
                "invitation":"898"
               }]
       }];
       var classifydata2=[{
        "streettype1":"运动2",
        "streettype2":[{
           "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
           "streetname":"童话乐园2", 
           "fans":"119",
           "invitation":"898"    
           },{
           "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
           "streetname":"宝宝乐园2", 
           "fans":"119",
           "invitation":"898" 
           },{
           "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
           "streetname":"成年乐园2", 
           "fans":"119",
           "invitation":"898" 
           },{
            "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
            "streetname":"小孩乐园2",
            "fans":"119",
            "invitation":"898"
           },{
           "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
           "streetname":"少年乐园2", 
           "fans":"119",
           "invitation":"898" 
           },{
            "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
            "streetname":"美少女乐园2",
            "fans":"119",
            "invitation":"898"
           }]
        },{
            "streettype1":"学习2",
            "streettype2":[{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"数学2", 
               "fans":"119",
               "invitation":"898"    
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"语文2", 
               "fans":"119",
               "invitation":"898" 
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"英语2", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"历史2",
                "fans":"119",
                "invitation":"898"
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"地理2", 
               "fans":"119",
               "invitation":"898" 
                },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"计算机2",
                "fans":"119",
                "invitation":"898"
               }]
       },{
            "streettype1":"游戏2",
            "streettype2":[{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"客户端游戏2", 
               "fans":"119",
               "invitation":"898"    
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"网页游戏2", 
               "fans":"119",
               "invitation":"898" 
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"多机游戏2", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"单机游戏2",
                "fans":"119",
                "invitation":"898"
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"小游戏2", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"智力游戏2",
                "fans":"119",
                "invitation":"898"
               }]
       },{
            "streettype1":"学校2",
            "streettype2":[{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"北京院校2", 
               "fans":"119",
               "invitation":"898"    
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"福建院校2", 
               "fans":"119",
               "invitation":"898" 
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"湖北院校2", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"四川院校2",
                "fans":"119",
                "invitation":"898"
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"上海院校2", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"苏州院校2",
                "fans":"119",
                "invitation":"898"
               }]
       },{
            "streettype1":"娱乐明星2",
            "streettype2":[{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"港台东南亚明星2", 
               "fans":"119",
               "invitation":"898"    
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"内地明星2", 
               "fans":"119",
               "invitation":"898" 
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"韩国明星", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"欧美明星",
                "fans":"119",
                "invitation":"898"
               },{
               "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
               "streetname":"日本明星", 
               "fans":"119",
               "invitation":"898" 
               },{
                "streetphoto":"http://localhost:8080/Curry/images/userpm.jpg",
                "streetname":"中国明星",
                "fans":"119",
                "invitation":"898"
               }]
       }];
/*
* 添加街区弹层模块
*/
define(['backbone',
    'view/street/dialoveconview',
    'view/street/diahotconview',
    'view/street/diaclassifyconview',
	  'text!tpl/street/addlovestreetlayertpl.html',
	  'global'], 
	function(Backbone,DiaLoveConView,DiaHotConView,DiaClassifyConview,tpl,global) {   
    var interest_data = [];
    // 访问元素视图
	var AddLoveStreetLayerView = Backbone.View.extend({
		tagName: 'div',
		className: 'addlovestreetmsg fn-clear',
		// addclassTemplate: _.template(tpl),
		initialize: function(){
			self =this;
		},
		setParent:function(parent){
          this.parent=parent;
		},
    events:{
      // "click .hotstreet .btn-r-r-md,.classifystreet .btn-r-r-md":"clickbtnAdd",
  
      "click .deleteItem .del-btn":"clickbtnDel",
      "click .addStreet":"searchAdd",
      "click .btn-search":"searchData",
    },
    aa:function(){
      alert("aa");
    },
    //关闭弹框，清楚缓存在 interest_data数组里面的数据
    clearData:function(){
       // interest_data=[];
         interest_data.splice(0,interest_data.length);
    },
    /*弹框的搜索事件*/
    searchData:function(){
        this.getHotStreet(hotstreetdata2);
        this.getClassifyStreet(classifydata2);
    },
    searchAdd:function(){
         var searchValue=$('.addlovestreetmsg .searchpanel input').val();
         $(".intereststreet ul").prepend('<li class="lovestreetitem deleteItem"><div class="lovestreetcol"><a class="btn-r-r-md">'+searchValue+'</a><b class="del-btn">×</b></div></li>');
          var obj={"id":"0","streetname":searchValue};
           interest_data.unshift(obj);
         //遍历分类的街区，如果和输入框内容一致，就添加选中样式，并其不重复添加一样的街区
          $.each($(".addItem").find("a"), function(){
            if ($(this).text() == searchValue){
              $(this).css("background","#f76b66");
            }
          });
    },
    isExist:function(text){
      for(var i=0; i<interest_data.length; i++){
        if (interest_data[i].streetname == text)
          return true;
      }
      return false;
    },
    clickbtnAdd:function(e){
      var text = $(e.currentTarget).parent().find("a").text();
      if(!this.isExist(text)){
        // $(".intereststreet ul").prepend('<li class="lovestreetitem deleteItem"><div class="lovestreetcol"><a class="btn-r-r-md">'+text+'</a><b class="del-btn">×</b></div></li>');
         var obj={"id":"0","streetname":text};  
         interest_data.unshift(obj);
        $(e.currentTarget).parent().find("a").css("background","#f76b66");
      } else{
        return
      }
    },
    clickbtnDel:function(e){
      var text = $(e.currentTarget).parent().find("a").text();
      var j=0;
      for(var i=0; i<interest_data.length; i++){
        if(interest_data[i].streetname == text){
          j=i;
          break;
        }
      }
      interest_data.splice(j,1);
        var obj={"id":"0","streetname":interest_data[j]};
          // this.parent.collection.remove(obj);
      $.each($(".addItem").find("a"), function(){
        if ($(this).text() == text){
          $(this).css("background","#57a9d1");
        } else {
          // $(".tiplabel").hide();
        }
      });
      $(e.target).parent("div").parent("li").remove();
    },
		render: function(){
			this.$el.html(tpl);
			// this.parent.renderMyFocusStreet();
      // this.loadInterest();
      this.getMyFocusStreet();
			this.getHotStreet(hotstreetdata1);
			var d = dialog({
				  id: "addlovestreet",
			    title: '添加爱逛的街区',
			    // content: this.el.innerHTML,
			    content: this.$el,
          // cancelValue: '取消',
          cancel:function () {
           // clearData();
             self.clearData();
          },
			    okValue: '确认',
			    ok: function() {
    	      /*  str = '';
              for(var i=0; i<interest_data.length; i++) {
                  str += '<li class="lovestreetitem lovestreetitem0"><div class="lovestreetcol"><a class="btn-r-r-md">'+interest_data[i]+'</a></div></li>';
              };
              $(".categoryShow .container-box .dynamiclovestreet").prepend(str);*/
            self.postData();
			    },
			    width:600,
			    height:500,
			    onremove: function () {
			        self.$el.remove();
			    },
			});
      this.getClassifyStreet(classifydata1);
			d.showModal();
			return this;
		},
    postData:function(){
      /*$.ajax({
              type: "post",
              url: global.url + "/Curry/relagrp/updateUserrelagrpBatchForUser?userId="+ global.usrinfo.id,
              dataType:"json",      
              data: {JSON.stringify(interest_data)},
              success: function(data) {

              },
              error: function (XMLHttpRequest, textStatus, errorThrown) {
              }
          });*/
         // dynamiclovestreetdata=interest_data; 
         self.parent.collection.add(interest_data);
         // self.parent.render();  
    },
    loadInterest:function(){
       $(".intereststreet ul").empty();
         var addedStr = '';
         for(var i=0; i<interest_data.length; i++){
          addedStr += '<li class="lovestreetitem deleteItem"><div class="lovestreetcol"><a class="btn-r-r-md">'+interest_data[i]+'</a><b class="del-btn">×</b></div></li>';
          $.each($(".addItem").find("a"), function(){
              if ($(this).text() == interest_data[i]){
                  $(this).css("background","#f76b66");
              }
          });
       };
       $(".intereststreet ul").html(addedStr);
    },
    //添加我关注的街区 弹框 数据保持和 我的街区里面的爱逛的街区一致
    //这个方法放在这里是为了可以获取当前的model
    getMyFocusStreet:function(){
          var focusStreetView = new DiaLoveConView();
          focusStreetView.setCollection(dynamiclovestreetdata);
          focusStreetView.render();
          this.$el.find(".intereststreet .box-content-fluid").html(focusStreetView.$el);
          var str=$('<div class="fn-clear operate friendmgbox"><h2>街区名称</h2><div class="searchpanel"><input type="text"/><a href="javascript:void(0)" class="btn btn-search"><i class="iconfont">&#xe607;</i></a></div><div class="tnstreetbtn"><a href="javascript:void(0)" class="btn-r-r-md addStreet">添加</a></div></div>');
          this.$el.find(".intereststreet .box-content-fluid").append(str);
    },
		getHotStreet:function(hotstreetdata1){
	      var hotStreetView = new DiaHotConView();
        hotStreetView.setCollection(hotstreetdata1);
        hotStreetView.render();
        this.$el.find(".hotstreet .box-content-fluid").html(hotStreetView.$el);   
        // this.$el.find(".hotstreet li b").html('+').removeClass('del-btn').addClass('add-btn');
        // this.$el.find(".hotstreet li").removeClass('deleteItem').addClass('addItem');
    },
    getClassifyStreet: function(classifydata1){
    		var classifyStreetView = new DiaClassifyConview();
        classifyStreetView.setCollection(classifydata1);
    		classifyStreetView.render();
    },	
	});
     return AddLoveStreetLayerView;
 });