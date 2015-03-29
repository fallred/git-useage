/*
* 批量注册童年号
*/
define(['backbone','model/class/noticemodel','text!tpl/class/batchcontenttpl.html'], function(Backbone,NoticeCollection, tpl) {   
    // 访问元素视图
	   
    var BatchContentView = Backbone.View.extend({
        el: '#container-fluid',
		classInfoTemplate: _.template(tpl),
		//parent: null,
		setModel:function(){
			this.model = new NoticeCollection();
		},
		initialize: function() {
        },

        events: {
			"click .confirmbtn": "confirmbtn",
			"click .btn-close": "closePage"
		},
		render: function() {
			this.$el.html(tpl);
        },
        setParent : function(parent){
			this.parent = parent;
		},
        confirmbtn: function() {
        	this.$el.find(".success-remind").show();
        },
        closePage: function(){
			this.parent.render();
			//this.$el.empty();
		},
    });
     
     return BatchContentView;
 });