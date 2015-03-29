define(['backbone',
		'view/share/blogcataview',
		'text!tpl/share/spacebloglisttpl.html'], 
    function(Backbone,BlogCataView,tpl) {
    var self,tempHTML;
    var SpaceView = Backbone.View.extend({
    	el: '#container-fluid',
        template: _.template(tpl),
        initialize: function(){
        	self = this;
        },
        render: function(){
        	//只存第一次进入前的值
        	if( tempHTML == null){
				tempHTML = $("#container-fluid").html();
			}
			this.$el.html(this.template(this.model.toJSON()));
			this.getBlogCata();
			return this;
        },
       	events:{
       		"click .btn-close": "closePage",
       	},
        closePage: function(){
        	//判断当前视图
        	if(this.$el.find(".individualspace").length > 0){
				
    			this.$el.html(tempHTML);
    			tempHTML = null;
			}
    	},
    	getBlogCata: function(){
    		var blogCataView = new BlogCataView();
    		blogCataView.setCollection([{
    			text: "综合博客",
    			mid: 1,
    			member: [{text:"小说",mid: 1, sid:11},{text:"小说2",mid: 1, sid:12}]
    		},{
    			text: "日记周记",
    			mid: 2,
    			member: [{text:"趣味绕口令",mid: 2, sid:21},{text:"小说",mid: 2, sid:22}]
    		},{
    			text: "作文练习",
    			mid: 3,
    			member: [{text:"观后感",mid: 3, sid:31},{text:"小说",mid: 3, sid:32}]
    		},{
    			text: "原创文学",
    			mid: 4,
    			member: [{text:"学习计划",mid: 4, sid:41},{text:"小说",mid: 4, sid:42}]
    		},{
    			text: "吐槽爆料",
    			mid: 5,
    			member: [{text:"爸妈故事",mid: 5, sid:51},{text:"小说",mid: 5, sid:52}]
    		},{
    			text: "秘密基地",
    			mid: 6,
    			member: [{text:"写作练习",mid: 6, sid:61},{text:"小说",mid: 6, sid:62}]
    		}]);
    		blogCataView.render();
    		this.$el.find(".maincata").html(blogCataView.$el);
    	}
    });
    
    return SpaceView;
});