define(['backbone',
		'view/share/blogcataview',
		'text!tpl/share/spacetpl.html',
		'text!tpl/share/spaceblogmenutpl.html'], 
    function(Backbone,BlogCataView,tpl,menutpl) {
    var self,receiverId;
    var SpaceView = Backbone.View.extend({
    	el: '#container-fluid',
        template: _.template(tpl),
        parent: null,
        initialize: function(){
        	//空间与聊天窗口共用一个el，解绑事件会导致空间关闭后，聊天窗口绑定事件失效
        	//this.$el.off();
        	self = this;
        },
        render: function(){
        	//只存第一次进入前的值
			this.$el.html(this.template(this.model.toJSON()));
			this.getBlogCata();
			return this;
        },
        setParent: function(parent){
        	this.parent = parent;
        },
       	events:{
       		"click .individualspace .btn-close": "closePage",
       		"click .tab-xg a": "shiftmenu",
       	},
        closePage: function(){
        	//判断当前视图
        	this.parent.render();
        	
        	
    	},
    	shiftmenu: function(e){
    		this.$el.find(".tab-xg li").removeClass("selected");
    		if ($(e.target).closest("li").index() == 0){
    			$(e.target).closest("li").addClass("selected");
    			this.getBlogCata();
    		} else if ($(e.target).closest("li").index() == 1){
    			$(e.target).closest("li").addClass("selected");
    			this.getStreetCata();
    		} else {
    			$(e.target).closest("li").addClass("selected");
    			this.getInfo();
    		}
    	},
    	getBlogCata: function(){
    		receiverId = self.model.get("id");
    		$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blogcategory/queryDefaultBlogCategory",
	            data: "receiverId="+receiverId,
	            success: function(data) {
	            	console.log(data);
	            	//if (!blogCataView){
	            	var	blogCataView = new BlogCataView();
	            	//}
		    		blogCataView.setCollection(data);
		    		//把被访问者ID传到分类view内
		    		blogCataView.getParam(receiverId);
		    		//插入全部按钮
		    		blogCataView.insertCollection({
		    			categoryname: "全部",
		    			id: 0,
		    			member: _.compact(_.flatten(_.pluck(data, 'member')))
		    		},0);
		    		blogCataView.render();
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
    		
    	},
    	getStreetCata: function(){
    		//加载菜单容器
    		//if (!blogCataView){
        	var	blogCataView = new BlogCataView();
        	//}
    		blogCataView.setCollection([{
    			text: "综合博客",
    			mid: 1,
    		},{
    			text: "日记周记",
    			mid: 2,
    		},{
    			text: "作文练习",
    			mid: 3,
    		},{
    			text: "原创文学",
    			mid: 4,
    		},{
    			text: "吐槽爆料",
    			mid: 5,
    		},{
    			text: "秘密基地",
    			mid: 6,
    		}]);
    		blogCataView.render();
    	},
    	getInfo: function(){
    		//加载菜单容器
    		this.$el.find(".spacecontainer").html(111);
    	},
    	
    });
    
    return SpaceView;
});